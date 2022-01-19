import React from "react";
import "../css/Training.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5"

import trainings from "../utils/trainings";
import TrainingCard from "./cards/TrainingCard";

const Training = () => {
    const trainingList = trainings.map((training) => (
        <TrainingCard
            key={training.id}
            image={training.image}
            icon={training.icon}
            title={training.title}
            price={training.price}
            price_before={training.price_before}
            options={training.options}
            items={training.items}
        />
    ));

    return (
        <div className="Training">
            <div className="training-container container">
                <div className="training-header">
                    <h1>
                        ELEGIR <br />
                        <span>ENTRENAMIENTO</span>
                    </h1>
                    <p>
                        En el 3DCAMP puedes elegir 1, 2 o 3
                        <br />
                        entrenamientos. Todo depende de tu plan
                        <br />
                        de aprendizaje y el tiempo que puedas
                        <br />
                        invertir en cada uno de los temas.
                    </p>
                </div>
                <div className="training-body">{trainingList}</div>
                <div className="training-body-mobile">
                    <div className="training-option-previous">
                        <button className="training-button">
                            <IoChevronBack />
                        </button>
                    </div>
                    <div className="training-option-next">
                        <button className="training-button">
                            <IoChevronForward />
                        </button>
                    </div>
                    <div className="training-content">{trainingList[0]}</div>
                </div>
            </div>
        </div>
    );
};

export default Training;
