import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/logo.jpg"; // Ensure this path matches your project structure

const Navigation = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Evenza Logo" className="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
            Event
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-events" className={({ isActive }) => (isActive ? "active" : "")}>
            Find Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-events" className={({ isActive }) => (isActive ? "active" : "")}>
            Create Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
