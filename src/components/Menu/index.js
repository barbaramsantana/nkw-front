import React from 'react';
import { AiFillPlusCircle, AiOutlineHeart, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineSolution, AiOutlineTag, AiOutlineTags } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import {Link, withRouter} from "react-router-dom";
import { ContainerMenu } from './styled';
//import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styleed.css';

function Menu(){
    return(
        <div>
           <ContainerMenu>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-desejo" to="/perfil">
            <BiUserCircle size="1em" color="#8F9BB3"/> Perfil 
            </Link>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-meusdesejo" to="/meuspedidos">
            <AiOutlineTag size="1em" color="#8F9BB3"/> Meus Desejos 
            </Link>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-novodesejo" to="/todosdesejos">
            <AiOutlineTags size="1em" color="#8F9BB3"/> Todos Desejos 
            </Link>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-novodesejo" to="/registerdesejos">
            <AiFillPlusCircle size="1em" color="#8F9BB3"/> Novo Desejo 
            </Link>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-favorito" to="/meusfavoritos">
            <AiOutlineHeart size="1em" color="#8F9BB3"/> Favorito 
            </Link>
            <Link style={{textDecoration: 'none', color: '#8F9BB3'}} className="link-sair" to="/">
            <AiOutlineLogout size="1em" color="#8F9BB3"/> Sair 
            </Link>
            </ContainerMenu>
        </div>
    )
}
export default Menu;