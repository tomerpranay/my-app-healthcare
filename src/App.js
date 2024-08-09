// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes,useNavigate } from "react-router-dom";
import CarouselFadeExample from './components/Slidingbar.js'
import Home from "./pages/Home"
import Videochat from"./pages/videochat"
import Login from "./pages/loginpage.js"
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <CarouselFadeExample/> */}
    
    <Videochat/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<Login/>} />
    </Routes>
   

    
    </div>
  );
}

export default App;
