import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
//import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function Perfil(){
    return(
        <div>
            <Cabecalho></Cabecalho>
           <Link className="link-desejo" to="/perfiledite">
            <h2>    
                Editar Perfil
                </h2>
           </Link> 
            <div>
                <div>
                    <img src="" alt="" />
                    <h1>Bárbara M. Santana</h1>
                </div>
                <div className="ContainerDados">
                <h3>
                    barbara@email.com
                </h3>
                    <h3>
                        Possui 9 pedidos
                    </h3>
                </div>
            </div>
</div>
    )
}
export default Perfil;