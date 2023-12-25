import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Destination from './Components/Destinations/Destination';
import PlanYourTrip from './Components/PlanYourTrip/PlanYourTrip';
import AboutUs from './Components/AboutUs/About'

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Destination/> */}
      {/* <PlanYourTrip/> */}
      <AboutUs />
      <Footer/>
    </>
  );
}

export default App;
