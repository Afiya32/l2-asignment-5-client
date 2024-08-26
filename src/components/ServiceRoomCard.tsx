/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import demoImage from "../assets/hero2.jpg";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import Loader from "./Loader";


// Define an interface for room data
interface Room {
  _id: string;
  name: string;
  capacity: number;
  pricePerSlot: number;
  image?: string;
}

const ServiceRoomCard = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('https://assignment-03-five.vercel.app/api/rooms');
       
        setRooms(response.data.data);
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
 

  if (loading) return <Loader/>;
  if (error) return <div className="flex justify-center items-center">Error loading rooms: {error}</div>;

  return (
    <div className="room-page p-4">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
        Meeting Rooms
       
      </h1>
      <div className=" mx-auto room-listings grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {rooms.slice(0, 4).map((room) => (
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
      <div className="flex justify-center items-center mt-5 w-3/11">
        <Link to='/rooms' className="btn btn-outline btn-info  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent w-3/12">See More</Link>
      </div>
    </div>
  );
};

export default ServiceRoomCard;
