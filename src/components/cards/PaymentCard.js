import React from 'react'
import "../../css/cards/PaymentCard.css"

const PaymentCard = ({image, text}) => {
    return <div className="PaymentCard">
        <img className='payment-image' src={image} alt="Payment Method"/>
        <p className='payment-text'>{text}</p>
    </div>;
}

export default PaymentCard
