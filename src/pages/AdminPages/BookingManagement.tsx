import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

interface Booking {
  _id: string;
  roomName: string;
  userName: string;
  date: string;
  isConfirmed: 'unconfirmed' | 'confirmed' | 'canceled';
}

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://assignment-03-five.vercel.app/api/bookings');
        setBookings(response.data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching bookings:", error.response ? error.response.data : error.message);
        } else {
          console.error("Unexpected error:", error);
        }
        setError("Error fetching bookings. Please try again later.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await axios.put(`https://assignment-03-five.vercel.app/api/bookings/${id}`, { isConfirmed: 'confirmed' });
      setBookings(bookings.map(booking =>
        booking._id === id ? { ...booking, isConfirmed: 'confirmed' } : booking
      ));
    } catch (error) {
      console.error("Error approving booking:", error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await axios.put(`https://assignment-03-five.vercel.app/api/bookings/${id}`, { isConfirmed: 'canceled' });
      setBookings(bookings.map(booking =>
        booking._id === id ? { ...booking, isConfirmed: 'canceled' } : booking
      ));
    } catch (error) {
      console.error("Error rejecting booking:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`https://assignment-03-five.vercel.app/api/bookings/${id}`);
        setBookings(bookings.filter(booking => booking._id !== id));
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  if (error) {
    return <div className='m-5 text-center'>{error}</div>;
  }

  return (
    <div>
      <h1>Booking Management</h1>
      {bookings.length === 0 ? (
        <p className='m-3 text-center'>No bookings available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Room Name</th>
              <th>User Name</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking._id}>
                <td>{booking.roomName}</td>
                <td>{booking.userName}</td>
                <td>{new Date(booking.date).toLocaleString()}</td>
                <td>{booking.isConfirmed}</td>
                <td>
                  <button onClick={() => handleApprove(booking._id)}>Approve</button>
                  <button onClick={() => handleReject(booking._id)}>Reject</button>
                  <button onClick={() => handleDelete(booking._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingManagement;
