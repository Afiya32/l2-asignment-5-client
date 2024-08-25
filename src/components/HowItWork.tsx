import img1 from "../assets/roomselect1.webp"
import img2 from "../assets/date.jpg"
import img3 from "../assets/conform.png"

const HowItWorks = () => {
  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">How It Works</h2>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-2">
          <div className="p-6 bg-white rounded-lg shadow-lg w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={img1}
              alt="Select a Room"
              className="mx-auto mb-4 size-10"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Select a Room</h3>
            <p>Browse through our selection of meeting rooms and choose the one that fits your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={img2}
              alt="Choose Date & Time"
              className="mx-auto mb-4 size-10"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Choose Date & Time</h3>
            <p>Select the date and time for your meeting from our available slots.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg w-full lg:w-1/3">
            <img
              src={img3}
              alt="Confirm Booking"
              className="mx-auto size-10 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Confirm Booking</h3>
            <p>Review your details and confirm the booking to finalize your reservation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
