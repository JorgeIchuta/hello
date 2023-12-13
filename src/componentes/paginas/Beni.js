import React from "react";
import Ben from "../../imagens/beni.jpg"
import Be1 from "../../imagens/be1.jpg"
import Be2 from "../../imagens/be2.jpg"
import Be3 from "../../imagens/b3.jpg"
import ReactPlayer from 'react-player';

const Beni = () => {
    return (
        <div className="container bg-body-tertiary rounded">
            <center><h1>BENI</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2">
                        </div>
                        <div className="col col-lg-8">
                        <img src={Ben} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="col col-lg-2">                       
                        </div>
                    </div>
                </div>
            </div>


            <center><h1>TURISMO EN BENI</h1></center>
            <div className="row">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col col-lg-1">
                        </div>
                        <div className="col col-lg-10">
                        <p className="h6">El turismo en Beni tiene un crecimiento destacado auspiciapo por los numerosos atractivos naturales de este departamento. Iniciamos una caminata por los más significativos atractivos de esta región, los lugares turísticos de Beni más notorios.</p>
                        <p className="h6">Es uno de los nueve departamentos de Bolivia, referencia nacional del turismo boliviano ayudado por sus atractivos naturales.</p>
                        <p className="h3">¿CUÁLES SON LOS LUGARES TURÍSTICOS DE POTOSÍ IMPORTANTES?</p>
                        <p className="h6">Te sugerimos esta lista de sitios para conocer los principales atractivos del turismo en el departamento de Beni.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Be1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">PAMPAS DEL YACUMA: TERRITORIO INEXPLORADO</h5>
                        <p class="card-text">Pampas del Yacuma: fantasea con un espacio protegido, el mayor de Bolivia, o… quizá del mundo, esos de los que tanto te escribo y que son una hemorragia de biodiversidad; incontrolable por extensión (más de 616.000 hectáreas)</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Be2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">TIPS DE VISITA A TRINIDAD, CAPITAL DEL DEPARTAMENTO DE BENI</h5>
                        <p class="card-text">Trinidad: Una tierra maltratada muchas veces por la perversidad climática, en forma de inundaciones; tales como como las que hace no mucho azotaron una de esas tierras benianas que me acogieron durante un tiempo, Rurrenabaque.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Be3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">Qué es imprescindible VER y HACER en BOLIVIA. 15 Opciones INELUDIBLES ✌</h5>
                        <p class="card-text">Son recomendaciones con los lugares más importantes a visitar en Beni y donde localizarás información sobre este departamento.</p>
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
                        <p className="h6">Son recomendaciones con los lugares más importantes a visitar en Beni y donde localizarás información sobre este departamento.</p>
                        <p className="h3">IMÁGENES-FOTOS DE BENI</p>
                        <p className="h6">Fotos del departamento de Beni  que servirán para que tengas una primera toma de contacto con el lugar.</p>
                        </div>
                        <div className="col col-lg-1">                       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card-group">
                    <div class="card">
                        <img src={Be1} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">PAMPAS DEL YACUMA: TERRITORIO INEXPLORADO</h5>
                        <p class="card-text">Pampas del Yacuma: fantasea con un espacio protegido, el mayor de Bolivia, o… quizá del mundo, esos de los que tanto te escribo y que son una hemorragia de biodiversidad; incontrolable por extensión (más de 616.000 hectáreas)</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Be2} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">TIPS DE VISITA A TRINIDAD, CAPITAL DEL DEPARTAMENTO DE BENI</h5>
                        <p class="card-text">Trinidad: Una tierra maltratada muchas veces por la perversidad climática, en forma de inundaciones; tales como como las que hace no mucho azotaron una de esas tierras benianas que me acogieron durante un tiempo, Rurrenabaque.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Be3} class="card-img-top" alt="..." style={{height: "250px", width: "370px"}}></img>
                        <div class="card-body">
                        <h5 class="card-title">Qué es imprescindible VER y HACER en BOLIVIA. 15 Opciones INELUDIBLES ✌</h5>
                        <p class="card-text">Son recomendaciones con los lugares más importantes a visitar en Beni y donde localizarás información sobre este departamento.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                </div>
                <div class="col">   
                    <ReactPlayer url='https://www.youtube.com/watch?v=vu9Xz9HSboo'style={{textAlign: "center"}} />                  
                </div>
                <div class="col">                       
                </div>
            </div>

        </div>
    );
}

export default Beni;