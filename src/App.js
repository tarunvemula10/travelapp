import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Destination from './Components/Destinations/Destination';
import PlanYourTrip from './Components/PlanYourTrip/PlanYourTrip';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Destination/> */}
      <PlanYourTrip/>
      <Footer/>
    </>
  );
}

export default App;
