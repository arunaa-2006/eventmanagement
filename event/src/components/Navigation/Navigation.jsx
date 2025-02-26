import { NavLink } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
  return (
    <nav>
     
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