import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";

const SellVehicle = () => {
  const httpClient = HttpClient();
  const [formData, setFormData] = useState({
    type: "",
    make: "",
    model: "",
    condition: "",
    price: "",
    image: "",
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
    httpClient.post("/api/vehicles", formData);
  }

  return (
    <div className="form-box">
      <h2>Sell Vehicle</h2>
      <form className="sell-car-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          placeholder="type"
          value={formData.type}
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
          placeholder="New or Used"
          value={formData.condition}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
          step="1000"
        />
        <input
          type="text"
          name="image"
          placeholder="image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="submit"
          name="add-car-listing-btn"
          value="Add Vehicle Listing"
        />
      </form>
    </div>
  );
};

export default SellVehicle;
