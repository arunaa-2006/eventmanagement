import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./HomePage.css";
import eventImage from "../../assets/packaging-software.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const goToEventList = () => {
    navigate("/events"); // Navigate to the event list page
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <div className="home-container">
        <div className="home-text">
          <h1 id="tit1">Plan, Manage, Enjoy</h1>
          <h1 id="tit2">Your Events, Our Solution!</h1>
          <p>Create and discover amazing events with insights from industry experts worldwide.</p>
          <button className="explore-btn" onClick={goToEventList}>Explore</button>
        </div>
        <div className="home-image">
          <img src={eventImage} alt="Event" className="event-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
