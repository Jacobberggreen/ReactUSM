import React, {useState} from "react";

const FacilityMemberSelect = ({membershipCards}) => {
    const [selectedFacility, setSelectedFacility] = useState("all"); // Visa alla från början!

    // Funktion för att visa rätt kort
    const shouldShowCard = (facility) => {
        return selectedFacility === "all" || facility === selectedFacility;
    };

    return (
        <div>
            {/* Dropdown */}
            <div className="membership-filter animate">
                <select
                    className="btn-info selectInfo selectLarge"
                    value={selectedFacility}
                    onChange={(e) => setSelectedFacility(e.target.value)}
                >
                    <option value="all">Välj Anläggning</option>
                    <option value="utopia">USM - Utopia</option>
                    <option value="ostra">USM - Östra</option>
                    <option value="mariehem">USM - Mariehem</option>
                </select>
            </div>

            {/* Medlemskort */}
            <div className="membership-cards animate">
                {membershipCards.map((card, index) => (
                    <div
                        key={index}
                        className="membership-card"
                        style={{display: shouldShowCard(card.facility) ? "block" : "none"}} // Exakt som din gamla JS!
                    >
                        <img src={card.img} alt={card.title}/>
                        <div className="card-content">
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                            <p className="price">{card.price}</p>
                            <a className="btn-info" href={card.link} target="_blank" rel="noopener noreferrer">Välj</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacilityMemberSelect;
