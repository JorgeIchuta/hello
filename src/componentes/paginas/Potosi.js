import React from "react";
import Pot from "../../imagens/potosi.jpg";
import Po1 from "../../imagens/po1.jpg";
import Po2 from "../../imagens/po2.jpg";
import Po3 from "../../imagens/po3.jpg";
import ReactPlayer from 'react-player';

const Potosi = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>POTOSI</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Pot} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>


            <center><h1>TURISMO POTOSÍ</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">El turismo en Potosí tiene un crecimiento destacado auspiciapo por gestiones departamentales y nacionales que le hace ser una referencia turística dentro de Bolivia. Iniciamos una caminata por los más significativos atractivos de esta región, los lugares turísticos de Potosí más destacados.</p>
                        <p className="h6">Dentro de toda su extensión es ineludible para el visitante es el turismo enla ciudad de Potosi.</p>
                        <p className="h3">TURISMO EN POTOSÍ</p>
                        <p className="h6">Es uno de los nueve departamentos de Bolivia, referencia nacional del turismo ayudado por sus atractivos naturales y por una capital, la ciudad de Potosí, que destila historia.</p>
                        <p className="h6">Una de las zonas más visitadas es la ciudad de Potosí, sin duda el corazón departamental.</p>
                        <p className="h3">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE POTOSÍ IMPORTANTES?</p>
                        <p className="h6">Te sugerimos esta relación de lugares para conocer los principales atractivos del turismo del departamento de Potosí.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Po1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">TOROTORO Y SU CIUDAD DE PIEDRA</h5>
                        <p class="card-text">Torotoro: Cuando llevemos algo más de recorrido en esta publicación comprenderás el sentido de ese título tan enigmático.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Po2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA CASA DE LA MONEDA DE POTOSÍ, LA HISTORIA DE UNA CIUDAD</h5>
                        <p class="card-text">Un pasado histórico que erigió a una ciudad como la más importante de toda América, donde la embriagadora explotación de la plata del Cerro Rico hizo inexcusable la creación y construcción de la Casa de la Moneda de Potosí.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Po3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA HIJA DEL CERRO RICO: POTOSÍ</h5>
                        <p class="card-text">Ciudad de Potosí: urbe que en su momento fue diosa de un olimpo de urbes, quizá la que más resplandor tuviera de todas ellas; pasado en el que llegó a tener más población que las mismísimas París o Londres</p>
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
                        <p className="h6">Recomendaciones con los lugares más importantes a visitar en Potosí y donde localizarás información sobre este departamento.</p>
                        <p className="h3">IMÁGENES-FOTOS DE POTOSÍ</p>
                        <p className="h6">Fotos de la ciudad de Potosí y de todo el territorio departamental que servirán para que tengas una primera toma de contacto con el departamento y su capital.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Po1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">TOROTORO Y SU CIUDAD DE PIEDRA</h5>
                        <p class="card-text">Torotoro: Cuando llevemos algo más de recorrido en esta publicación comprenderás el sentido de ese título tan enigmático.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Po2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA CASA DE LA MONEDA DE POTOSÍ, LA HISTORIA DE UNA CIUDAD</h5>
                        <p class="card-text">Un pasado histórico que erigió a una ciudad como la más importante de toda América, donde la embriagadora explotación de la plata del Cerro Rico hizo inexcusable la creación y construcción de la Casa de la Moneda de Potosí.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Po3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA HIJA DEL CERRO RICO: POTOSÍ</h5>
                        <p class="card-text">Ciudad de Potosí: urbe que en su momento fue diosa de un olimpo de urbes, quizá la que más resplandor tuviera de todas ellas; pasado en el que llegó a tener más población que las mismísimas París o Londres</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=VbRV4WNBzKI'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Potosi;