import React from "react";
import "../css/Trailer.css";
import { IoPlay } from "react-icons/io5";

import trailerBackground from "../images/trailer-background.png";

const Trailer = () => {
    return (
        <div className="Trailer">
            <div className="trailer-container container">
                <img
                    className="trailer-image"
                    src={trailerBackground}
                    alt="Trailer Background"
                />
                <div className="trailer-filter"></div>
                <div className="trailer-content">
                    <button className="play">
                        <IoPlay />
                    </button>
                    <h1 className="trailer-title">VER TRAILER</h1>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
