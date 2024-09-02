/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader';

// Define TypeScript types for Slot data
interface Slot {
  _id: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
}

const SlotManagement: React.FC = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('Create New Slot');
  const [currentSlotId, setCurrentSlotId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Omit<Slot, '_id'>>({
    room: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get('https://assignment-03-five.vercel.app/api/slots');
        setSlots(response.data.data);
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching slot data:', error);
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const handleCreateSlot = () => {
    setModalTitle('Create New Slot');
    setFormValues({
      room: '',
      date: '',
      startTime: '',
      endTime: '',
    });
    setCurrentSlotId(null);
    setIsModalOpen(true);
  };

  const handleUpdateSlot = (slot: Slot) => {
    setModalTitle('Update Slot');
    setFormValues({
      room: slot.room,
      date: slot.date,
      startTime: slot.startTime,
      endTime: slot.endTime,
    });
    setCurrentSlotId(slot._id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (currentSlotId) {
        // Update slot
        await axios.put(`https://assignment-03-five.vercel.app/api/slots/${currentSlotId}`, formValues);
        setSlots((prevSlots) => prevSlots.map(slot => slot._id === currentSlotId ? { ...slot, ...formValues } : slot));
        Swal.fire('Success', 'Slot updated successfully!', 'success');
      } else {
        // Create new slot
        const response = await axios.post('https://assignment-03-five.vercel.app/api/slots', formValues);
        setSlots((prevSlots) => [...prevSlots, response.data.data]);
        Swal.fire('Success', 'Slot created successfully!', 'success');
      }
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Error saving slot:', error.response?.data || error.message);
      Swal.fire('Error', `Failed to save slot: ${error.response?.data.message || error.message}`, 'error');
    }
  };

  const handleDeleteSlot = async (slotId: string) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover this slot!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axios.delete(`https://assignment-03-five.vercel.app/api/slots/${slotId}`);
        setSlots((prevSlots) => prevSlots.filter(slot => slot._id !== slotId));
        Swal.fire('Deleted!', 'Slot has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting slot:', error);
      Swal.fire('Error', 'Failed to delete slot.', 'error');
    }
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-center items-center mt-2'>
        <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Slot Management</h1>
      </div>

      {slots.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">No slots exist. Please create a new slot.</p>
          <button
            onClick={handleCreateSlot}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          >
            Create New Slot
          </button>
        </div>
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">RoomId</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Date</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Start Time</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">End Time</th>
                <th className="py-2 px-4 border-b bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Actions</th>
              </tr>
            </thead>
            <tbody>
              {slots.map((slot) => (
                <tr key={slot.room} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{slot.room}</td>
                  <td className="py-2 px-4 border-b">{slot.date}</td>
                  <td className="py-2 px-4 border-b">{slot.startTime}</td>
                  <td className="py-2 px-4 border-b">{slot.endTime}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleUpdateSlot(slot)}
                      className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteSlot(slot._id)}
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
              onClick={handleCreateSlot}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Create New Slot
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
                <label className="block mb-2">Room</label>
                <input
                  type="text"
                  name="room"
                  value={formValues.room}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formValues.date}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formValues.startTime}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formValues.endTime}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotManagement;
