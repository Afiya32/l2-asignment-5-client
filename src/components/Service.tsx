import img1 from "../assets/service1.jpg"
import img2 from "../assets/service2.jpg"
import img3 from "../assets/service3.jpg"
import img4 from "../assets/service4.jpg"

const ServiceAdvertisement = () => {
  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img1} // Replace with your icon
              alt="Real-Time Availability"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Real-Time Availability</h3>
            <p>Always know what's available, book with confidence in real-time.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img2} 
              alt="Instant Booking Confirmation"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Instant Booking Confirmation</h3>
            <p>Get your booking confirmed instantly, no waiting.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img3} 
              alt="Flexible Scheduling"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Flexible Scheduling</h3>
            <p>Schedule meetings at your convenience with flexible options.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img4}
              alt="24/7 Support"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">24/7 Support</h3>
            <p>We're here to help anytime, day or night.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;