import React from "react";
import './App.css'
import VehicleForm from "./pages/VehicleForm";
import VehicleList from "./pages/VehicleList";
import Home from "./pages/Home";
import {Route,Routes} from 'react-router-dom'
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
 

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/vehicleform'element={<VehicleForm/>}/>
        <Route path='/vehiclelist'element={<VehicleList/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;