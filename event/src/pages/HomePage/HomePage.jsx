import { useRef } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import "./HomePage.css";
import eventImage from "../../assets/packaging-software.jpg";

const HomePage = () => {
  const eventListRef = useRef(null);

  const scrollToEvents = () => {
    eventListRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <button className="explore-btn" onClick={scrollToEvents}>Explore</button>
        </div>
        <div className="home-image">
          <img src={eventImage} alt="Event" className="event-image" />
        </div>
      </div>

      {/* Event List Section */}
      <div ref={eventListRef} className="event-list-container">
        <div className="search-filter">
          <input type="text" placeholder="Search title..." className="search-box" />
          <select className="category-dropdown">
            <option>Category</option>
          </select>
        </div>

        {/* Event Grid (VERTICAL LAYOUT) */}
        <div className="event-grid">
          {eventList.length > 0 ? (
            eventList.map(({ id, date, heading, location, img, price, category }) => (
              <EventCard 
                key={id} 
                id={id} 
                date={date} 
                heading={heading} 
                location={location} 
                img={img}
                price={price} 
                category={category}
              />
            ))
          ) : (
            <p className="no-events">No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;