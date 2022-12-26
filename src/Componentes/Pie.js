import React from 'react'

const Pie = (props) => {
    return (
        <div>
            <footer style={{
                marginTop: '5rem',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--fondoNav)',
                height: '5rem',
                fontFamily: 'var(--letraTexto)',
                textShadow: '0px 2px 0px #000'
            }}>
                <p style={{
                    marginTop: 'auto',
                    marginLeft: '1rem'
                }}>{props.informacion}</p>
            </footer>
        </div>
    )
}

export default Pie