import React from 'react';
import { Link } from 'react-router-dom';

interface HeroPartProps {
  image: string;
}

const HeroPart: React.FC<HeroPartProps> = ({ image }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Book Your Ideal Meeting Room with Ease
          </h1>
          <p className="mb-5">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <Link to="/room" className="btn btn-outline text-3xl font-bold hover:bg-gradient-to-r bg-gradient-to-r hover:from-red-500 from-purple-400 hover:via-amber-500 via-blue-500 hover:to-cyan-400 to-green-500 hover:bg-clip-text bg-clip-text hover:text-transparent text-transparent bg-blue-700">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
