import React from "react";
import "../../css/buttons/Tags.css";

import { IoAdd } from "react-icons/io5";

const Tags = ({ id, name, icon }) => {
    return (
        <button className="Tags">
            <img src={icon} alt="Technology" />
            <span className="tag-name">{name}</span>
            <span className={"tags-circle"}>
                <IoAdd />
            </span>
        </button>
    );
};

export default Tags;
