import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";
import VehicleCard from "./VehicleCard";

const SellVehicle = () => {
  const httpClient = HttpClient();
  const [newListing, setNewListing] = useState();
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    condition: "",
    price: "",
    odometer: "",
    engine_type: "",
    engine_displacement: "",
    cylinder_count: "",
    power: "",
    torque: "",
    transmission: "",
    body_style: "",
    drive_type: "",
    interior_color: "",
    exterior_color: "",
    img_url: "",
    zipcode: "",
    errors: {},
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    // checkSellInput(formData);
    event.preventDefault(event);
    console.info("Valid Form");
    httpClient.post("/api/vehicles", formData, setNewListing);
  }

  return (
    <>
      <div className="form-box">
        <h2>Sell Vehicle</h2>
        <form className="sell-car-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="year"
            placeholder="year"
            value={formData.year}
            onChange={handleChange}
          />
          <input
            type="text"
            name="make"
            placeholder="make"
            value={formData.make}
            onChange={handleChange}
          />
          <input
            type="text"
            name="model"
            placeholder="model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            type="text"
            name="condition"
            placeholder="new or used"
            value={formData.condition}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="odometer"
            placeholder="odometer"
            value={formData.odometer}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="engine_type"
            placeholder="engine type"
            value={formData.engine_type}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="engine_displacement"
            placeholder="engine displacement"
            value={formData.engine_displacement}
            onChange={handleChange}
            step="1000"
          />
                    <input
            type="text"
            name="cylinder_count"
            placeholder="cylinder count"
            value={formData.prcylinder_countice}
            onChange={handleChange}
          />
                    <input
            type="number"
            name="power"
            placeholder="power (hp)"
            value={formData.power}
            onChange={handleChange}
          />
          <input
            type="number"
            name="torque"
            placeholder="torque (ft-lb)"
            value={formData.torque}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="transmission"
            placeholder="transmission"
            value={formData.transmission}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="body_style"
            placeholder="body style"
            value={formData.body_style}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="drive_type"
            placeholder="drive type"
            value={formData.drive_type}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="interior_color"
            placeholder="interior color"
            value={formData.interior_color}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="exterior_color"
            placeholder="exterior color"
            value={formData.exterior_color}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="img_url"
            placeholder="image url's"
            value={formData.img_url}
            onChange={handleChange}
            step="1000"
          />
          <input
            type="text"
            name="zipcode"
            placeholder="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
          <input
            type="submit"
            name="add-car-listing-btn"
            value="Add Vehicle Listing"
          />
        </form>
      </div>
      <br />
      <br />
      {newListing ? (
        <>
          <h2>Here is your new listing:</h2>
          <VehicleCard vehicle={newListing} />{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SellVehicle;
