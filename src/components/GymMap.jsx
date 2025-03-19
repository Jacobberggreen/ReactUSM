import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
    iconUrl: "../../public/pictures/map_marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 40],
    popupAnchor: [1, -34],
});

const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/å/g, "a")
        .replace(/ä/g, "a")
        .replace(/ö/g, "o")
        .replace(/\s+/g, "-");
};


const facilities = [
    {
        name: "Utopia",
        coords: [63.826405, 20.264859],
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 21], 6: [9, 18], 0: [5, 23]},
    },
    {
        name: "Östra",
        coords: [63.818047, 20.2921],
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 21], 6: [9, 18], 0: [5, 23]},
    },
    {
        name: "Mariehem",
        coords: [63.831972, 20.328991],
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 22], 6: [5, 22], 0: [5, 23]},
    },
];

const GymMap = () => {
    const [zoom, setZoom] = useState(window.innerWidth <= 768 ? 12 : 13);
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    useEffect(() => {
        const handleResize = () => setZoom(window.innerWidth <= 768 ? 12 : 13);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getStatusText = (openHours) => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentDay = now.getDay();

        const hours = openHours[currentDay];
        if (!hours) {
            return (
                <>
                    <b>Öppettider idag:</b><br/>
                    <span style={{color: "red"}}>❌ Stängt</span>
                </>
            );
        }

        const [open, close] = hours;
        const timeLeft = close - currentHour;

        let status;
        if (currentHour < open || currentHour >= close) {
            status = <span style={{color: "red"}}>❌ Stängt</span>;
        } else if (timeLeft <= 1) {
            status = <span style={{color: "gold"}}>⏳ Stänger snart</span>;
        } else {
            status = <span style={{color: "green"}}>✅ Öppet</span>;
        }

        return (
            <>
                <b>Öppettider idag:</b><br/>
                🕒 {open}:00 - {close}:00 <br/>
                {status}
            </>
        );
    };


    return (
        <MapContainer
            center={[63.826, 20.295]}
            zoom={zoom}
            scrollWheelZoom={false}
            attributionControl={false}
            id="map"
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors '
            />
            {facilities.map((facility) => (
                <Marker key={facility.name} position={facility.coords} icon={customIcon}>
                    <Popup>
                        <div className={`custom-popup ${slugify(facility.name)}-popup`}>
                            <div className="custom-popup-content">
                                <div className="popup-title">{facility.name}</div>
                                <div>{getStatusText(facility.openHours)}</div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default GymMap;
