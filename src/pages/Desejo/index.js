import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
//import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function Desejo(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <div>
                <h1>Desejo</h1>
            </div>
            <div className="ContainerDesejo">
               <div className="ContainerDescricao">
                   Apartamento em Aracaju
               </div>
               <div className="ContainerCaracteristicas">
                    Características
                    <div>
                        Quarto 2
                        Suite 2
                        Cozinha 2
                        Local Jardins, Aracaju
                        Valor R$ 400.000
                    </div>
               </div>
               <div className="ContainerAcoes">
                   Favoritar
               </div>
            </div>

</div>
    )
}
export default Desejo;