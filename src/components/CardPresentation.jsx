import React from "react";
import '../styles/CardPresentation.css';
import { Asteroid } from "./Asteroid";

// Burbujas de contacto: GitHub, Whatsapp
export const CardPresentation = ({ img, desc, imgAsteroid, imgAsteroid2, link1, link2 }) => {
    return (
        <article className="cardPresentation">
            <div className="containerPresentation">
                <Asteroid img={imgAsteroid} link={link1} type={1} />
                <img src={img} className="imgProfile" />
                <Asteroid img={imgAsteroid2} link={link2} type={1}/>
                <span className="circle1"></span>
                <span className="circle2"></span>
            </div>
            <p>{desc}</p>
        </article>
    );
};