import React from "react";
import "../css/TrainingsToDo.css";

import { IoChevronBack, IoChevronForward} from "react-icons/io5"

import technologies from "../utils/technologies";
import Tags from "./buttons/Tags";
import ToDoCard from "./cards/ToDoCard";

const TrainingsToDo = () => {
    return (
        <div className="TrainingsToDo">
            <div className="to-do-container container">
                <div className="to-do-information">
                    <h1>
                        <span>ENTRENAMIENTOS</span>
                        <br />A REALIZAR EN EL 3DCAMP
                    </h1>
                    <p>
                        Los entrenamientos son con acompañamiento online
                        en vivo, y tendrán sus respectivos cronogramas.
                    </p>
                </div>
                <div className="to-do-tags">
                    {technologies.map((tech) => (
                        <Tags key={tech.name} icon={tech.icon} name={tech.name} />
                    ))}
                </div>
                <div className="to-do-content">
                    <button className="to-do-previous to-do-button">
                        <IoChevronBack />
                    </button>
                    <ToDoCard />
                    <button className="to-do-next to-do-button">
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainingsToDo;
