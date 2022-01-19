import React from 'react'
import "../../css/cards/AwardsCard.css"

import { IoChevronForward } from "react-icons/io5"

const AwardsCard = ({position, title, description}) => {
    return (
        <div className="AwardsCard">
            <div className="awards-position">
                <img src={position} alt="Award Position"/>
            </div>
            <div className="awards-information">
                <div className="awards-title">
                    <h2>{title}</h2>
                    <IoChevronForward />
                </div>
                <div className="awards-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default AwardsCard
