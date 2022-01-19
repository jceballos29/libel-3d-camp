import React from "react";
import "../css/GroupCounseling.css";
import DegradeButton from "./buttons/DegradeButton";
import TransparentButton from "./buttons/TransparentButton";

const GroupCounseling = () => {
    return (
        <div className=" GroupCounseling">
            <div className=" GroupCounseling-container container">
                <div className=" GroupCounseling-title">
                    <h1>
                        Asiste a una
                        <br />
                        <span>asesoría</span> grupal
                        <br />
                        gratuita<span>.</span>
                    </h1>
                </div>
                <div className=" GroupCounseling-content">
                    <DegradeButton name={"MÁS INFORMACIÓN"} width={250} paddingLeft={30}/>
                    <TransparentButton name={"escríbemos ahora"} width={250} color={"#ffffff"}/>
                    <p>
                        Te ayudamos y orientamos en
                        <br />
                        tu curva de aprendizaje.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GroupCounseling;
