import React from 'react'

export const Lenguajes = (props) => {
    return (
        <div>
            <img src={props.img} style={{
                height: '8rem',
                marginTop: '1rem',
            }}></img>
            <h3><strong>{props.nombre}</strong></h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default Lenguajes;