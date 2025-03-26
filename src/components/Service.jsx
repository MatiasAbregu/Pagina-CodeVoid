import React, { useRef, useState } from "react";
import '../styles/Service.css';

export const Service = ({ title, desc, caract }) => {
    const[height, setHeight] = useState('');
    const articleRef = useRef(null);

    const mouseEnter = () => {
        const contentH = articleRef.current.scrollHeight;
        setHeight(contentH + 'px');
    }

    const mouseLeave = () => {
        setHeight('');
    }

    return (
        <article className="serviceContainer">
            <span className="topRocket"></span>
            <article className="serviceArticle"
             ref={articleRef} onMouseEnter={mouseEnter} 
             onMouseLeave={mouseLeave} style={{height: height}}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <br />
                <p><u>Características:</u></p>
                <ul>
                    {
                        caract ?
                        caract.map((dato, i) => (<li key={i}>{dato}</li>)) :
                        <></>
                    }
                </ul>
            </article>
            <span className="boosterOut">
                <span className="boosterIn"></span>
            </span>
        </article>
    );
}