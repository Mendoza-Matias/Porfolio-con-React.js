import React from 'react'
import { useFormulario } from './hooks/useFormulario'

const Formulario = () => {

    const [values, handleInputChange] = useFormulario({
        nombre: '',
        email: '',
        comentario: ''
    })

    const { nombre, email, comentario } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Datos guardados exitosamente')
        fetch('http://localhost:3000/informations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(respuesta => {
                console.log(respuesta)
            })

    }
    return (
        <div className='box-form'>
            <div
                style={{
                    fontFamily: 'monserrat-semibold',
                    lineHeight: '2rem',
                }}>
                <h2
                    style={{
                        fontFamily: 'var(--letraTitulos)',
                        lineHeight: '5rem',
                        textShadow: '0px 5px 0px black',
                        fontSize: '3rem'
                    }}
                >Contacto</h2>
                <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
                <p><strong>Correo Electronico: </strong><a>mendoza.matias.ezequiel.01@gmail</a></p>
                <p><strong>Telefono: </strong><a >1170001025</a></p>
                <p><strong>Linkedin: </strong><a>Matias Mendoza</a></p>
                <p><strong>Descarga mi curriculum: </strong><a>Matias Mendoza</a></p>
            </div>
            <div>
                <form onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '20rem'

                    }}>
                    <h3
                        style={{
                            fontFamily: 'var(--letraTexto)',
                            fontSize: '2rem',
                            textShadow: '0px 2px 5px #000'
                        }}
                    >Coloca tu informacion Aqui...</h3>
                    <input onChange={handleInputChange} value={nombre} name='nombre' id='nombre' type='text' placeholder='Nombre'></input>
                    <input onChange={handleInputChange} value={email} name='email' id='email' type='email' placeholder='Correo Electronico'></input>
                    <input onChange={handleInputChange} value={comentario} name='comentario' id='comentario' type='text' style={{
                        height: '10rem'
                    }} placeholder='Deja tu consulta aqui'></input>
                    <button
                        style={{
                            marginTop: '1rem',
                            width: '5rem',
                            borderRadius: '2rem',
                            border: 'transparent',
                            height: '2rem',
                            fontSize: '1rem'
                        }}
                    >Enviar</button>
                </form>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Formulario