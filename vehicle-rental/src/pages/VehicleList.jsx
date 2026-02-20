import React, { useEffect, useState } from "react";
import {
  fetchVehicles,
  deleteVehicle,
} from "../features/vehicles/vehicleSlice";
import { useDispatch, useSelector } from "react-redux";



const VehicleList = ({ setEditData }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const dispatch = useDispatch();
  const { vehicles } = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, []);

  return (

    <div className="grid md:grid-cols-3 gap-4">
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-stone-600 p-6 rounded w-100">

            <img
              src={selectedVehicle.image}
              alt={selectedVehicle.name}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-bold mb-2">
              {selectedVehicle.name}
            </h2>

            <p className="mb-2">
              <strong>Type:</strong> {selectedVehicle.type}
            </p>

            <p className="mb-4 text-green-200 font-bold">
              <strong>Price:</strong> ${selectedVehicle.price}/Day
            </p>

            <button
              onClick={() => setSelectedVehicle(null)}
              className="bg-red-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}


      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-stone-900 rounded shadow overflow-hidden">


          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-48 object-cover text-white"
          />

          <div className="p-4">
            <h3 className="font-bold text-lg text-white">{vehicle.name}</h3>
            <p className="text-white">Type: {vehicle.type}</p>
            <p className="font-semibold text-green-600">
              ₹ {vehicle.price} / day
            </p>

            <div className="flex gap-2 mt-3">

              <button
                onClick={() => setSelectedVehicle(vehicle)}
                className="bg-green-700 text-white px-3 py-1 rounded"
              >
                View
              </button>

              <button
                onClick={() => setEditData(vehicle)}
                className="bg-yellow-700 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteVehicle(vehicle.id))}
                className="bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;