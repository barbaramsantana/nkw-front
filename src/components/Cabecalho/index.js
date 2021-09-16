import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { Button, ContainerForm, ContainerHeader, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styleed.css';

function Cabecalho(){
    return(
        <ContainerHeader>
            <header>
            <Logo>  NKW</Logo>
            Detecção de Compra Inteligente 
                    Olá, Bárbara!
            </header>
        </ContainerHeader>
    )
}
export default Cabecalho;