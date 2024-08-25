import Carosel from "./components/Carosel"
import ChooseUs from "./components/Choose"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWork"
import ServiceAdvertisement from "./components/Service"
import CustomerTestimonials from "./components/TestTermoninal"



function App() {
  

  return (
    <>
     <div className=" w-full mt-1">
    
     <Carosel/>
     <ServiceAdvertisement/>
     <ChooseUs/>
     <HowItWorks/>
     <CustomerTestimonials/>
     <Footer/>
     </div>
    </>
  )
}

export default App
