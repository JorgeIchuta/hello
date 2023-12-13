import React from "react";
import Logo from "../imagens/logo.png";
import Icono from "../imagens/facebook.png";
import Insta from "../imagens/insta.png";
import Twi from "../imagens/twitter.png";

const Ppagina = () =>{

    return(
        <div class="container-fluid text-center bg-dark">
            <div class="row">
                <div class="col">        
                     <img src={Logo} className="mx-2" width='200'></img>               
                </div>
                <div class="col text-white bg-dark">
                    <h5>CREDITOS DEL SITIO WEB</h5>
                    <h6>Elaboracion del sito web</h6>
                    <p>JORGE ALBERTO ICHUTA TUCO (BOLIVIA)</p>
                    <p>CI: 10037921</p>
                    <p>Materia: INF-122-WEB-"A"</p>
                    <p>Docente: Marisol Tellez R.</p>
                </div>
                <div class="col text-white bg-dark">
                    <h5>CORREO ELECTRONICO/FCPN:</h5>
                    <p>jichutat3@fcpn.edu.bo</p>   
                    <img src={Icono} className="mx-2" width='50'></img>  
                    <img src={Insta} className="mx-2" width='50'></img>   
                    <img src={Twi} className="mx-2" width='50'></img>                   
                </div>
            </div>
        </div>
    );
}
export default Ppagina;