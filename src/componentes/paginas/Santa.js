import React from "react";
import Santac from "../../imagens/santa.jpg";
import Robore from "../../imagens/robore.jpg";
import Iglesia from "../../imagens/iglesia.jpg";
import Visita from "../../imagens/visita.jpg";
import ReactPlayer from 'react-player';

const Santa = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>SANTA CRUZ</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Santac} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>

            <center><h1>SANTA CRUZ BOLIVIA TURISMO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h3">TURISMO EN SANTA CRUZ, BOLIVIA: BAJO EL CIELO MÁS PURO DE LATINOAMÉRICA </p>
                        <p className="h6">El departamento de Santa Cruz es el motor económico de Bolivia. Además, el turismo en Santa Cruz está creciendo exponencialmente los últimos anos al amparo de una oferta turística variada y de calidad. Por lo tanto, el turismo en Santa Cruz (Bolivia) es una cita ineludible para todo aquel que busca experimentar un ocio diferente…</p>
                        <p className="h3">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE SANTA CRUZ MÁS IMPORTANTES? </p>
                        <p className="h6">Grosso modo mostramos el siguiente listado de los lugares turísticos más importantes del departamento de Santa Cruz.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Robore} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">ROBORÉ, EL PARAÍSO ESCONDIDO DEL ORIENTE BOLIVIANO</h5>
                        <p class="card-text">Muchos han sido los reclamos que hemos tenido para que Roboré, Bolivia, tuviera un post en exclusividad.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Iglesia} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">IGLESIAS JESUÍTICAS DE LA CHIQUITANIA. LA RUTA MISIONAL CHIQUITANA</h5>
                        <p class="card-text">Las iglesias jesuíticas de la Chiquitania son el resultado de la presencia y fundación de las llamadas reducciones por parte de la Compañía de Jesús.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Visita} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">¿QUÉ VISITAR EN SANTA CRUZ DE LA SIERRA?</h5>
                        <p class="card-text">¿Qué visitar en Santa Cruz de la Sierra?: Santa Cruz de la Sierra, actual motor económico de Bolivia, ofrece una cantidad ingente de actividades para el disfrute de sus habitantes y de sus visitantes.</p>
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
                        <p className="h3">En cada una de estas secciones hallarás los sitios turísticos de Santa Cruz, Bolivia, que son el referente para todos los visitantes. Una relación de lugares para visitar en Santa Cruz…</p>
                        <p className="h5">IMÁGENES DE SANTA CRUZ, BOLIVIA </p>
                        <p className="h3">Son tres imágenes de turismo en el departamento de Santa Cruz que servirán de adelanto a la información que encontrarás en este sitio web sobre los atractivos turísticos de Santa Cruz.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Robore} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">ROBORÉ, EL PARAÍSO ESCONDIDO DEL ORIENTE BOLIVIANO</h5>
                        <p class="card-text">Muchos han sido los reclamos que hemos tenido para que Roboré, Bolivia, tuviera un post en exclusividad.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Iglesia} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">IGLESIAS JESUÍTICAS DE LA CHIQUITANIA. LA RUTA MISIONAL CHIQUITANA</h5>
                        <p class="card-text">Las iglesias jesuíticas de la Chiquitania son el resultado de la presencia y fundación de las llamadas reducciones por parte de la Compañía de Jesús.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Visita} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">¿QUÉ VISITAR EN SANTA CRUZ DE LA SIERRA?</h5>
                        <p class="card-text">¿Qué visitar en Santa Cruz de la Sierra?: Santa Cruz de la Sierra, actual motor económico de Bolivia, ofrece una cantidad ingente de actividades para el disfrute de sus habitantes y de sus visitantes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=GPpn6MtxTnY'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>


        </div>
    );
}

export default Santa;