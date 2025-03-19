import React, {useState} from "react";
import {Link} from "react-router-dom";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formMessage, setFormMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, email, message} = formData;

        const mailtoLink = `mailto:kontakt@placeholder.se?subject=Kontakt från ${encodeURIComponent(
            name
        )}&body=Namn: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
            email
        )}%0A%0A${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;

        setFormMessage("Ditt meddelande har skickats!");

        setTimeout(() => {
            setFormData({name: "", email: "", message: ""});
            setFormMessage("");
        }, 3000);
    };

    return (
        <div className="contact-content animate" id="contact">
            <h2>Kontaktuppgifter:</h2>
            <div className="table-container">
                <table className="contact-table">
                    <thead>
                    <tr>
                        <th>Anläggning</th>
                        <th>Telefon</th>
                        <th>E-post</th>
                        <th>Adress</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="contact-text">
                        <td><strong>USM i Utopia</strong></td>
                        <td>090-12 50 49</td>
                        <td>usm@usm.nu</td>
                        <td>Skolgatan 62 A</td>
                    </tr>
                    <tr className="contact-text">
                        <td><strong>USM på Östra</strong></td>
                        <td>090-12 50 50</td>
                        <td>usm@usm.nu</td>
                        <td>Östermalmsgatan 63 A</td>
                    </tr>
                    <tr className="contact-text">
                        <td><strong>USM på Mariehem</strong></td>
                        <td>090-12 50 51</td>
                        <td>usm@usm.nu</td>
                        <td>Mariehemsvägen 10 E</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <Link className="facility-link karta-link" to="/facilities">
                Visa på kartan <span className="arrow">➤</span>
            </Link>

            <section className="contact-form">
                <h2>Kontakta oss</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Namn</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">E-post</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Meddelande</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button className="btn-info" type="submit">Skicka</button>
                </form>
                {formMessage && <p style={{color: "green"}}>{formMessage}</p>}
            </section>
        </div>
    );
};

export default ContactSection;
