import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./PaymentPage.css";
import Navigation from "../../components/Navigation/Navigation";
import eventImage from "../../assets/image.jpg";

const PaymentPage = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Default Event Name";
  const eventPrice = location.state?.eventPrice || "RS.300"; // Use default if not passed

  const [payment, setPayment] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardHolder: "",
    region: "India",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPayment({ ...payment, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payment);
  };

  return (
    <div className="payment-container">
      <Navigation />
      
      <div className="left-section">
        <h2>{eventName}</h2> {/* Display dynamic event name */}
        <h3>{eventPrice}</h3> {/* Display event price dynamically */}
        <img src={eventImage} alt="Event" className="event-image" />
      </div>

      <div className="right-section">
        <button className="pay-link-button">Pay with link</button>
        <p className="divider">Or pay with card</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={payment.email}
            onChange={handleChange}
            required
          />

          <label>Card information</label>
          <div className="card-info">
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
              value={payment.cardNumber}
              onChange={handleChange}
              maxLength="19"
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={payment.expiry}
              onChange={handleChange}
              maxLength="5"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={payment.cvc}
              onChange={handleChange}
              maxLength="3"
              required
            />
          </div>

          <input
            type="text"
            name="cardHolder"
            placeholder="CardHolderName"
            value={payment.cardHolder}
            onChange={handleChange}
            required
          />

          <select name="region" value={payment.region} onChange={handleChange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="saveInfo"
              checked={payment.saveInfo}
              onChange={handleChange}
            />
            <label>Securely save my information for 1-click checkout</label>
          </div>

          <button type="submit" className="pay-button">Pay</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
