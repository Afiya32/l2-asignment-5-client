import Lottie from "lottie-react";
import Footer from "../components/Footer";
import contactAnimation from '../assets/animation/searchAnimation.json'

const Contact = () => {
  return (
    <div>
       <div className="px-4 py-8 mx-auto max-w-7xl">
      {/* Contact Information Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Contact Us</h2>
        <p className="text-lg">Email: biplobguru123@gmail.com</p>
        <p className="text-lg">Phone: +88 01951 432363</p>
        <p className="text-lg">Arobpur Jashore Bangladesh</p>
      </section>

      {/* Contact Form Section */}
      <section className="mb-12">
        <div className="flex flex-col items-center">
          <Lottie animationData={contactAnimation} loop={true} className="w-64 h-64 mb-6" />
          <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input type="text" id="subject" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;