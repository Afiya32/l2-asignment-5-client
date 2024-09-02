/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader';

// Define TypeScript types for Room data
interface Room {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
  bookings: string[];
  image: string;
}

const RoomManagement: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('Create New Room');
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Omit<Room, '_id' | 'isDeleted' | 'bookings'>>({
    name: '',
    roomNo: 0,
    floorNo: 0,
    capacity: 0,
    pricePerSlot: 0,
    amenities: [],
    image: ''
  });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('https://assignment-03-five.vercel.app/api/rooms');
        setRooms(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching room data:', error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleCreateRoom = () => {
    setModalTitle('Create New Room');
    setFormValues({
      name: '',
      roomNo: 0,
      floorNo: 0,
      capacity: 0,
      pricePerSlot: 0,
      amenities: [],
      image: ''
    });
    setCurrentRoomId(null);
    setIsModalOpen(true);
  };

  const handleUpdateRoom = (room: Room) => {
    setModalTitle('Update Room');
    setFormValues({
      name: room.name,
      roomNo: room.roomNo,
      floorNo: room.floorNo,
      capacity: room.capacity,
      pricePerSlot: room.pricePerSlot,
      amenities: room.amenities,
      image: room.image
    });
    setCurrentRoomId(room._id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Convert numeric values to numbers
    const newValue = type === 'number' ? Number(value) : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (currentRoomId) {
        // Update room
        await axios.put(`https://assignment-03-five.vercel.app/api/rooms/${currentRoomId}`, formValues);
        setRooms((prevRooms) => prevRooms.map(room => room._id === currentRoomId ? { ...room, ...formValues } : room));
        Swal.fire('Success', 'Room updated successfully!', 'success');
      } else {
        // Create new room
        const response = await axios.post('https://assignment-03-five.vercel.app/api/rooms', formValues);
        setRooms((prevRooms) => [...prevRooms, response.data.data]);
        Swal.fire('Success', 'Room created successfully!', 'success');
      }
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Error saving room:', error.response?.data || error.message);
      Swal.fire('Error', `Failed to save room: ${error.response?.data.message || error.message}`, 'error');
    }
  };

  const handleDeleteRoom = async (roomId: string) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover this room!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axios.delete(`https://assignment-03-five.vercel.app/api/rooms/${roomId}`);
        setRooms((prevRooms) => prevRooms.filter(room => room._id !== roomId));
        Swal.fire('Deleted!', 'Room has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      Swal.fire('Error', 'Failed to delete room.', 'error');
    }
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-center items-center mt-2'>
        <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Room Management</h1>
      </div>

      {rooms.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">No rooms exist. Please create a new room.</p>
          <button
            onClick={handleCreateRoom}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          >
            Create New Room
          </button>
        </div>
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Room Name</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Room No.</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Floor No.</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Capacity</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Price Per Slot</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{room.name}</td>
                  <td className="py-2 px-4 border-b">{room.roomNo}</td>
                  <td className="py-2 px-4 border-b">{room.floorNo}</td>
                  <td className="py-2 px-4 border-b">{room.capacity}</td>
                  <td className="py-2 px-4 border-b">${room.pricePerSlot}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleUpdateRoom(room)}
                      className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteRoom(room._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='flex justify-center items-center mt-2'>
            <button
              onClick={handleCreateRoom}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Create New Room
            </button>
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
            <div className='grid grid-cols-1 gap-4'>
              <div>
                <label className="block mb-2">Room Name</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Room No.</label>
                <input
                  type="number"
                  name="roomNo"
                  value={formValues.roomNo}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Floor No.</label>
                <input
                  type="number"
                  name="floorNo"
                  value={formValues.floorNo}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={formValues.capacity}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Price Per Slot</label>
                <input
                  type="number"
                  name="pricePerSlot"
                  value={formValues.pricePerSlot}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Amenities</label>
                <textarea
                  name="amenities"
                  value={formValues.amenities.join(', ')}
                  onChange={(e) => setFormValues(prev => ({
                    ...prev,
                    amenities: e.target.value.split(',').map(item => item.trim())
                  }))}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formValues.image}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                {currentRoomId ? 'Update Room' : 'Create Room'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
