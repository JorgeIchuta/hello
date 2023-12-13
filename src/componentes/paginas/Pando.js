import React from "react";
import Pan from "../../imagens/pando.jpg"
import Pa1 from "../../imagens/pa1.jpg"
import Pa2 from "../../imagens/pa2.jpg"
import Pa3 from "../../imagens/pa3.jpg"
import ReactPlayer from 'react-player';

const Pando = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>PANDO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Pan} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>

            <center><h1>TURISMO EN PANDO</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">Turismo en Pando: este departamento quizá sea el más olvidado a nivel turístico y, también quizá, el que mayor llamativo tenga en su conjunto. De esta aparente incongruencia subyace el hecho de que es el que menos infraestructura turística posee, a pesar de la presente inversión…</p>
                        <p className="h6">Pero es evidente que es el territorio de Bolivia que mayor identidad amazónica posee, con todo lo que esto supone en cuanto a atractivos naturales. Y es este conjunto, el de la Amazonía abarcada por el departamento, el que se debe poner en valor ya que ha sido elegida como una de las maravillas naturales del planeta.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Pa1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">Qué es imprescindible VER y HACER en BOLIVIA. 15 Opciones INELUDIBLES ✌</h5>
                        <p class="card-text">Con este conglomerado, puede que desconcertante, la publicación pretende poner el valor los principales hitos turísticos de Pando</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Pa2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO BAY: UN MOCHILERO EXTREMO EN BOLIVIA</h5>
                        <p class="card-text">Lago Bay: Quizá esté exagerando, tanto con el título como con lo que te voy a contar, pero este tipo de destinos son de los que se deben tomar con todas las precauciones posibles, si se deciden hacer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Pa3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">COBIJA, BOLIVIA: VIAJE AL CORAZÓN DE LA AMAZONÍA</h5>
                        <p class="card-text">Una ciudad de reciente creación (1906), tanto es así que se trata del asentamiento urbano más moderno del país y que anhela a sus gloriosos tiempos pasados donde era uno de los principales núcleos económicos de la zona.</p>
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
                        <p className="h6">Con este conglomerado, puede que desconcertante, la publicación pretende poner el valor los principales hitos turísticos de Pando, una región norteña de Bolivia poco poblada (en torno a 60.000 habitantes) y cuya capital es Cobija, la capital de la castaña; como en muchas zonas del país, el conjunto de hitos de visita está circunscrito a la enorme riqueza hídrica de este departamento, con una cantidad colosal de ríos que están comprendidos en la gran cuenca amazónica.</p>
                        <p className="h6">Los principales son el Madre de Dios, de origen peruano, el Karamanu, el Acre, que define la frontera natural con Brasil, el Buyumanu, el Chipamanu o el Maripi; el de la siguiente foto es el Orthon, cuya génesis se produce con la convergencia de los ríos Tahuamano y Manuripi…</p>
                        <p className="h3">FAUNA DE PANDO</p>
                        <p className="h6">Todo lo citado suma a la fórmula de trabajo que hace que Pando sea un lugar que se tiene que empezar a tener en consideración turística y de lo que deriva, además, una región del país de gran biodiversidad, con especies tan características del lugar como el tigre americano o jaguar, el puma, el tapir, el tejón y el coatí.</p>
                        <p className="h6">Asimismo destacan la gran multiplicidad de especies de simios que hay. Resaltar reptiles como las iguanas, las tortugas de tierra, los caimanes y serpientes, como las boas o las anacondas, que en determinadas zonas se han llegado a avistar ejemplares de hasta 12 metros de longitud y más de tres toneladas de peso.</p>
                        <p className="h6">Y los propiamente desarrollados en el regazo de los ríos como pueden ser los caimanes, los lobitos de río o los famosos bufeos (que son una especie de delfín de agua dulce) y que cuentan con una ruta ideal para observarlos, dentro de los sitios más notables del país para la observación de fauna; y, cómo no, una variada diversidad piscícola entre las que destacan especies como el dorado, el pacú, la palometa, el sábalo, el surubí y el blanquillo.</p>
                        <p className="h6">Toda esta fauna se completa con diferentes géneros de aves que acompasan un escenario de un tremendo interés y en estado selvático prácticamente virgen.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Pa1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">Qué es imprescindible VER y HACER en BOLIVIA. 15 Opciones INELUDIBLES ✌</h5>
                        <p class="card-text">Con este conglomerado, puede que desconcertante, la publicación pretende poner el valor los principales hitos turísticos de Pando</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Pa2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">LAGO BAY: UN MOCHILERO EXTREMO EN BOLIVIA</h5>
                        <p class="card-text">Lago Bay: Quizá esté exagerando, tanto con el título como con lo que te voy a contar, pero este tipo de destinos son de los que se deben tomar con todas las precauciones posibles, si se deciden hacer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Pa3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">COBIJA, BOLIVIA: VIAJE AL CORAZÓN DE LA AMAZONÍA</h5>
                        <p class="card-text">Una ciudad de reciente creación (1906), tanto es así que se trata del asentamiento urbano más moderno del país y que anhela a sus gloriosos tiempos pasados donde era uno de los principales núcleos económicos de la zona.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=447fTLbiogY'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Pando;