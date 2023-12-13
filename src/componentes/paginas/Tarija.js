import React from "react";
import Tari from "../../imagens/tarija.jpg";
import Ta1 from "../../imagens/ta1.jpg";
import Ta2 from "../../imagens/ta2.jpg";
import Ta3 from "../../imagens/ta3.jpg";
import ReactPlayer from 'react-player';

const Tarija = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>STARIJA</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Tari} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>

            <center><h1>TURISMO EN TARIJA, LA FRANGANCIA DEL VINO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">El turismo en el departamento de Tarija tiene un auge actual notorio que le hace ser una referencia turística dentro de Bolivia. Iniciamos un paseo por los más importantes atractivos de este terrirorio, los lugares turísticos de Tarija más destacados.</p>
                        <p className="h6">Dentro de toda su extensión es inedulible para el turista la ciudad de Tarija, ubicada en un lindo valle a orillas del río Guadalquivir.</p>
                        <p className="h3">TURISMO EN TARIJA</p>
                        <p className="h6">Es uno de los departamentos destacados de Bolivia, ayudado por sus atractivos naturales y por una capital, la ciudad de Tarija, que rezuma tradición.</p>
                        <p className="h6">La zona más visitada es la ciudad de Tarija, sin duda el corazón departamental y localizada en una de las zonas más fértiles del departamento.</p>
                        <p className="h3">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE TARIJA MÁS DESTACADOS?</p>
                        <p className="h6">Te sugerimos este listado para conocer los principales atractivos del turismo en Tarij</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Ta1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA RUTA DEL VINO, FOTOS DE UN LUGAR IMPRESCINDIBLE</h5>
                        <p class="card-text">Otra publicación con un peso predominante de la imagen, que muchas veces se valora más para dar a conocer un lugar que la propia letra. En esta ocasión es Pablo Garrote quién nos ofrece fotos de su estancia en Tarija y de la Ruta del Vino, que por supuesto tuvo el placer de disfrutar.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Ta2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">RUTA DEL VINO: EL TURISMO EMBRIAGADOR DE TARIJA</h5>
                        <p class="card-text">Otro concepto de visita, ni en el marco de un itinerario por una de esas ciudades de encanto actual y de génesis pasada, ni la abstracción, e incluso enajenación, que supone admirar la titánica biodiversidad de Bolivia.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Ta3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA CASA DORADA DE TARIJA: UNO DE LOS EDIFICIOS MÁS BONITOS DE BOLIVIA</h5>
                        <p class="card-text">La Casa Dorada se ha ganado la calificación de ser uno de los edificios de mayor atractivo de cuantos hay en Bolivia.</p>
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
                        <p className="h6">Encomiendas con los sitios más singulares a visitar en Tarija y donde localizarás información sobre este departamento</p>
                        <p className="h3">IMÁGENES-FOTOS DE TARIJA</p>
                        <p className="h6">Fotos de la ciudad de Tarija y de todo un departamento que servirán para que tengas un primer acercamiento al departamento y su capital.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

                
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Ta1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA RUTA DEL VINO, FOTOS DE UN LUGAR IMPRESCINDIBLE</h5>
                        <p class="card-text">Otra publicación con un peso predominante de la imagen, que muchas veces se valora más para dar a conocer un lugar que la propia letra. En esta ocasión es Pablo Garrote quién nos ofrece fotos de su estancia en Tarija y de la Ruta del Vino, que por supuesto tuvo el placer de disfrutar.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Ta2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">RUTA DEL VINO: EL TURISMO EMBRIAGADOR DE TARIJA</h5>
                        <p class="card-text">Otro concepto de visita, ni en el marco de un itinerario por una de esas ciudades de encanto actual y de génesis pasada, ni la abstracción, e incluso enajenación, que supone admirar la titánica biodiversidad de Bolivia.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Ta3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LA CASA DORADA DE TARIJA: UNO DE LOS EDIFICIOS MÁS BONITOS DE BOLIVIA</h5>
                        <p class="card-text">La Casa Dorada se ha ganado la calificación de ser uno de los edificios de mayor atractivo de cuantos hay en Bolivia.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=xyzeiUqUdqk'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>
        </div>
    );
}

export default Tarija;