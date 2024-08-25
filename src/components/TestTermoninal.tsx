import img1 from "../assets/person1.png";
import img2 from "../assets/person2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Biplob Hossain",
      role: "CEO, Company Roomy",
      testimonial: "This platform is amazing! It made booking meeting rooms a breeze.",
      imgSrc:`${img1}`
    },
    {
      name: "Afiya Murshida",
      role: "Project Manager, Company Roomy",
      testimonial: "User-friendly and efficient. Highly recommend for any business.",
      imgSrc: `${img2}` 
    },
    
  ];

  return (
    <div className="bg-base-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Customer Testimonials</h2>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          // showArrows={false}
          showStatus={false}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="mx-auto mb-4 size-96  "
              />
              <h3 className="text-xl font-semibold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
