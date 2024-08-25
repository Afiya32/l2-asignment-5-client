
import img1 from "../assets/semeless.jpg"
import img2 from "../assets/secure.png"

const ChooseUs = () => {
  return (
    <div className="bg-base-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img1} 
              alt="Seamless Booking Experience"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Seamless Booking Experience</h3>
            <p>Enjoy a smooth and hassle-free booking process from start to finish.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={img2} 
              alt="Secure Transactions"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Secure Transactions</h3>
            <p>Your personal information and payment details are always safe with us.</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
