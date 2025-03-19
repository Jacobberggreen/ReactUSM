import React, {useState} from "react";

const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/å/g, "a")
        .replace(/ä/g, "a")
        .replace(/ö/g, "o")
        .replace(/\s+/g, "-");
};

const GymCard = ({name, hours, address, phone, openHours}) => {
    const [showInfo, setShowInfo] = useState(false);
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    const [open, close] = openHours[currentDay] || [0, 0];

    const isOpen = currentHour >= open && currentHour < close;
    const statusIcon = isOpen ? "✅" : "❌";

    const gymId = slugify(name);

    return (
        <div className={`gym-card ${showInfo ? "active" : ""}`} id={gymId}>
            <div className="gym-background"></div>
            <div className="gym-content">
                <h2>{name}</h2>
                <p className="gym-hours" data-gym={name}>
                    {hours.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className="info-icon" onClick={() => setShowInfo(!showInfo)}>i</div>
            <div className={`gym-info-slide ${showInfo ? "active" : ""}`} id={`${gymId}-info`}>
                <p>📍 {address}</p>
                <p>📞 {phone}</p>
            </div>
        </div>
    );
};

export default GymCard;
