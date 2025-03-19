const Marquee = () => {
    const items = ["USM", "DITT GYM I UMEÅ", "UTOPIA", "ÖSTRA", "MARIEHEM"];
    const imageSrc = "pictures/fav.png";
    const repeatCount = 5;

    return (
        <div className="marquee">
            <div className="marquee-inner">
                {Array.from({length: repeatCount}).flatMap((_, repeatIndex) =>
                    items.flatMap((item, index) => [
                        <div key={`text-${repeatIndex}-${index}`} className="marquee-content">
                            <span>{item}</span>
                        </div>,
                        <div key={`img-${repeatIndex}-${index}`} className="marquee-content">
                            <span>
                                <img alt=" - USM - " className="rolling-banner-img" src={imageSrc}/>
                            </span>
                        </div>
                    ])
                )}
            </div>
        </div>
    );
};

export default Marquee;
