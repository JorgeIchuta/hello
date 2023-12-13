import React from "react";
import Bolivia from "../../imagens/bolivia.png";
import Ritual from "../../imagens/ritual.jpg";
import Etnias from "../../imagens/Etnias.jpg";
import Fauna from "../../imagens/fauna.jpg";
import Ima1 from "../../imagens/im1.png";
import Ima2 from "../../imagens/im2.png";
import ReactPlayer from 'react-player';

const Sobreb = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>INFORMACION DE BOLIVIA</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Bolivia} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
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
                        <p className="h5">Información de Bolivia: Sé que la intención de este blog, y por lo que me planteé hacerlo, era dar a conocer las bondades turísticas de Bolivia. Pero me gustaría que conocieras un poco sobre la situación actual del país en un contexto político, económico,…; algo totalmente diferente a lo que es la temática de la web pero que, desde mi punto de vista, es necesario conocer.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Ritual} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LOS RITUALES ANDINOS</h5>
                        <p class="card-text">Rituales andinos de Bolivia: El propósito de los ritos andinos es la petición de algo; en el caso anterior la ceremonia tiene el objeto de conseguir que Evo Morales tenga una buena gestión en la legislatura que le llevará como Presidente del Estado Plurinacional de Bolivia hasta el año 2020.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Etnias} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">36 ETNIAS DE BOLIVIA</h5>
                        <p class="card-text">La grandeza de Bolivia no sólo se circunscribe en el marco de una gran biodiversidad, de una gran tradición histórica o de una gran variedad de atractivos naturales; otra razón para visitar el país es su variedad de  gentes, enfatizada a través de las 36 etnias de Bolivia, que le hacen tener una enorme riqueza de costumbres.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Fauna} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">10 IMÁGENES DE LA FAUNA DE BOLIVIA</h5>
                        <p class="card-text">La fauna de Bolivia se presenta en sinergia perfecta con un entorno natural inusitado, el de su territorio, que hace que los fotógrafos consigan instantáneas de una plasticidad asombrosa.</p>
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
                        <p className="h5">Su Constitución, del 7 de Febrero del 2009, establece al país como un Estado Unitario Social de Derecho Plurinacional Comunitario; esto es el Estado Plurinacional de Bolivia, y tanto es así que son más de treinta las distintas nacionalidades que lo conforman. En la web he dedicado varios artículos a analizarlas una por una, porque merece la pena y es el principal indicio de la variedad social y cultural que hace tan atractiva a Bolivia para el turismo.</p>
                        <p className="h5">Es un estado que en los últimos años ha experimentado un enorme crecimiento económico, hasta el punto de ser un punto de referencia internacional para la búsqueda de trabajo. Ese fue mi caso, que al encontrarme desempleado en mi lugar de origen, me vine a estas tierras, siendo Bolivia la que me está dando lo que el país que me vio nacer no me puede dar en este momento, trabajo.</p>
                        <p className="h5">Al hilo de lo que cito en el párrafo anterior, me gustaría que observaras los siguientes gráficos, en los que por años se ve la evolución que han tenido ambos países y que hace que sea palmaria cuál es la situación de uno y otro país.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Ima1} className="img-thumbnail" alt="..."></img>
                        <img src={Ima2} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
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
                        <p className="h5">El M.A.S. (Movimiento al Socialismo) es el grupo político que se encuentra en el poder, liderado por el presidente del país Evo Morales. Evo llego al poder en el 2005 y, después de la reelección del 2014, se mantendrá en el poder hasta el 2020. En temas políticos soy totalmente imparcial, pero es cierto que este periodo ha supuesto un ciclo de bonanza económica dejando atrás periodos convulsos; me alegro por mis amigos bolivianos, se merecían estos tiempos de vacas gordas.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Ritual} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LOS RITUALES ANDINOS</h5>
                        <p class="card-text">Rituales andinos de Bolivia: El propósito de los ritos andinos es la petición de algo; en el caso anterior la ceremonia tiene el objeto de conseguir que Evo Morales tenga una buena gestión en la legislatura que le llevará como Presidente del Estado Plurinacional de Bolivia hasta el año 2020.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Etnias} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">36 ETNIAS DE BOLIVIA</h5>
                        <p class="card-text">La grandeza de Bolivia no sólo se circunscribe en el marco de una gran biodiversidad, de una gran tradición histórica o de una gran variedad de atractivos naturales; otra razón para visitar el país es su variedad de  gentes, enfatizada a través de las 36 etnias de Bolivia, que le hacen tener una enorme riqueza de costumbres.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Fauna} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">10 IMÁGENES DE LA FAUNA DE BOLIVIA</h5>
                        <p class="card-text">La fauna de Bolivia se presenta en sinergia perfecta con un entorno natural inusitado, el de su territorio, que hace que los fotógrafos consigan instantáneas de una plasticidad asombrosa.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=V52zg2jJDJQ'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Sobreb;