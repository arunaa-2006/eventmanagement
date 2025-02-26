import { useParams, useNavigate } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";


const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numId = Number(id);

  const filteredEvent = eventList.find(
    (eventDetail) => eventDetail.id === numId
  );
  const handleGetTicket = () => {
    navigate("/paymentpage", { 
      state: { eventName: filteredEvent.heading, eventPrice: "RS.300" } 
    });
  };
  

  
  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <div className="event-details-content">
          {/* Event Image */}
          <img src={filteredEvent.img} alt="Event" className="event-img" />
          
          {/* Event Info Section */}
          <div className="event-info">
            <h3>{filteredEvent.heading}</h3>
            <div className="small-details">
              <p className="date">
                <MdCalendarMonth className="icon" />
                <span className="font-weight-med">{filteredEvent.date.month}</span>
                <span className="font-weight-med">{filteredEvent.date.year}</span>
              </p>
              <p className="location font-weight-med">
                <IoLocationSharp className="icon" />
                {filteredEvent.location}
              </p>
            </div>
            <p className="description">
              <span className="description-heading">Event Description:</span>
              <span className="description-heading-para">
                {filteredEvent.description}
              </span>
            </p>
            {/* Get Ticket Button */}
            <button className="get-ticket-btn" onClick={handleGetTicket}>
              Get Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
