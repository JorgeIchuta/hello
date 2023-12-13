import React from "react";
import New from "../imagens/dansa.jpg"
import Dos from "../imagens/beni.jpg"
import Tres from "../imagens/chuqui.jpg"

const Carrusel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={New} class="d-block w-100" alt="..." style={{height: "450px", width: "300px"}}></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>DANZAS DE BOLIVIA</h5>
                    <p>"ME GUSTA LA NOCHE. SIN LA OSCURIDAD, NUNCAVERIAMOS LAS ESTRALLAS"</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Dos} class="d-block w-100" alt="..." style={{height: "450px", width: "300px"}}></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>DANZAS DE BOLIVIA</h5>
                    <p>TODOS LOS SUEÑOS PUEDEN  HACERSE REALIDAD SI TIENES EL CORAJE DE PERSEGUIRLOS</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Tres} class="d-block w-100" alt="..." style={{height: "450px", width: "300px"}}></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>DANZAS DE BOLIVIA</h5>
                    <p>LOS QUE PENSAMOS. NOS CONVERTIMOS EN NUESTROS PENSAMIENTOS</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrusel;