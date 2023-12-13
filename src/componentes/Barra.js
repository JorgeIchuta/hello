import React from "react";
import {Link} from 'react-router-dom'

const Barra = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" to='/' style={{fontFamily: "cursive",fontSize: "50px"}}>Danzas de Bolivia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ backgraund: "--bs-scroll-height: 100px;" }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Sobreb'>Sobre Bolivia</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departamentos</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/Lapaz'>la Paz</Link></li>
                                    <li><Link className="dropdown-item" to='/Santa'>Santa Cruz</Link></li>
                                    <li><Link className="dropdown-item" to='/Cocha'>Cochabamba</Link></li>
                                    <li><Link className="dropdown-item" to='/Chuqui'>Chuquisaca</Link></li>
                                    <li><Link className="dropdown-item" to='/Tarija'>Tarija</Link></li>
                                    <li><Link className="dropdown-item" to='/Potosi'>Potosi</Link></li>
                                    <li><Link className="dropdown-item" to='/Oruro'>Oruro</Link></li>
                                    <li><Link className="dropdown-item" to='/Beni'>Beni</Link></li>
                                    <li><Link className="dropdown-item" to='/Pando'>Pando</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Creditos'>Creditos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default Barra;