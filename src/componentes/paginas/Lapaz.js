import React from "react";
import Lapazz from "../../imagens/paz.jpg";
import Lapaz1 from "../../imagens/la1.jpg";
import Lapaz2 from "../../imagens/la2.jpg";
import Lapaz3 from "../../imagens/la3.jpg";
import Lapaz4 from "../../imagens/la4.jpg";
import Lapaz5 from "../../imagens/la5.jpg";
import Lapaz6 from "../../imagens/la6.jpg";
import ReactPlayer from 'react-player';

const Lapaz = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>LA PAZ</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Lapazz} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>


            <center><h1>TURISMO EN LA PAZ: TURISMO EN ALTURA</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">El turismo en La Paz, referido a todo el departamento, es un hito ineludible. Su capital, La Paz, ha sido elegida una de las ciudades maravilla del mundo. Con esta carta de presentación sobra decir nada.</p>
                        <p className="h6">Un departamento lleno de infinidad de atractivos turísticos.</p>
                        <p className="h6">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE LA PAZ,BOLIVIA, MÁS IMPORTANTES?</p>
                        <p className="h6">De forma somera mostramos la siguiente lista con los lugares turísticos más importantes de La Paz.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Lapaz1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO TITICACA Y LA ISLA DEL SOL EN FOTOS DE ENSUEÑO</h5>
                        <p class="card-text">La colaboración de este artículo es a cargo de Pablo Petraglia, autor de un blog de experiencias viajeras llamado “Viajar para sentirse vivo”. En la fecha de publicación de este artículo, Pablo se encuentra de itinerario por el occidente de Bolivia, así como Perú.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">EL SISTEMA VIAL ANDINO, EL CAMINO DE SANTIAGO AMERICANO</h5>
                        <p class="card-text">El Sistema Vial Andino es uno de esos itinerarios que se deben realizar alguna vez en la vida y que suponen ese tipo de experiencias vivenciales que se convierten en catarsis.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">COROICO: UN PARAÍSO TROPICAL COLGADO DEL CIELO</h5>
                        <p class="card-text">Una expresiva localidad yunga sustentada por la ladera de la montaña y colgada del mismísimo cielo. Paraje de ensueño y garante de un asentamiento propio para turistas animosos de la buena naturaleza en una arrebatadora tranquilidad: Coroico, un paraíso tropical cercano al cielo…</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Lapaz4} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">EL VALLE DE LAS ÁNIMAS, IMPRESCINDIBLE EN TU VISITA A LA PAZ</h5>
                        <p class="card-text">Un entorno geológico de maniáticas formaciones rocosas que se ha cincelado a lo largo de millones de años por los elementos erosivos. </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz5} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LOS MISTERIOSOS TÚNELES SECRETOS DEL LAGO TITICACA</h5>
                        <p class="card-text">Cuenta algún controvertido relato la existencia de los túneles secretos del Lago Titicaca, que servían a una civilización antediluviana muy avanzada para su organización y gestión.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz6} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">CIUDAD DE LA PAZ. LO QUE HARÉ YO CUANDO VUELVA</h5>
                        <p class="card-text">La única vez que he estado en la ciudad de La Paz fue con motivo de mi traslado a la localidad de Rurrenabaque por motivos profesionales.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">Son un listado de secciones donde encontrarás una serie de recomendaciones y los lugares para visitar en La Paz más significativos (todo sobre La Paz).</p>
                        <p className="h3">LUGARES TURÍSTICOS PARA VISITAR EN LA PAZ, BOLIVIA </p>
                        <p className="h6">La Paz en Bolivia, es uno de los nueve departamentos que conforman el Estado Plurinacional de Bolivia.</p>
                        <p className="h6">Es un departamento rico en diversidad y variedad turística, empezando por su capital, la ciudad de La Paz.</p>
                        <p className="h6">Te invitamos a que leas las diferentes secciones mostradas arriba con la mayoría de los puntos de interés turístico que te mostrarán qué visitar en La Paz. Sin dudarlo, es un departamento que destila un aroma embriagador…</p>
                        <p className="h3">LA PAZ, BOLIVIA, EN FOTOS: RESUMEN VISUAL </p>
                        <p className="h6">Son tres imágenes de turismo en La Paz que servirán de resumen sinóptico sobre la variedad de paisajes de este departamento.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Lapaz1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO TITICACA Y LA ISLA DEL SOL EN FOTOS DE ENSUEÑO</h5>
                        <p class="card-text">La colaboración de este artículo es a cargo de Pablo Petraglia, autor de un blog de experiencias viajeras llamado “Viajar para sentirse vivo”. En la fecha de publicación de este artículo, Pablo se encuentra de itinerario por el occidente de Bolivia, así como Perú.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">EL SISTEMA VIAL ANDINO, EL CAMINO DE SANTIAGO AMERICANO</h5>
                        <p class="card-text">El Sistema Vial Andino es uno de esos itinerarios que se deben realizar alguna vez en la vida y que suponen ese tipo de experiencias vivenciales que se convierten en catarsis.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Lapaz3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">COROICO: UN PARAÍSO TROPICAL COLGADO DEL CIELO</h5>
                        <p class="card-text">Una expresiva localidad yunga sustentada por la ladera de la montaña y colgada del mismísimo cielo. Paraje de ensueño y garante de un asentamiento propio para turistas animosos de la buena naturaleza en una arrebatadora tranquilidad: Coroico, un paraíso tropical cercano al cielo…</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=2P6De6ZsWvQ'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Lapaz;