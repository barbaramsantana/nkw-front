import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { Button, ContainerForm, ContainerHeader, Input, Label, Logo, MenuContainer, TextoLink, Titulo1 } from './styled';
import './styled.css';
import logonkw from '../../img/NKW.svg';
import usercircle from '../../img/User_cicrle.svg';
import { HiOutlineUserCircle } from "react-icons/hi";
import Menu from '../Menu';
import { getName } from '../../Auth';

function Cabecalho(){
    const name = getName();
    return(
        <ContainerHeader>
            <header className="titulo">
            <img className="logonkw" src={logonkw} alt="logonkw" />
            <div className="name-menu">
                {//<HiOutlineUserCircle className="icone-perfil" width="2000px" height="2000px" /> 
                    <img className="icone-perfil" src={usercircle} alt="icone-perfil" />
                }
                <MenuContainer className="description-menu">
                    Olá, {name}!
                    <Menu/>
                </MenuContainer>
            </div>
            {
            /*
            <nav class="navbar navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img className="logonkw" src={logonkw} alt="logonkw" className="figure-img img-fluid"/>. Detecção de Compra Inteligente</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                {//<span class="navbar-toggler-icon"></span>
                //<HiOutlineUserCircle className="icone-perfil" width="2000px" height="2000px" /> 
                }
                    <img className="icone-perfil" src={usercircle} alt="icone-perfil" />
                    <div className="description-menu">
                        Olá, Bárbara!
                    </div>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">NKW</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
            */}

            </header>
            </ContainerHeader>
    )
}
export default Cabecalho;