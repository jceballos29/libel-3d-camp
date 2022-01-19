import React from "react";
import "../css/Awards.css";

import awardsBackground from "../images/award-background.png";

import first from "../images/trainings/first.png";
import second from "../images/trainings/second.png";
import third from "../images/trainings/third.png";
import AwardsCard from "./cards/AwardsCard";

const awards = [
    {
        title: "masters libel",
        description:
            "Participa por uno de los Master de Libel y avanza al siguiente nivel en tu aprendizaje.",
        position: first,
    },
    {
        title: "Escuelas Libel",
        description:
            "Inicia tu curva de aprendizaje con acompañamiento online en vivo en Blender y ZBrush.",
        position: second,
    },
    {
        title: "Mem. Recargada",
        description: "Aprende sin límites con los mejores contenidos de Libel.",
        position: third,
    },
];

const Awards = () => {
    return (
        <div className="Awards">
            <div className="awards-container container">
                <img
                    src={awardsBackground}
                    alt="Awards Background"
                    className="awards-background-image"
                />
                <h1>PREMIOS</h1>
                <div className="awards-content">
                    {awards.map((award) => (
                        <AwardsCard
                            key={award.title}
                            position={award.position}
                            title={award.title}
                            description={award.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;
