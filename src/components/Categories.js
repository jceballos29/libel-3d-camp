import React from 'react'
import "../css/Categories.css"

import flag from "../images/flag.png"
import badge from "../images/badge.png"

const Categories = () => {
    return (
        <div className="Categories">
            <div className="categories-container container">
                <h1>CATEGORÍAS</h1>
                <p className='categories-legend'>
                    No pierdas la gran oportunidad de aprender con
                    acompañamiento en vivo y ganar sorprendentes premios con
                    Libel Academy.
                </p>
                <div className="categories-content">
                    <div className="category">
                        <div className="category-emblem">
                            <img src={flag} alt="Junior"/>
                        </div>
                        <div className="category-info">
                            <h2 className="category-name">Junior</h2>
                            <p className="category-description">
                                En esta categoría podrás estar si te encuentras
                                en cero o nivel básico.
                            </p>
                        </div>
                    </div>

                    <div className="category">
                        <div className="category-emblem">
                            <img src={badge} alt="Evolution"/>
                        </div>
                        <div className="category-info">
                            <h2 className="category-name">Evolution</h2>
                            <p className="category-description">
                                En esta categoría podrás estar si te encuentras
                                en nivel básico-intermedio en adelante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories
