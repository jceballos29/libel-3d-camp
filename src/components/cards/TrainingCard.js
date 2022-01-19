import React, { useState } from "react";
import "../../css/cards/TrainingCard.css";

const TrainingCard = ({ image, icon, title, price, price_before, options, items }) => {
    const [value, setValue] = useState("");

    const handleChange = (option) => {
        setValue(option.target.value);
    };

    return (
        <div className="TrainingCard">
            <div className="training-card-header">
                <img src={image} alt="Training Option" />
            </div>
            <div className="training-card-body">
                <div className="training-card-title">
                    <div className="training-card-icon">
                        <img src={icon} alt="Training Icon" />
                    </div>
                    <div className="training-card-info">
                        <div className="training-card-name">
                            <h3
                                style={
                                    title === "Full Plan"
                                        ? { color: "#6000de" }
                                        : { color: "#000000" }
                                }
                            >
                                {title}
                            </h3>
                        </div>
                        <div className="training-card-price">
                            <p>
                                ${price}
                                <sup>${price_before}USD</sup>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="training-card-option">
                    {options.length !== 0 ? (
                        <select onChange={handleChange}>
                            {
                                options.map((opt, i) => <option key={i} value={opt.url}>{opt.option}</option>)
                            }
                        </select>
                    ) : (
                        <p>Todos disponibles</p>
                    )}
                </div>
                <ul className="training-card-items">
                    {
                        items.map((item, i) => <li key={i}>{item}</li>)
                    }
                </ul>
                <a href={value} className="get-training">
                    OBTENER
                </a>
            </div>
        </div> 
    );
};

export default TrainingCard;
