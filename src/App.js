// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes,useNavigate } from "react-router-dom";
import CarouselFadeExample from './components/Slidingbar.js'
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <CarouselFadeExample/> */}
    <Home/>
   

    
    </div>
  );
}

export default App;
