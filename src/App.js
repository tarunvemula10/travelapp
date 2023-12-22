import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Destination from './Components/Destinations/Destination';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <Destination/>
      <Footer/>
    </>
  );
}

export default App;
