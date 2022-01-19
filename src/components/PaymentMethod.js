import React from "react";
import "../css/PaymentMethod.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import paymentMethods from "../utils/paymentMethods";
import PaymentCard from "./cards/PaymentCard";

const PaymentMethod = () => {
    return (
        <div className="PaymentMethod">
            <div className="payment-container container">
                <div className="payment-header">
                    <h1>
                        MEDIOS DE <span>PAGOS</span>
                    </h1>
                </div>
                <div className="payment-body">
                    <div className="payment-button-previous">
                        <button className="payment-button">
                            <IoChevronBack />
                        </button>
                    </div>
                    <div className="payment-button-next">
                        <button className="payment-button">
                            <IoChevronForward />
                        </button>
                    </div>
                    <div className="payment-content">
                        {paymentMethods.map((method, i) => (
                            <PaymentCard
                                key={i}
                                image={method.image}
                                text={method.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
