import React from "react";
import "../css/Header.css";

import teachers from "../utils/teachers";
import TeacherChard from "./cards/TeacherChard";
import DegradeButton from "./buttons/DegradeButton";

import logo3dCamp from "../images/3d-camp-logo.png";

const startCamp = true;

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container container">
                <div className="header-content">
                    <img src={logo3dCamp} alt="3D CAMP" />
                    <h1>
                        ÚNETE A<br />
                        NUESTRO <span>CAMPAMENTO</span> 3D
                    </h1>
                    <div className="header-content-info">
                        <p>online en vivo</p>
                        <DegradeButton
                            width={210}
                            name="APARTAR CUPO"
                            paddingLeft={30}
                        />
                    </div>
                    <div className="header-information">
                        <div className="countdown">
                            {startCamp ? (
                                <div className="start-camp">
                                    <div className="header-bullet-point">
                                        <div className="header-bullet-point-center"></div>
                                    </div>
                                    <p>Ya inició</p>
                                </div>
                            ) : null}
                        </div>
                        <div className="camp-schedule">
                            <div className="schedule-days">
                                <span>45</span>DÍAS
                            </div>
                            <div className="schedule-legend">
                                entrenamiento intensivo
                            </div>
                        </div>
                        <p className="header-label">¿QUÉ APRENDERÁS?</p>
                    </div>
                </div>
                <div className="header-teachers">
                    {teachers.map((teacher) => (
                        <TeacherChard
                            key={teacher.name}
                            image={teacher.image}
                            avatar={teacher.avatar}
                            title={teacher.course}
                            name={teacher.name}
                            id={teacher.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
