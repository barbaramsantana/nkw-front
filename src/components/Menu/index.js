import React from 'react';
import {Link, withRouter} from "react-router-dom";
//import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styleed.css';

function Menu(){
    return(
        <div>
            <Link className="link-desejo" to="/perfil">
               Perfil
            </Link>
            <Link className="link-meusdesejo" to="/meusdesejos">
               Meus Desejos
            </Link>
            <Link className="link-novodesejo" to="/registerdesejo">
               Novo Desejo
            </Link>
            <Link className="link-favorito" to="/meusfavoritos">
               Favorito
            </Link>
            <Link className="link-sair" to="/">
               Sair
            </Link>
        </div>
    )
}
export default Menu;