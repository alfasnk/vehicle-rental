import React, { useState } from 'react'
import VehicleForm from './VehicleForm'
import VehicleList from './VehicleList'
import { FaMagnifyingGlass } from "react-icons/fa6";
// import { searchVehicles } from '../features/vehicles/vehicleSlice';
// import { useDispatch } from 'react-redux';


function Home() {
     const [editData, setEditData] = useState(null);
     const[searchTerm,setSearchTerm]=useState("");
    //  const dispatch=useDispatch()
  return (
    <>
    <div className="min-h-screen bg-stone-700 p-6">
          <div className="max-w-5xl mx-auto">
            <VehicleForm editData={editData} setEditData={setEditData} />
            <VehicleList setEditData={setEditData} />
          </div>
        </div>
    </>
  )
}

export default Home