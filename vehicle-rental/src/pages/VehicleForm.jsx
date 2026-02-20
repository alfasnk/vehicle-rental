import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVehicle, updateVehicle } from "../features/vehicles/vehicleSlice";

const VehicleForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();

  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (editData) {
      setVehicle(editData);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicle.name || !vehicle.type || !vehicle.price || !vehicle.image) {
      alert("All fields required!");
      return;
    }

    if (editData) {
      dispatch(updateVehicle(vehicle));
      setEditData(null);
    } else {
      dispatch(addVehicle(vehicle));
    }

    setVehicle({ name: "", type: "", price: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-stone-900 text-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-3">
        {editData ? "Edit Vehicle" : "Add Vehicle"}
      </h2>

      <input
        className="border p-2 w-full mb-2 text-black"
        placeholder="Vehicle Name"
        value={vehicle.name}
        onChange={(e) => setVehicle({ ...vehicle, name: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2 text-black"
        placeholder="Type"
        value={vehicle.type}
        onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2 text-black"
        type="number"
        placeholder="Price per Day"
        value={vehicle.price}
        onChange={(e) => setVehicle({ ...vehicle, price: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2 text-black"
        placeholder="Image URL"
        value={vehicle.image}
        onChange={(e) => setVehicle({ ...vehicle, image: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {editData ? "Update Vehicle" : "Add Vehicle"}
      </button>
    </form>
  );
};

export default VehicleForm;