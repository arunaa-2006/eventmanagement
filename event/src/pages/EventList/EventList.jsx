import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Navigation from "../../components/Navigation/Navigation";
import { eventList } from "../../utils/EventDatabase";
import "./EventList.css";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredEvents = eventList.filter((event) => {
    return (
      event.heading.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || event.category === selectedCategory)
    );
  });

  return (
    <div className="event-list-container">
      <Navigation />

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search title..."
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="AI">AI</option>
          <option value="VR">VR</option>
          <option value="Photo">Photo</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(({ id, date, heading, location, img, price, category }) => (
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
  );
};

export default EventList;