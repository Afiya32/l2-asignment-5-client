import img1 from "../assets/hero.jpg"
import img2 from "../assets/hero2.jpg"
import img3 from "../assets/hero3.jpg"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeroPart from "./HeroPart";
const Carosel: React.FC = () => {
    return (
      <div className="min-w-min max-w-7xl mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          className="text-center overflow-hidden grid justify-center items-center"
        >
          <div>
            <HeroPart image={img1} />
          </div>
          <div>
            <HeroPart image={img2} />
          </div>
          <div>
            <HeroPart image={img3} />
          </div>
        </Carousel>
      </div>
    );
  };

export default Carosel;