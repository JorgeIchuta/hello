import React from "react";
import Oru from "../../imagens/oruro.jpg"
import O1 from "../../imagens/o1.jpg"
import O2 from "../../imagens/o2.jpg"
import O3 from "../../imagens/o3.jpg"
import ReactPlayer from 'react-player';

const Oruro = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>ORURO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Oru} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>


            <center><h1>TURISMO EN ORURO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">El turismo en Oruro, incluyendo todo su departamento, tiene un crecimiento destacado respaldado por el número anual de visitantes que recibe y le hace ser una referencia turística dentro de Bolivia. Iniciamos una caminata por los más significativos atractivos de esta región, los lugares turísticos de Oruro que, sin duda, merecen tu interés.</p>
                        <p className="h6">Dentro de toda su extensión es inevitable para el visitante el turismo en la ciudad de Oruro.</p>
                        <p className="h3">TURISMO EN LA CIUDAD DE ORURO</p>
                        <p className="h6">Es uno de los nueve departamentos de Bolivia, referencia nacional del turismo ayudado por sus atractivos naturales y por una capital, la ciudad de Oruro, que destila carnaval.</p>
                        <p className="h6">Una de las zonas más visitadas es la ciudad de Oruro, sin duda el corazón departamental.</p>
                        <p className="h3">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE ORURO MÁS IMPORTANTES?</p>
                        <p className="h6">Te sugerimos esta relación de lugares para conocer los principales atractivos turísticos del departamento de Oruro.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={O1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO POOPÓ: UN FASCINANTE VIAJE AL OMBLIGO DEL MUNDO</h5>
                        <p class="card-text">Cuando se habla de lagos en Bolivia siempre se cita inexcusablemente al archiconocido Lago Titicaca.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={O2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">CARNAVAL DE ORURO, EL MEJOR DEL PLANETA PARA TODO ORUREÑO </h5>
                        <p class="card-text">Estamos estos días en la antesala de la mayor de las celebraciones de cuantas hay en Bolivia. El Carnaval de Oruro, “Obra Maestra del Patrimonio Oral e Intangible de la Humanidad”,</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={O3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA MISTERIOSA LEYENDA DE LA CREACIÓN DEL NEVADO SAJAMA</h5>
                        <p class="card-text">Esta es la crónica de una lucha fratricida, una de tiempos antediluvianos, de esas que forjaron la imagen contemporánea del embelesador occidente andino de Bolivia.</p>
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
                        <p className="h6">Recomendaciones con los lugares más importantes a visitar en Oruro y donde hallarás datos de interés sobre este departamento.</p>
                        <p className="h3">IMÁGENES-FOTOS DE ORURO</p>
                        <p className="h5">Fotos de la ciudad de Oruro y de todo el departamento que servirán para que tengas un primer acercamiento con el departamento y su capital.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={O1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO POOPÓ: UN FASCINANTE VIAJE AL OMBLIGO DEL MUNDO</h5>
                        <p class="card-text">Cuando se habla de lagos en Bolivia siempre se cita inexcusablemente al archiconocido Lago Titicaca.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={O2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">CARNAVAL DE ORURO, EL MEJOR DEL PLANETA PARA TODO ORUREÑO </h5>
                        <p class="card-text">Estamos estos días en la antesala de la mayor de las celebraciones de cuantas hay en Bolivia. El Carnaval de Oruro, “Obra Maestra del Patrimonio Oral e Intangible de la Humanidad”,</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={O3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA MISTERIOSA LEYENDA DE LA CREACIÓN DEL NEVADO SAJAMA</h5>
                        <p class="card-text">Esta es la crónica de una lucha fratricida, una de tiempos antediluvianos, de esas que forjaron la imagen contemporánea del embelesador occidente andino de Bolivia.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=0A3Aq-5hp8A'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Oruro;