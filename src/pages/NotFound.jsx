import React from "react";
import '../styles/NotFound.scss'
import pokemon from '../assets/PngItem_4858557.png';
const NotFound = () => {
    return (
        <section className="mainSection">
            <section className="section_1">
                <picture>
                    <img src={pokemon} alt="Sad Pokemon" class="imgPok"/>
                </picture>
            </section>
            <section className="section_2">
                <h1>No encontrado, error 404.</h1>
                <p> Pd. Ella no te quiere :s </p>
            </section>
        </section>
    );
}

export default NotFound;