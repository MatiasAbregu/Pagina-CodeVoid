import React from "react";

export const Asteroid = ({link, img, type}) => {
    if(type == 1){
        return(
            <a href={link} target="_blank">
                <img src={img} className="asteroid" />
            </a>
        );
    } else {
        return(
            <a href={link} target="_blank" className="asteroidvisual">
                <img src={img} />
            </a>
        );
    }
}