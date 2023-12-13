import React from "react";
import Beni from "../imagens/beni.jpg"
import Pando from "../imagens/pando.jpg"
import Tarija from "../imagens/tarija.jpg"
import Cocha from "../imagens/cocha.jpg"
import Santa from "../imagens/santa.jpg"
import Chuqui from "../imagens/chuqui.jpg"
import Paz from "../imagens/paz.jpg"
import Oruro from "../imagens/oruro.jpg"
import Potosi from "../imagens/potosi.jpg"
import ReactPlayer from 'react-player';
import Carrusel from "./Carrusel";

const Navar = () => {
    return (
        <div className="row ">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className="h3">Indice</a>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-1">1 DANZA DE LOS MACHETEROS (BENI)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-2">2 DANZA CHOVENA (PANDO)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-3">3 RUEDA CHAPACA (TARIJA)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-4">4 EL CARNAVALITO (COCHABAMBA)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-5">5 DANZA EL BURI CAMBA (SANTA CRUZ)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-6">6 DANZA PUJLLAY (CHUQUISACA)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-7">7 DANZA CHUTAS (LA PAZ)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-8">8 DANZA DIABLADA (ORURO)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-9">9 EL TINKU (POTOSÍ)</a></button>
                        <button type="button" class="btn btn-outline-primary"><a className="nav-link" href="#item-10">10 VÍDEO DE LAS DANZAS TÍPICAS DE BOLIVIA</a></button>
                    </nav>
                </nav>
            </div>

            <div className="col-10 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                    <center><h1><span className="h1">DANZAS DEPARTAMENTALES DE BOLIVIA</span></h1></center>
                    <Carrusel/>
                    <p><span className="h6">Danzas típicas de Bolivia: una condensación de gran cantidad de costumbres y folclore en Bolivia que la hacen llamativa por mucho más que por su herencia gloriosa.</span></p>
                    <p><span className="h2">BAILES TÍPICOS DE BOLIVIA</span></p>
                    <p><span className="h4"></span>Este artículo está destinado a que conozcas algunas de las danzas departamentales de Bolivia más representativas. Son muchas más las que deberían estar en esta lista, pero mi lista de danzas bolivianas es ésta:</p>
                    <div id="item-1" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA DE LOS MACHETEROS (BENI)</h4>
                        <p>La danza beniana de mayor proyección internacional y archiconocida en el país. Es curiosa la mezcla génesis de esta danza, ya que, aun siendo de origen colonial y de interpretación nativa, representa la resurrección de Cristo.</p>
                        <p>Lo que da nombre al baile, y lo caracteriza, son los machetes de madera que portan sus miembros, la túnica blanca y sin cuello que visten, tan solo alteradas por los motivos coloridos de sus costados, y, sobre todo, los tocados de plumas (llamados progi) que cubren las cabezas de los danzantes, fabricados con plumas de aves amazónicas que son dispuestas según la intensidad de sus colores.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Beni} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-2" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA CHOVENA (PANDO)</h4>
                        <p>Aunque es de origen nativo chiquitano, se ha popularizado mucho en el departamento de Pando. Baile ejecutado por parejas tomadas de la mano que se unen para formar filas dispuestas en círculo.</p>
                        <p>Todo el ritual que conlleva esta danza suele amenizar las fiestas carnavalescas y, también, alguna festividad religiosa.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Pando} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-3" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>RUEDA CHAPACA (TARIJA)</h4>
                        <p>Ambientada por el canto de copla española, ejecutada por los chapacos, se trata de una danza alegre, en ocasiones vertiginosa, al compás de instrumentos como el erque y el violín; muy característico del baile es su llamativo zapateo acompasado por la música.</p>
                        <p>Tanto chapacos como chapacas, visten atuendos muy coloridos y de bastante densidad de elementos; singular, en ellos, es su faja llamada chumpi que se complementa con otros componentes como su poncho de color rojo burdeos y sus sombreros alados, siendo lo más característico en la vestiduras, de ellas, la pollerita, de colores vivos y claros. Celebraciones campesinas, la Pascua, etc. sirven de contexto a estas coreografías.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Tarija} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-4" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>EL CARNAVALITO (COCHABAMBA)</h4>
                        <p>Ese tipo de rituales que sobrevivieron a la colonización y se mantienen, casi intactos, hasta nuestros días; no son exclusivos de Bolivia porque se practican, también, en algunas zonas de Argentina.</p>
                        <p>Como las anteriores, tiene su principal fuerza visual en el número de participantes, bastante amplio, y en la propia distribución del conjunto, en parejas; la línea se mantiene, con ritmos que se practican en sintonía con la música generada por instrumentos como la quena, el erkencho, el sikus, el erque, el charango, la caja chayera y el bombo. Repitiéndose mucho en las danzas descritas, la formación de ruedas y de filas en hilera es propia de estos bailoteos.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Cocha} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-5" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA EL BURI CAMBA (SANTA CRUZ)</h4>
                        <p>La forma de consumar el orgullo de ser camba no podía ser otra que un baile. Otra más de las expresiones del espíritu cruceño del que ya te hable en otra publicación (haz clic en la zona subrayada en rojo).</p>
                        <p>El Buri no ha cambiado en esencia, sigue la línea ancestral marcada e invariable, sigue siendo la fiesta por excelencia de todo el oriente boliviano. No se entiende una fiesta o verbena sin la sinfonía acompañante del Buri Camba, con las imprescindibles bandas, el taquirari y la tamborita.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Santa} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-6" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA PUJLLAY (CHUQUISACA)</h4>
                        <p>De la que ya te había hecho referencia en las “10 fechas a marcar en el calendario de Bolivia”. Siguiendo la línea de lo que te comenté allí, en esta ocasión te expondré algunos tips que completan lo citado en aquella publicación.</p>
                        <p>Se trata de una danza originaria de la localidad de Tarabuco, en el departamento de Chuquisaca, cerca de la ciudad de Sucre, y el aroma que alambica es el de un baile satírico, y a la vez sarcástico, en la propia puesta en valor que hace la danza de la heroicidad de los combatientes, durante la Guerra de la Independencia de Bolivia, a través de vestimentas como el casco y los zuecos con espuelas, propios de los conquistadores.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Chuqui} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-7" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA CHUTAS (LA PAZ)</h4>
                        <p>Ese tipo de coreografías muy vinculadas a reclamar buenas cosechas; ese periodo que en La Paz lleva desde diciembre hasta marzo.</p>
                        <p>El baile tiene su explicación en el origen del propio término, chuta, cuyo significado se puede englobar dentro del concepto de alguien que realiza una faena de forma crónica y, a la vez, gratuita; incluso, siendo más exactos, muchos expertos creen que hace referencia al indígena que trabajaba de forma esclava en los dominios de los terratenientes.</p>
                        <p>Se puede entender que su génesis estuvo en esa relación dueño-criado y que su origen definitivo se remató en una Bolivia independiente (información sobre Bolivia).</p>
                        <p>Nuevamente confluyen en el baile elementos comunes con otras danzas de la lista; se trata de un baile en pareja, pareciera caótico por su zigzagueo errático, aunque está dentro de un ritmo perfectamente diseñado y exhortado por, nuevamente, los compases de las bandas de música</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Paz} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-8" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>DANZA DIABLADA (ORURO)</h4>
                        <p>De origen español y en adoración a la Virgen de la Candelaria, surgió La Diablada. Su punto de referencia, y no otro, es la ciudad de Oruro.</p>
                        <p>Está impregnada de un olor especial hispánico, ya que tiene muchas similitudes con tradiciones y fiestas que se siguen celebrando en España; sólo tienes que hacer clic en el enlace subrayado en rojo para conocer de lo que te hablo. Es la escenificación de dos mundos en lucha, el del BIEN y el del MAL.</p>
                        <p>Del primero, la representación del arcángel San Miguel con sus 7 virtudes, las que le llevan al triunfo sobre Lucifer y, de éste, la escenificación de los pecados capitales(también siete…), donde destacan las máscaras que atavían a los participantes en las coreografías. Es famosísima porque es una de las danzas características del CARNAVAL DE ORURO.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Oruro} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-9" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>EL TINKU (POTOSÍ)</h4>
                        <p>O danza Tinkuy es una de esas ceremonias tradicionales de Potosí donde comunidades campesinas y, a la vez, vecinas se enfrentan a puñetazos como parte del ritual, que se completa con bailes.</p>
                        <p>Se trata de una usanza ancestral que pocas veces termina en tragedia en este “encuentro” (significado de la palabra Tinku) de germen precolombino. Nuevamente es una ofrenda campesina a la Madre Tierrapidiendo bendiciones para el periodo siembra-cosecha. Dos filas de hombres se enfrentan, protegidos con monteras (una especie de casco fabricado en cuero), en este rudo ritual…</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                <img src={Potosi} className="img-thumbnail" alt="..."></img>
                                </div>
                                <div className="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-10" className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <h4>VÍDEO DE LAS DANZAS TÍPICAS DE BOLIVIA</h4>
                        <p>Dejo este vídeo para que conozcas parte de lo que es y supone LA DANZA DE LOS MACHETEROS…</p>
                        <p></p>
                        <div className="container text-center">
                            <div class="row">
                                <div class="col">
                                </div>
                                <div class="col">   
                                    <ReactPlayer url='https://www.youtube.com/watch?v=Gv0RJ0nx2gI'style={{textAlign: "center"}} />                  
                                </div>
                                <div class="col">                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navar;