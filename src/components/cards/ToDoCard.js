import React from "react";
import "../../css/cards/ToDoCard.css";

import DegradeButton from "../buttons/DegradeButton"
import TransparentButton from "../buttons/TransparentButton"

import tech from "../../images/technologies/zbrush.png"
import image from "../../images/trainings/zbrush.png"

const ToDoCards = () => {
    return (
        <div className="ToDoCard">
            <div className="to-do-card-image">
                <img src={image} alt="Training" className="to-do-image-card" />
                <div className="to-do-card-technology">
                    <img src={tech} alt="Technology" />
                </div>
            </div>
            <div className="to-do-card-content">
                <h2>Personajes en ZBrush</h2>
                <p>
                    Crea personajes en ZBrush desde la escultura hasta la
                    pintura con acompañamiento en vivo.
                </p>
                <div className="to-do-card-buttons">
                    <DegradeButton
                        name={"UNIRSE"}
                        width={145}
                        paddingLeft={28}
                    />
                    <TransparentButton
                        color={"#6000de"}
                        width={145}
                        name={"VER MÁS"}
                    />
                </div>
                <div className="to-do-card-buttons-mobile">
                    <DegradeButton
                        name={"UNIRSE"}
                        width={220}
                        paddingLeft={80}
                    />
                    <TransparentButton
                        color={"#6000de"}
                        width={220}
                        name={"VER MÁS"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToDoCards;
