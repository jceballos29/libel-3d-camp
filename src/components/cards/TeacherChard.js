import React from "react";
import "../../css/cards/TeacherChard.css";

import { IoPlay } from "react-icons/io5";

const TeacherChard = ({ image, avatar, title, name, id }) => {
    return (
        <div
            className="TeacherChard"
            style={
                id === 1
                    ? {
                          borderRight: "1px solid #8f8f8f73",
                          borderLeft: "1px solid #8f8f8f73",
                      }
                    : null 
            }
        >
            <div className="teacher">
                <div className="teacher-icon-container">
                    <a
                        href="/#"
                        className="teacher-icon"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 100%, rgba(255,255,255,0) 100%), url(${image})`,
                        }}
                    >
                        <IoPlay />
                    </a>
                </div>
                <div className="teacher-information">
                    <div className="teacher-course">{title}</div>
                    <div className="teacher-name">
                        <img src={avatar} alt="avatar" className="t-avatar" />
                        <span className="t-label">Instructor:&nbsp;</span>
                        <span className="t-name">{name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherChard;
