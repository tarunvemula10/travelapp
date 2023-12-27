import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Destination from './Components/Destinations/Destination';
import PlanYourTrip from './Components/PlanYourTrip/PlanYourTrip';
import AboutUs from './Components/AboutUs/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/destination' element={<Destination/>}/>
          <Route exact path='/planyourtrip' element={<PlanYourTrip/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
