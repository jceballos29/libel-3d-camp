import creditCard from "../images/payments-method/credit-card.png";
import transfers from "../images/payments-method/transfer.png";
import paypal from "../images/payments-method/Imagen 71.png";
import westerUnion from "../images/payments-method/Imagen 70.png";
import baloto from "../images/payments-method/Imagen 69.png";
import daviPlata from "../images/payments-method/Imagen 68.png";
import nequi from "../images/payments-method/Imagen 72.png";
import bancolombia from "../images/payments-method/Imagen 73.png";
import efecty from "../images/payments-method/Imagen 74.png";
import cash from "../images/payments-method/money.png";

const paymentMethods = [
    { id: 0, image: creditCard, name: "Tarjeta de Crédito" },
    { id: 1, image: transfers, name: "Transferencias Internacionales" },
    { id: 2, image: paypal, name: "PayPal" },
    { id: 3, image: westerUnion, name: "Wester Union" },
    { id: 4, image: baloto, name: "Baloto" },
    { id: 5, image: daviPlata, name: "Davi Plata" },
    { id: 6, image: nequi, name: "Nequi" },
    { id: 7, image: bancolombia, name: "Bancolombia" },
    { id: 8, image: efecty, name: "Efecty" },
    { id: 9, image: cash, name: "Efectivo" },
];

export default paymentMethods;
