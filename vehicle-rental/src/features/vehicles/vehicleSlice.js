import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://vehicle-rental-2-5afq.onrender.com/vehicles";

// GET
export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// ADD
export const addVehicle = createAsyncThunk(
  "vehicles/addVehicle",
  async (vehicle) => {
    const response = await axios.post(API_URL, vehicle);
    return response.data;
  }
);

// DELETE
export const deleteVehicle = createAsyncThunk(
  "vehicles/deleteVehicle",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// UPDATE
export const updateVehicle = createAsyncThunk(
  "vehicles/updateVehicle",
  async (vehicle) => {
    const response = await axios.put(`${API_URL}/${vehicle.id}`, vehicle);
    return response.data;
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    status: "idle",
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.vehicles = action.payload;
      })
      .addCase(addVehicle.fulfilled, (state, action) => {
        state.vehicles.push(action.payload);
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.vehicles = state.vehicles.filter(
          (vehicle) => vehicle.id !== action.payload
        );
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        const index = state.vehicles.findIndex(
          (v) => v.id === action.payload.id
        );
        state.vehicles[index] = action.payload;
      });
  },
});

export default vehicleSlice.reducer;
