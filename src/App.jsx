import { useEffect, useState } from 'react';
import './App.css'
import { CardPresentation } from './components/CardPresentation';
import { Service } from './components/Service';
import { Carousel } from './components/Carousel';
import { Asteroid } from './components/Asteroid';

import Cartel from './img/CartelSinFondo.png';
import FotoMatias from './img/FotoMatias.jpg';
import GH from './img/GitHub.png';
import WA from './img/Whatsapp.png';
import FotoMariano from './img/FotoMariano.jpg';
import ProyectoISPT from './img/projectsImg/ISPT.png';
import ProyectoDentalis from './img/projectsImg/Dentalis.png';
import GestionTurismo from './img/projectsImg/GestionTurismo.png';
import TuruWan from './img/projectsImg/TuruWan.png';
import Instagram from './img/Instagram.png';
import Gmail from './img/Gmail.png';
import Facebook from './img/Facebook.png';
import TikTok from './img/TikTok.png';

function App() {
  return (
    <>
      <div className='pantallaCarga'>
        <span className='circlePurple'></span>
      </div>
      <section id='presentacion'>
        <img src={Cartel} className='CartelSinFondo' />
        <h2>"Programar para resolver, innovar para avanzar"</h2>
      </section>
      <section id='servicios'>
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
              "Logo customizable.", "Mejor calidad al demandarlo como producto aparte.","El logo puede ser a creación de una inspiración/imagen suya o, si lo prefiere, a criterio nuestro."
            ]} />
        </article>
      </section>
      <section id='nuestro-equipo'>
        <h1 className='titulos'>Equipo</h1>
        <article id='equipoArticle'>
          <CardPresentation img={FotoMatias} desc={"Soy Matías Abregú, programador de 21 años con experiencia en desarrollo de software desde los 14 años. Me encargo de liderar y estructurar cada proyecto de software de una manera prolija y eficiente para brindar la mejor experiencia al cliente."} imgAsteroid={GH} imgAsteroid2={WA} link1={"https://github.com/MatiasAbregu"} link2={"https://wa.me/543512753590"} />
          <CardPresentation img={FotoMariano} desc={"Soy Mariano Hernández, programador de 24 años con 1 año de experiencia en desarrollo de software. Soy el Project Manager, encargado de llevar a cabo nuestro talento hacia nuestros clientes y brindar la mejor atención en el menor tiempo posible."} imgAsteroid={GH} imgAsteroid2={WA} link1={"https://github.com/master16mh"} link2={"https://wa.me/543518690277"} />
        </article>
      </section>
      <section id='nuestros-proyectos'>
        <h1 className='titulos'>Proyectos</h1>
        <Carousel datos={[
          [GestionTurismo, "Gestión Turismo", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magni esse aspernatur hic, sunt at fugiat voluptatibus autem. Est obcaecati nihil saepe laboriosam similique quae! Voluptates quasi, libero doloribus ad reiciendis blanditiis id iusto optio, debitis accusamus, praesentium non autem molestiae. Dolor ea necessitatibus, eum impedit doloremque recusandae voluptate vitae?"],
          [ProyectoISPT, "Proyecto ISTP", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magni esse aspernatur hic, sunt at fugiat voluptatibus autem. Est obcaecati nihil saepe laboriosam similique quae! Voluptates quasi, libero doloribus ad reiciendis blanditiis id iusto optio, debitis accusamus, praesentium non autem molestiae. Dolor ea necessitatibus, eum impedit doloremque recusandae voluptate vitae?"],
          [ProyectoDentalis, "Historias clinicas Dentalis", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magni esse aspernatur hic, sunt at fugiat voluptatibus autem. Est obcaecati nihil saepe laboriosam similique quae! Voluptates quasi, libero doloribus ad reiciendis blanditiis id iusto optio, debitis accusamus, praesentium non autem molestiae. Dolor ea necessitatibus, eum impedit doloremque recusandae voluptate vitae?"],
          [TuruWan, "TuruWan", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magni esse aspernatur hic, sunt at fugiat voluptatibus autem. Est obcaecati nihil saepe laboriosam similique quae! Voluptates quasi, libero doloribus ad reiciendis blanditiis id iusto optio, debitis accusamus, praesentium non autem molestiae. Dolor ea necessitatibus, eum impedit doloremque recusandae voluptate vitae?"]]} />
      </section>
      <section id='redes-sociales'>
        <h1 className='titulos'>Redes Sociales</h1>
        <article id='redesArticle'>
          <Asteroid img={Instagram}
            link={"https://www.instagram.com/codevoidstudio"} />
          <Asteroid img={Gmail}
            link={"mailto:codevoidstudio@gmail.com"} />
          <Asteroid img={Facebook}
            link={"https://www.facebook.com/profile.php?id=61574205765347"} />
          <Asteroid img={TikTok}
            link={"https://www.tiktok.com/@codevoidstudio"} />
        </article>
      </section>
      <footer>
        <h3>© Derechos reservados a Code Void - 2025</h3>
      </footer>
    </>
  );
};

export default App;