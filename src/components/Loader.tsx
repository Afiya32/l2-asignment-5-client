import Lottie from "lottie-react";
import animation from "../assets/animation/loading-1.json"
const Loader = () => {
  return (
    <div>
       <div className="flex flex-col items-center">
          <Lottie animationData={animation} loop={true} className="w-64 h-64 mb-6" />
          <p className="text-lg text-center">
           Please wait......
          </p>
        </div>
    </div>
  );
};

export default Loader;