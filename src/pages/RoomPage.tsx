/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import demoImage from "../assets/hero.jpg";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const RoomPage = () => {
  interface Room {
    _id: string;
    name: string;
    capacity: number;
    pricePerSlot: number;
    image?: string;
    floorNo: number;
  }

  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("ascending");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4; // Number of items per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('https://assignment-03-five.vercel.app/api/rooms');
        setRooms(response.data.data);
        setFilteredRooms(response.data.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    filterRooms();
  }, [searchTerm, capacityFilter, priceFilter, sortOrder, currentPage]);

  const filterRooms = () => {
    let updatedRooms = rooms;

    if (searchTerm) {
      updatedRooms = updatedRooms.filter(
        room =>
          room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.pricePerSlot.toString().includes(searchTerm) ||
          room.capacity.toString().includes(searchTerm) ||
          room.floorNo.toString().includes(searchTerm)
      );
    }

    if (capacityFilter !== "all") {
      updatedRooms = updatedRooms.filter(room => {
        const capacity = room.capacity;
        switch (capacityFilter) {
          case "5-":
            return capacity <= 5;
          case "5+":
            return capacity > 5 && capacity <= 10;
          case "10-":
            return capacity > 5 && capacity <= 10;
          case "10+":
            return capacity > 10 && capacity <= 20;
          case "20-":
            return capacity > 10 && capacity <= 20;
          case "20+":
            return capacity > 20 && capacity <= 50;
          case "50-":
            return capacity > 20 && capacity <= 50;
          case "50+":
            return capacity > 50;
          default:
            return true;
        }
      });
    }

    if (priceFilter !== "all") {
      updatedRooms = updatedRooms.filter(room => {
        const price = room.pricePerSlot;
        switch (priceFilter) {
          case "+50":
            return price >= 50 && price < 100;
          case "-50":
            return price < 50;
          case "+100":
            return price >= 100 && price < 500;
          case "-100":
            return price < 100;
          case "+500":
            return price >= 500 && price < 1000;
          case "-500":
            return price < 500;
          case "+1000":
            return price >= 1000;
          case "-1000":
            return price < 1000;
          default:
            return true;
        }
      });
    }

    // Apply sorting based on sortOrder
    if (sortOrder === "ascending") {
      updatedRooms.sort((a, b) => a.pricePerSlot - b.pricePerSlot);
    } else if (sortOrder === "descending") {
      updatedRooms.sort((a, b) => b.pricePerSlot - a.pricePerSlot);
    }

    // Calculate pagination
    const indexOfLastRoom = currentPage * itemsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - itemsPerPage;
    const currentRooms = updatedRooms.slice(indexOfFirstRoom, indexOfLastRoom);

    setFilteredRooms(currentRooms);
  };

  const totalPages = Math.ceil(rooms.length / itemsPerPage);

  if (loading) return <Loader/>;
  if (error) return <div className="flex justify-center items-center">Error loading rooms: {error}</div>;

  return (
    <div className="room-page p-4 bg-stone-400">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
        Meeting Rooms
      </h1>

      <div className="mb-8 w-4/6 mx-auto">
        <input
          type="text"
          placeholder="Search by name, price, floor, capacity"
          className="input input-bordered w-full mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap gap-4 ml-44 mx-auto">
          <select
            className="select select-bordered"
            value={capacityFilter}
            onChange={(e) => setCapacityFilter(e.target.value)}
          >
            <option value="all">All Capacities</option>
            <option value="5-">5-</option>
            <option value="5+">5+</option>
            <option value="10-">10-</option>
            <option value="10+">10+</option>
            <option value="20-">20-</option>
            <option value="20+">20+</option>
            <option value="50-">50-</option>
            <option value="50+">50+</option>
          </select>

          <select
            className="select select-bordered"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="+50">+50</option>
            <option value="-50">-50</option>
            <option value="+100">+100</option>
            <option value="-100">-100</option>
            <option value="+500">+500</option>
            <option value="-500">-500</option>
            <option value="+1000">+1000</option>
            <option value="-1000">-1000</option>
          </select>

          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ascending">Price Ascending</option>
            <option value="descending">Price Descending</option>
          </select>

          <button
            className="btn btn-outline"
            onClick={() => {
              setSearchTerm("");
              setCapacityFilter("all");
              setPriceFilter("all");
              setSortOrder("ascending"); // Reset sorting to ascending
              setCurrentPage(1); // Reset to first page
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>

      <div className="room-listings grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room._id}
            _id={room._id}
            name={room.name}
            capacity={room.capacity}
            price={room.pricePerSlot}
            imageUrl={room.image || demoImage}
          />
        ))}
      </div>

      <div className="pagination mt-8 flex justify-center">
        <button
          className="btn btn-outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
        >
          Previous
        </button>
        <span className="mx-4 text-center mt-3">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline mb-5"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default RoomPage;
