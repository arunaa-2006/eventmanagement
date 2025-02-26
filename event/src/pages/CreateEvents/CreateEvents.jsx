import React, { useState } from "react";
import "./CreateEvents.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaLink, FaDollarSign } from "react-icons/fa";
import Navigation from "../../components/Navigation/Navigation";

const CreateEventForm = () => {
  const [event, setEvent] = useState({
    name: "",
    category: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    price: "",
    url: "",
    image: null,
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEvent({ ...event, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
  };

  return (
    <div className="create-event-container">
      <Navigation/>
      <h2 className="title">Create Event</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Event Name & Category */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={event.name}
            onChange={handleChange}
            required
          />
          <select name="category" value={event.category} onChange={handleChange} required>
            <option value="">Category</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
          </select>
        </div>

        {/* Event Description */}
        <textarea
          name="description"
          placeholder="Add Description"
          value={event.description}
          onChange={handleChange}
          required
        ></textarea>

        {/* Image Upload */}
        <div className="image-upload">
          <label htmlFor="imageUpload" className="upload-box">
            {event.image ? (
              <img src={event.image} alt="Event Preview" className="image-preview" />
            ) : (
              <div className="upload-placeholder">
                <p>Drag a photo here</p>
                <button type="button">Upload from computer</button>
              </div>
            )}
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </div>

        {/* Extra Fields: Location, Date, Price, URL */}
        <div className="extra-fields">
          <div>
            <FaMapMarkerAlt />
            <input
              type="text"
              name="location"
              placeholder="Add Location"
              value={event.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <FaCalendarAlt />
            <input
              type="datetime-local"
              name="startDate"
              value={event.startDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <FaCalendarAlt />
            <input
              type="datetime-local"
              name="endDate"
              value={event.endDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <FaDollarSign />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={event.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <FaLink />
            <input
              type="url"
              name="url"
              placeholder="URL"
              value={event.url}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
};

export default CreateEventForm;