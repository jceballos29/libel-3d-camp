import React from "react";
import "../css/DynamicAwards.css"

import netflix from "../images/awards/netflix.png"
import primeVieo from "../images/awards/prime_video.png"
import hboMax from "../images/awards/hbo_max.png"
import disney from "../images/awards/disney.png"


const DynamicAwards = () => {
    return (
        <div className="DynamicAwards">
            <div className="dynamic-container container">
                <div className="dynamic-header">
                    <h1>
                        PREMIOS
                        <br />
                        <span>POR DINÁMICAS</span>
                    </h1>
                    <p>
                        * Libel Academy no está relacionada ni patrocinada por
                        ninguna las plataformas de streaming mencionadas (Libel
                        comprará los planes y otorgará los premios).
                    </p>
                </div>
                <div className="dynamic-body">
                    <img className="award-1" src={netflix } alt="Netflix"/>
                    <img className="award-2" src={primeVieo} alt="prime video"/>
                    <img className="award-3" src={hboMax} alt="HBO max"/>
                    <img className="award-4" src={disney} alt="Disney"/>
                </div>
            </div>
        </div>
    );
};

export default DynamicAwards;
