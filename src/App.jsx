import { useEffect, useRef, useState } from 'react';
import './App.css'
import { CardPresentation } from './components/CardPresentation';
import { Service } from './components/Service';
import { Carousel } from './components/Carousel';
import { Asteroid } from './components/Asteroid';
import { LoadingScreen } from './components/LoadingScreen';
import { motion } from 'framer-motion';

import Cartel from './img/CartelSinFondo.png';
import FotoMatias from './img/FotoMatias.jpg';
import GH from './img/GitHub.png';
import WA from './img/Whatsapp.png';
import FotoMariano from './img/FotoMariano.jpg';
import ProyectoISPT from './img/projectsImg/ISPT.png';
import ProyectoDentalis from './img/projectsImg/Dentalis.png';
import ProyectoDentalisTI from './img/projectsImg/DentalisTI.png';
import GestionTurismo from './img/projectsImg/GestionTurismo.png';
import TuruWan from './img/projectsImg/TuruWan.png';
import Instagram from './img/Instagram.png';
import Gmail from './img/Gmail.png';
import Facebook from './img/Facebook.png';
import TikTok from './img/TikTok.png';

function App() {
  const [loadScreen, setLoadScreen] = useState(<LoadingScreen />);

  setTimeout(() => {
    setLoadScreen(<></>);
    document.documentElement.style.overflow = "auto";
  }, 8000);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Evita recordar el scroll
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loadScreen}
      <section id='presentacion'>
        <img src={Cartel} className='CartelSinFondo' />
        <h2>"Software con identidad"</h2>
      </section>
      <motion.section id='servicios'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h1 className='titulos'>Servicios</h1>
        <article id='serviciosArticle'>
          <Service
            title={"Aplicación para computadoras"}
            desc={"Creación de aplicaciones para ordenadores, ya sea un portátil o de escritorio. Desde el estilo hasta la funcionalidad según tus gustos y necesidades."}
            caract={["Diseño a elegir, totalmente customizable.",
              "Aplicación apta para todos los sistemas operativos.",
              "Funcionalidades según lo solicitado.",
              "Primer mantenimiento gratuito.",
              "Atención a sus consultas y dudas las 24hs.",
              "Asesoría gratuita para obtener un producto de mayor calidad."]} />
          <Service
            title={"Página web responsiva"}
            desc={"Creación de aplicaciones web o sitios web, ajustado a la necesidad del cliente. Con diseño y funcionalidades según tus gustos y necesidades."}
            caract={[
              "Diseño a elegir, totalmente customizable.",
              "Aplicación apta para todos los dispositivos, desde celulares hasta monitores 4K.", "Funcionalidades según lo solicitado.",
              "Primer mantenimiento gratuito.", "Atención a sus consultas y dudas las 24hs.",
              "Asesoría gratuita para obtener un producto de mayor calidad."
            ]} />
          <Service
            title={"Aplicación móvil (Android)"}
            desc={"Creación de aplicaciones para dispositivos android, comodas y funcionales adecuandose a tus necesidades, tanto visuales como funcionales. Utilizando toda la potencia que ofrecen los dispositivos android."}
            caract={[
              "Diseño a elegir, totalmente customizable.",
              "Funcionalidades según lo solicitado.", "Primer mantenimiento gratuito.",
              "Atención a sus consultas y dudas las 24hs.",
              "Asesoría gratuita para obtener un producto de mayor calidad."
            ]} />
          <Service
            title={"Gestión de base de datos"}
            desc={"Creación de Base de Datos Relacionales como No Relacionales, buscando una optimización ideal logrando obtener la información de una velocidad rápida para lograr una respuesta del servidor excelente."}
            caract={[
              "Cubrir la gran mayoría de áreas posibles organizandola en entidades.",
              "Cardinalidad según lo indicado o necesitado.",
              "Buscar el mejor rendimiento posible.",
              "Los 3 primeros mantenimientos gratuitos.",
              "Atención a sus consultas y dudas las 24hs.",
              "Asesoría gratuita para obtener un producto de mayor calidad."
            ]} />
          <Service
            title={"Creación de logo"}
            desc={"Creación, dibujo y coloreo de logos completamente personalizados por parte nuestra como del cliente. Incluido gratuitamente en todos los productos mencionados anteriormente excepto en Creación de Base de Datos Relaciones como no Relacionales. Se puede pedir aparte."}
            caract={[
              "Logo customizable.", "Mejor calidad al demandarlo como producto aparte.", "El logo puede ser a creación de una inspiración/imagen suya o, si lo prefiere, a criterio nuestro."
            ]} />
        </article>
      </motion.section>
      <motion.section id='nuestro-equipo'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }} >
        <h1 className='titulos'>Equipo</h1>
        <article id='equipoArticle'>
          <CardPresentation img={FotoMatias} desc={"Soy Matías Abregú, programador de 21 años con experiencia en desarrollo de software desde los 14 años. Me encargo de liderar y estructurar cada proyecto de software de una manera prolija y eficiente para brindar la mejor experiencia al cliente."} imgAsteroid={GH} imgAsteroid2={WA} link1={"https://github.com/MatiasAbregu"} link2={"https://wa.me/543512753590"} />
          <CardPresentation img={FotoMariano} desc={"Soy Mariano Hernández, programador de 24 años con 1 año de experiencia en desarrollo de software. Soy el Project Manager, encargado de llevar a cabo nuestro talento hacia nuestros clientes y brindar la mejor atención en el menor tiempo posible."} imgAsteroid={GH} imgAsteroid2={WA} link1={"https://github.com/master16mh"} link2={"https://wa.me/543518690277"} />
        </article>
      </motion.section>
      <motion.section id='nuestros-proyectos'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ type:"spring", bounce: 0.5, duration: 1.5 }} >
        <h1 className='titulos'>Proyectos</h1>
        <Carousel datos={[
          [GestionTurismo, "Gestión Turismo", "Página web que se hizo con el fin de participar en un concurso, en la cual se buscaba simular una web de gestión de una empresa de turismo."],
          [ProyectoISPT, "Proyecto ISPT", "Programa de gestión académica y administrativa para el Instituto Superior del Profesorado Tecnológico. Diseñado para optimizar y agilizar procesos que antes se llevaban a cabo en papel, permitiendo a estudiantes y al personal tener una experiencia más eficiente y positiva."],
          [ProyectoDentalis, "Historias clínicas Dentalis", "Programa de gestión de historias clínicas de un consultorio odontológico. Enfocado en reemplazar el uso de lápiz y papel, ofrece un registro ágil y fácil que brinda optimización al momento de trabajar."],
          [ProyectoDentalisTI, "Turnero Dentalis", "Página web centrada en permitir sacar turnos dependiendo del tipo del mismo, cada uno cuenta con una duración predeterminada. A las 00:00 se envía un recordatorio a las personas que tienen un turno ese mismo día. Link a la web: https://dentalis.vercel.app"],
          [TuruWan, "TuruWan", "Programa creado a medida para un negocio de Salta en dónde el cliente solicitaba un software de gestión acerca de los clientes y productos que gestionaba el mismo negocio, permitiendo al propietario y a sus empleados llevar una mejor organización del mismo."]]} />
      </motion.section>
      <motion.section id='redes-sociales'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ type:"spring", bounce: 0.5, duration: 1 }}>
        <h1 className='titulos'>Redes Sociales</h1>
        <article id='redesArticle'>
          <Asteroid img={Instagram}
            link={"https://www.instagram.com/code_void_studio/"} />
          <Asteroid img={Gmail}
            link={"mailto:codevoidstudio@gmail.com"} />
          <Asteroid img={Facebook}
            link={"https://www.facebook.com/profile.php?id=61574205765347"} />
          <Asteroid img={TikTok}
            link={"https://www.tiktok.com/@codevoidstudio"} />
        </article>
      </motion.section>
      <footer>
        <h3>© Derechos reservados a Code Void - 2025</h3>
      </footer>
    </>
  );
};

export default App;