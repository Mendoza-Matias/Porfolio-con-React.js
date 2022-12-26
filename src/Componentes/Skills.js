import React, { useState } from "react";
import { Lenguajes } from "./Lenguajes";
import logoSkills from './skillsTecnicas.png'


function Skills() {
    const [lenguajes, setLenguajes] = useState(
        [
            {
                nombre: 'Html',
                descripcion: 'Para estructurar y desplegar una página web y sus contenidos.',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png'
            },
            {
                nombre: 'Css',
                descripcion: 'Para estilizar la pagina ',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'

            },
            {
                nombre: 'Js',
                descripcion: 'Para darle interactividad a la pagina ',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png'
            },
            {
                nombre: 'Bootstrap',
                descripcion: 'Para darle estilos a la pagina de una manera mas rapida',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png'
            },
            {
                nombre: 'React',
                descripcion: 'Para crear interfaces de usuario interactivas de forma sencilla.',
                img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
            },
            {
                nombre: 'Node.js',
                descripcion: 'Para desarrollar aplicaciones escalables del lado del servidor y de red.',
                img: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
            },
            {
                nombre: 'Mongo.DB',
                descripcion: 'Es una base de datos NoSQL orientada a documentos',
                img: 'https://i.blogs.es/577c8b/650_1000_mongo_bumper.sh-600x600/1366_2000.png'
            }

        ])

    return (
        <div style={{
            background: 'var(--fondoNav)',
        }}>
            <section className="skills">
                <h2>Mis skills tecnicas</h2>
                <img style={{
                    marginTop: '1rem',
                    width: '25rem',
                    background: 'white',
                    borderRadius: '25rem',
                    boxShadow: '0px 2px 5px #000'

                }} src={logoSkills}></img>
            </section>
            <section className="lenguajes">
                {lenguajes.map((lenguajes) => {
                    return (
                        <article>
                            <Lenguajes
                                nombre={lenguajes.nombre}
                                descripcion={lenguajes.descripcion}
                                img={lenguajes.img}>
                            </Lenguajes>
                        </article>
                    )
                })}

            </section>
        </div>
    )
}
export default Skills;
