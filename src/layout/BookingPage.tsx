/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../redux/hooks/useAuth";
import Swal from "sweetalert2";

const BookingPage = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [selectedDate, setSelectedDate] = useState<string>("2024-06-27"); // Default date
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("19:00"); // Default time slot (24-hour format)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const Navigate=useNavigate()
  console.log(user)

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(
          `https://assignment-03-five.vercel.app/api/rooms/${roomId}`
        );
        setRoom(response.data.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRoomDetails();
  }, [roomId]);
  console.log(room)
  useEffect(() => {
    if (selectedDate) {
      const fetchTimeSlots = async () => {
        try {
          const response = await axios.get(
            `https://assignment-03-five.vercel.app/api/rooms/${roomId}/available-slots?date=${selectedDate}`
          );
          setAvailableTimeSlots(response.data.data);
        } catch (err) {
          console.error("Error fetching time slots:", err);
        }
      };
      fetchTimeSlots();
    }
  }, [selectedDate, roomId]);

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for user selection or use default values
    const dateToUse = selectedDate || "2024-06-27";
    const timeSlotToUse = selectedTimeSlot || "19:00";

    if (!dateToUse || !timeSlotToUse) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please select a date and time slot.',
      });
      return;
    }

    try {
      const response = await axios.post(
        `https://assignment-03-five.vercel.app/api/bookings`,
        {
          room: roomId,
          slots: [timeSlotToUse],
          user: user?._id,
          userName:user?.name,
          email:user?.email,
          date: dateToUse,
          totalAmount: room?.pricePerSlot || 0, // Adjust if needed
          isConfirmed: "unconfirmed",
          isDeleted: false
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed',
        text: 'Your booking has been confirmed!',
      });
      if(response){
          Navigate('/')
      }
    } catch (err) {
      console.error("Error confirming booking:", err);
      Swal.fire({
        icon: 'error',
        title: 'Booking Error',
        text: 'Error confirming booking. Please try again later.',
      });
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>Error loading room details: {error}</div>;

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
        Room for Booking:
      </h1>
      <h1 className="text-center mt-5 text-xl font-semibold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
        {room?.name}
      </h1>

      <h2 className="flex items-center justify-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent mt-5">
        Select Date:
      </h2>
      <div className="flex items-center justify-center gap-3">
        <input
          className="text-base font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent flex-none justify-center items-center">
        <h2>Available Time Slots:</h2>
        {availableTimeSlots.length > 0 ? (
          <ul className="text-base">
            {availableTimeSlots.map((slot, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot}
                  checked={selectedTimeSlot === slot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                />
                {slot}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base mt-2">
            No available slots for the selected date.
          </p>
        )}
      </div>

      <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
        Your Information:
      </h2>
      <div className="flex justify-center items-center mt-2 text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
        <form onSubmit={handleConfirm}>
          <label>
            Name:
            <input
              type="text"
              className="text-base font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
              value={user?.name}
              readOnly
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              className="text-base font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
              value={user?.email}
              readOnly
            />
          </label>
          <div className="flex justify-center items-center gap-5 mt-5">
            <button className="btn btn-primary" type="submit">
              Confirm
            </button>
            <Link to="/" className="btn btn-error">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
