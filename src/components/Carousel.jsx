import React, { use, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import '../styles/Carousel.css';

export const Carousel = ({ datos }) => {
    const [indexSelected, setIndexSelected] = useState(1);
    const [sideMovement, setSideMovement] = useState(true);
    const [cooldown, setCooldown] = useState(false);

    const nextProject = () => {
        if (cooldown == true) return;

        if (indexSelected < datos.length - 1) setIndexSelected(indexSelected + 1);
        else setIndexSelected(0);

        setSideMovement(true);
        setCooldown(true);
        setTimeout(() => setCooldown(false), 3000);
    }

    const prevProject = () => {
        if (cooldown == true) return;

        if (indexSelected > 0) setIndexSelected(indexSelected - 1);
        else setIndexSelected(datos.length - 1);

        setSideMovement(false);
        setCooldown(true);
        setTimeout(() => setCooldown(false), 3000);
    }

    const projects = () => {
        return datos.map((conjunto, index) => {
            let state;
            if (index == indexSelected) state = "active";
            else if (index == (indexSelected - 1 + datos.length) % datos.length)
                sideMovement ? state = "prev right" : state = "next left";
            else if (index === (indexSelected + 1) % datos.length)
                sideMovement ? state = "next right" : state = "prev left"; 
            else state = "hidden";

            return (
                <ProjectCard img={conjunto[0]} title={conjunto[1]}
                    desc={conjunto[2]} key={index} state={state} />
            )
        });
    }

    return (
        <div className="carousel">
            <p className="flechas" onClick={prevProject}>&lt;</p>
            <div className="carouselContainer">
                {projects()}
            </div>
            <p className="flechas" onClick={nextProject}>&gt;</p>
        </div>
    );
}