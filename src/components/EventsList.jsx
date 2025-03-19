import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const EventsList = ({latestOnly = false}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/events.json")
            .then((response) => response.json())
            .then((data) => {
                const sortedEvents = data.sort((a, b) => new Date(a.date) - new Date(b.date));
                setEvents(sortedEvents);
            })
            .catch((error) => console.error("Error loading events:", error));
    }, []);

    const displayedEvents = latestOnly ? events.slice(0, 1) : events;

    return (
        <div className="news-event-content animate">
            <div className="events-container">
                {displayedEvents.length === 0 ? (
                    <p>Inga kommande events</p>
                ) : (
                    displayedEvents.map((event, index) => (
                        <div key={index} className="event-item">
                            <hr/>
                            <h3>{event.title}</h3>
                            <p><b>{event.date}</b> - {event.location}</p>
                            <p>{event.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventsList;
