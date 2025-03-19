// -------------- Hero text ----------------
import {useEffect, useRef} from 'react';

const HeroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        let textContainer = textRef.current;
        let fixedText = "‎";
        let texts = ["USM", "Umeå Sport & Motion", "Träningsanläggningen med DIG i centrum"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        let speed = 130;

        function typeEffect() {
            if (!textContainer) return;

            let currentText = texts[index];

            if (!isDeleting) {
                textContainer.textContent = fixedText + currentText.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000);
                    return;
                }
            } else {
                textContainer.textContent = fixedText + currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
        }

        typeEffect();

    }, []);

    return (
        <>
            <h1 id="changing-text" ref={textRef}></h1>
            <h1 className="mobile-hero-text">
                Träningsanläggningen<br/>med DIG i centrum
            </h1>
        </>
    );
};

export default HeroText;