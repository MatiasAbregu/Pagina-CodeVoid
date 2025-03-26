import React, { useEffect, useRef, useState } from "react";
import '../styles/LoadingScreen.css'

export const LoadingScreen = () => {

    const canvasRef = useRef(null);
    const [stateCircle, setStateCircle] = useState('');
    const [stateScreen, setStateScreen] = useState('');

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        const numStars = 300;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                speed: Math.random() * 3 + 2
            });
        }

        const drawStars = () => {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            stars.forEach((star) => {
                const perspective = 500 / (500 - star.z);
                const x2D = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
                const y2D = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
                const size = Math.max(1, perspective * 3);

                ctx.beginPath();
                ctx.arc(x2D, y2D, size, 0, Math.PI * 2);
                ctx.fill();

                // Movimiento de las estrellas
                star.z -= star.speed;
                if (star.z <= 0) {
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                    star.z = canvas.width;
                    star.speed = Math.random() * 3 + 2;
                }
            });

            requestAnimationFrame(drawStars);
        }

        drawStars();
    }, []);

    setTimeout(() => setStateCircle('hover'), 2000);
    setTimeout(() => setStateScreen('finish'), 6500);

    return (
        <div className={'pantallaCarga ' + stateScreen}>
            <span className={'circlePurple ' + stateCircle}></span>
            <span></span>
            <canvas ref={canvasRef} />
        </div>
    );
}