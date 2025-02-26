import React, { useState } from "react";
import "./Orders.css";
import { FaSearch } from "react-icons/fa";
import Navigation from "../../components/Navigation/Navigation";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    { id: "675748290", title: "React Day 2025", buyer: "Arunaa M", date: "27th Oct, Wed, 2024", amount: "Rs.300" },
    { id: "675748291", title: "React Day 2025", buyer: "Thirisha S", date: "27th Oct, Wed, 2024", amount: "Rs.300" },
    { id: "675748292", title: "React Day 2025", buyer: "Harini Sri J", date: "27th Oct, Wed, 2024", amount: "Rs.300" },
    { id: "675748293", title: "React Day 2025", buyer: "Iswarya R", date: "27th Oct, Wed, 2024", amount: "Rs.300" },
    { id: "675748294", title: "React Day 2025", buyer: "Anushka R P", date: "27th Oct, Wed, 2024", amount: "Rs.300" },
  ];

  const filteredOrders = orders.filter(order =>
    order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.includes(searchTerm)
  );

  return (
    <div className="orders-container">
      <Navigation/>
      <h2 className="title">Orders</h2>

      {/* Search Bar */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Orders Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Event Title</th>
            <th>Buyer</th>
            <th>Created</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.title}</td>
              <td>{order.buyer}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;