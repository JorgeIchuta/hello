import React from "react";
import Dinos from "../../imagens/dinos.jpg";
import Notas from "../Notas";

const Creditos = () => {
    return (
        <div className="container bg-body-tertiary rounded">
             <center><h1>¡¡¡CREDITOS!!!</h1></center>
             <center><p>Elaboracion del sito web</p></center>
             <center><p>JORGE ALBERTO ICHUTA TUCO </p></center>
             <center><p>CI: 10037921</p></center>
             <center><p>Materia: INF-122-WEB-"A"</p></center>
             <center><p>Docente: Marisol Tellez R.</p></center>
                <div className="row">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col col-lg-2">
                            </div>
                            <div className="col col-lg-8">
                            <img src={Dinos} className="img-thumbnail" alt="..."></img>
                            </div>
                            <div className="col col-lg-2">                       
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col col-lg-1">
                            </div>
                            <div className="col col-lg-10">
                                <p>Anota tu nombre y los lugates que te gustaria visitar  </p>
                            </div>
                            <div className="col col-lg-1">                       
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col col-lg-1">
                            </div>
                            <div className="col col-lg-10">
                                <Notas/>
                            </div>
                            <div className="col col-lg-1">                       
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default Creditos;