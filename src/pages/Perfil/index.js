import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { getEmail, getName } from '../../Auth';
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { BiUserCircle } from 'react-icons/bi';

import {ContainerForm} from './styled';
//import '/styled.css';

function Perfil(){
    const name = getName();
    const email = getEmail();
    return(
        <div>
            <Cabecalho></Cabecalho>
           {/*<Link className="link-desejo" to="/perfiledite">
            <h2>    
                Editar Perfil
                </h2>
           </Link> 
    */}
            <ContainerForm>
                <div>
                    <BiUserCircle size="4em" color="#8F9BB3"/>
                    <h1>{name}</h1>
                </div>
                <div className="ContainerDados">
                <h3>
                    {email}
                </h3>
                </div>
            </ContainerForm>
</div>
    )
}
export default Perfil;