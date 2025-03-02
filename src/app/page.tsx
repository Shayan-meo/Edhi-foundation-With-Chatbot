import Carousel from "./compenents/carousel";
import Footer from "./compenents/footer";
import FounderProfile from "./compenents/FounderProfile";
import Navbar from "./compenents/navbar";
import ResourcesSection from "./compenents/Resources";
import ServicesSection from "./compenents/services";
import Chat from "./chat";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <ServicesSection/>
    <ResourcesSection/>
    <FounderProfile/>
    <Footer/>
   <Chat/> 
    </>
  );
}
