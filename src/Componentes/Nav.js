import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from './img.png'
import SegundoLogo from './logoM&M.png'

function Nav(props) {
    return (
        <>
            <div class="collapse" id="navbarToggleExternalContent">
                <div style={{
                    background: 'var(--fondoNav)',
                    borderRadius: '0.5rem',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}
                    class="p-2">
                    <ul className="elementUl" style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: '2rem',
                        fontSize: '1.5rem',
                        fontFamily: 'var(--letraTexto)'
                    }}>
                        <li><img
                            style={{
                                width: '4rem',
                                height: '3rem'
                            }}
                            src={SegundoLogo} alt='logo'></img>
                        </li>
                        <li ><Link to='/'>Inicio</Link></li>
                        <li ><Link to='/skills'>Skills tecnicas</Link></li>
                        <li ><Link to='/formulario'>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <nav class="navbar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span
                            class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <Outlet />
            </nav>
            <div className="encabezado">
                <header>
                    <h1 style={{
                        fontSize: '4rem'
                    }}>Matias<br />Mendoza</h1>
                    <h3 className="subtitulo">Programador Full Stack</h3>
                    <button>Mas Información</button>
                </header>
                <img src={Logo} alt=""></img>
            </div>
        </>
    )
}
export default Nav