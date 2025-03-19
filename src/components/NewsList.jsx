import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const NewsList = ({latestOnly = false}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("/news.json")
            .then((response) => response.json())
            .then((data) => {
                // Sortera nyheterna efter datum (senaste först)
                const sortedNews = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNews(sortedNews);
            })
            .catch((error) => console.error("Error loading news:", error));
    }, []);

    // Om `latestOnly` är true, visa bara den senaste nyheten
    const displayedNews = latestOnly ? news.slice(0, 1) : news;

    return (
        <div className="news-event-content animate">
            <div className="news-container">
                {displayedNews.length === 0 ? (
                    <p>Inga nyheter tillgängliga</p>
                ) : (
                    displayedNews.map((item, index) => (
                        <div key={index} className="news-item">
                            <hr/>
                            <h3>{item.title}</h3>
                            <p><b>{item.date}</b> - {item.facility}</p>
                            <p>{item.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsList;
