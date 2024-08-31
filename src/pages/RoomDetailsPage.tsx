/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import demoImage from '../assets/hero.jpg'
import demoImage2 from '../assets/hero2.jpg'
import demoImage3 from '../assets/hero3.jpg'
import demoImage4 from '../assets/hero2.jpg'
import Loader from '../components/Loader';
import Footer from '../components/Footer';
const RoomDetailsPage = () => {
    const { roomId } = useParams<{ roomId: string }>(); 
    const [room, setRoom] = useState<any>(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchRoomDetails = async () => {
          try {
            const response = await axios.get(`https://assignment-03-five.vercel.app/api/rooms/${roomId}`);
            setRoom(response.data.data);
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
        fetchRoomDetails();
      }, [roomId]);
     
    
      if (loading) return <Loader/>;
      if (error) return <div>Error loading room details: {error}</div>;
  return (
    <div className=' bg-stone-400'>
     <div className="room-details p-4 mt-5">
      <h1 className="text-center text-4xl font-bold mb-8">{room.name}</h1>
      
      <div className="">
        {/* Room Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-5">
          <img src={room.image || demoImage2} alt={room.name} className="w-full h-auto" />
          <img src={room.image || demoImage} alt={room.name} className="w-full h-auto" />
          <img src={room.image || demoImage3} alt={room.name} className="w-full h-auto" />
          <img src={room.image || demoImage4} alt={room.name} className="w-full h-auto" />
          
          {/* Add more images if available */}
        </div>
        
        {/* Room Information */}
        <div className="text-center mt-5">
          <p><strong>Room No.:</strong> {room.roomNo}</p>
          <p><strong>Floor No.:</strong> {room.floorNo}</p>
          <p><strong>Capacity:</strong> {room.capacity}</p>
          <p><strong>Price Per Slot:</strong> ${room.pricePerSlot}</p>
          <p><strong>Amenities:{room.amenities}</strong> {/* Add amenities here */}</p>
        </div>
      </div>

      {/* Book Now Button */}
    <div className='flex justify-center items-center gap-5'>
    <div className="text-center mt-8 mb-10">
        <Link to={`/booking/${roomId}`} className="btn  text-3xl font-bold hover:bg-gradient-to-r bg-gradient-to-r hover:from-red-900 from-purple-900 hover:via-amber-900 via-blue-900 hover:to-lime-900 to-green-900 hover:bg-clip-text bg-clip-text hover:text-transparent text-transparent bg-blue-700">Book Now</Link>
      </div>
      <div className="text-center mt-8 mb-10" >
      <Link to="/rooms" className="btn  text-3xl font-bold hover:bg-gradient-to-r bg-gradient-to-r hover:from-red-900 from-purple-900 hover:via-amber-900 via-blue-900 hover:to-cyan-900 to-green-900 hover:bg-clip-text bg-clip-text hover:text-transparent text-transparent bg-blue-700">Cancel</Link>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RoomDetailsPage;