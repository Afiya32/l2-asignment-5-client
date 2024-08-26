import React from 'react';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  _id:string,
  name: string;
  capacity: number;
  price: number;
  imageUrl: string;
}

const RoomCard: React.FC<RoomCardProps> = ({_id, name, capacity, price, imageUrl }) => {
  return (
    <div className="room-card relative rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-72 object-cover"
      />
      <div className="absolute text-center w-3/6 bottom-0 right-0  md:w-1/3 bg-white bg-opacity-80 p-4 rounded-tl-lg backdrop-blur-lg">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">{name}</h2>
        <p className="text-sm">Capacity: {capacity}</p>
        <p className="text-sm">Price per slot: ${price}</p>
        <Link to={`/rooms/${_id}`} className="btn btn-outlet btn-info mt-4 hover:bg-gradient-to-r bg-gradient-to-r hover:from-red-500 from-purple-400 hover:via-amber-500 via-blue-500 hover:to-cyan-400 to-green-500 hover:bg-clip-text bg-clip-text hover:text-transparent text-transparent">See Details</Link>
      </div>
    </div>
  );
};

export default RoomCard;
