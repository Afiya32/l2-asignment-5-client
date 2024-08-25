import Footer from "../components/Footer";
import img1 from '../assets/person1.png'
import img2 from '../assets/person2.jpg'
import missionAnimation from "../assets/animation/Animation - 1724569951462.json"
import Lottie from "lottie-react";

const About = () => {
  return (
    <div>
       <div className="px-4 py-8 mx-auto max-w-7xl">
      {/* Our Mission Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Our Mission</h2>
        <div className="flex flex-col items-center">
          <Lottie animationData={missionAnimation} loop={true} className="w-64 h-64 mb-6" />
          <p className="text-lg text-center">
            Our mission is to provide a seamless and efficient meeting room booking experience, ensuring that your workspace needs are met with ease and precision.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img1} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Biplob Hossain</h3>
              <p className="text-gray-600 mb-4">CEO & Founder</p>
              <p>
                Biplob is the visionary behind our company, with a passion for creating innovative solutions for workspace management.
              </p>
            </div>
          </div>
          <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img2} alt="Team Member 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Afiya Murshida</h3>
              <p className="text-gray-600 mb-4">CTO</p>
              <p>
                Afiya leads our technical team, ensuring that our platform remains cutting-edge and user-friendly.
              </p>
            </div>
          </div>
        
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Our Story</h2>
        <div className="flex flex-col items-center">
          <Lottie animationData={missionAnimation} loop={true} className="w-64 h-64 mb-6" />
          <p className="text-lg text-center">
            Our journey began with a vision to revolutionize the meeting room booking experience. From our humble beginnings to becoming a leader in the industry, we have consistently strived to enhance our services and deliver excellence.
          </p>
        </div>
      </section>
    </div>
      <Footer/>
    </div>
  );
};

export default About;