import Carosel from "./components/Carosel"
import ChooseUs from "./components/Choose"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWork"
import ServiceAdvertisement from "./components/Service"
import ServiceRoomCard from "./components/ServiceRoomCard"
import CustomerTestimonials from "./components/TestTermoninal"
import { useAuth } from "./redux/hooks/useAuth"




function App() {
  const { user } = useAuth();
  

  return (
    <>
     <div className=" w-full mt-1 bg-stone-400">
    
     <Carosel/>
     <ServiceAdvertisement/>
     <ServiceRoomCard/>
     <ChooseUs/>
     <HowItWorks/>
     <CustomerTestimonials/>

     <Footer/>
     <h1>{user?.name}</h1>
     </div>
    </>
  )
}

export default App
