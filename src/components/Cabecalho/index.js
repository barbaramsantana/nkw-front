import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { Button, ContainerForm, ContainerHeader, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
import './styled.css';
import logonkw from '../../img/Logo.svg';
import usercircle from '../../img/User_cicrle.svg';
import { HiOutlineUserCircle } from "react-icons/hi";

function Cabecalho(){
    return(
        <ContainerHeader>
            <header className="titulo">
            <img className="logonkw" src={logonkw} alt="logonkw" />
            <div className="name-menu">
                {//<HiOutlineUserCircle className="icone-perfil" width="2000px" height="2000px" /> 
                    <img className="icone-perfil" src={usercircle} alt="icone-perfil" />
                }
                <div className="description-menu">
                    Olá, Bárbara!
                </div>
            </div>
            </header>
        </ContainerHeader>
    )
}
export default Cabecalho;