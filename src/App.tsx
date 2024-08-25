import Carosel from "./components/Carosel"
import ChooseUs from "./components/Choose"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWork"
import ServiceAdvertisement from "./components/Service"
import CustomerTestimonials from "./components/TestTermoninal"
import { useAuth } from "./redux/hooks/useAuth"
// import { useLogout } from "./redux/hooks/useLogOut"



function App() {
  const { user } = useAuth();
  // const logout = useLogout();

  return (
    <>
     <div className=" w-full mt-1">
    
     <Carosel/>
     <ServiceAdvertisement/>
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
