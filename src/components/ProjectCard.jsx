import React from "react";
import '../styles/ProjectCard.css';

export const ProjectCard = ({ img, title, desc, state }) => {
    return (
        <article className={state ? "projectCard " + state : "projectCard"}>
            <img src={img} />
            {state.includes("active") ?
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div> :
                <></>}
        </article>
    );
}