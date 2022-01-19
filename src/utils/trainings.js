import image1 from "../images/trainings/Enmascarar grupo 4.png";
import image2 from "../images/trainings/Enmascarar grupo 5.png";
import image3 from "../images/trainings/Enmascarar grupo 6.png";
import image4 from "../images/trainings/Enmascarar grupo 7.png";

import first from "../images/trainings/first.png";
import second from "../images/trainings/second.png";
import third from "../images/trainings/third.png";
import diamond from "../images/trainings/diamond.png";

const trainings = [
    {
        id: "0",
        image: image1,
        icon: first,
        title: "1 Opción",
        options: [
            {
                option: "Seleccionar 1",
                url: "",
            },
            {
                option: "zbrush",
                url: "/#",
            },
            {
                option: "blender",
                url: "/#",
            },
            {
                option: "maya",
                url: "/#",
            },
            {
                option: "substance",
                url: "/#",
            },
        ],
        price: "34.9",
        price_before: "100",
        items: [
            "1 Entrenamiento",
            "Todas las actividades.",
            "Contenido durante.",
            "Acceso a Discord",
        ],
    },
    {
        id: "1",
        image: image2,
        icon: second,
        title: "2 Opciones",
        options: [
            {
                option: "Seleccionar 2",
                url: "",
            },
            {
                option: "zbrush",
                url: "/#",
            },
            {
                option: "blender",
                url: "/#",
            },
            {
                option: "maya",
                url: "/#",
            },
            {
                option: "substance",
                url: "/#",
            },
        ],
        price: "49.9",
        price_before: "100",
        items: [
            "2 Entrenamiento",
            "Todas las actividades.",
            "Contenido durante.",
            "Acceso a Discord",
        ],
    },
    {
        id: "2",
        image: image3,
        icon: third,
        title: "3 Opciones",
        options: [
            {
                option: "Seleccionar 3",
                url: "",
            },
            {
                option: "zbrush",
                url: "/#",
            },
            {
                option: "blender",
                url: "/#",
            },
            {
                option: "maya",
                url: "/#",
            },
            {
                option: "substance",
                url: "/#",
            },
        ],
        price: "59.9",
        price_before: "100",
        items: [
            "3 Entrenamiento",
            "Todas las actividades.",
            "Contenido durante.",
            "Acceso a Discord",
        ],
    },
    {
        id: "3",
        image: image4,
        icon: diamond,
        title: "Full Plan",
        options: [],
        price: "69.9",
        price_before: "100",
        items: [
            "Todos los entrenamientos.",
            "Todas las actividades.",
            "Contenido durante.",
            "Acceso a Discord",
        ],
    },
];

export default trainings;
