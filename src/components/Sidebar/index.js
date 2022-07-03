import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';

export const Sidebar = [
    {
    title:'Início',
    path:"/home",
    icon:<AiIcons.AiOutlineHome/>,
    cName: 'nav-text'
    },
    {
    title:'Perfil',
    path:"/perfil",
    icon:<BiUserCircle/>,
    cName: 'nav-text'
    },
    {
    title:'Meus Desejos',
    path:"/meuspedidos",
    icon:<AiIcons.AiOutlineTag />,
    cName: 'nav-text'
    },
    {
    title:'Todos Desejos',
    path:"/todosdesejos",
    icon:<AiIcons.AiOutlineTags />,
    cName:'nav-text'
    },
    {
        title:'Novo Desejo',
        path:"/registerdesejos",
        icon:<AiIcons.AiOutlinePlusCircle />,
        cName:'nav-text'
    },
    {
        title:'Meus Favoritos',
        path:"/meusfavoritos",
        icon:<AiIcons.AiOutlineHeart />,
        cName:'nav-text'
    },
    {
        title:'Sair',
        path:"/",
        icon:<AiIcons.AiOutlineLogout/>,
        cName:'nav-text'
    }

]

export default Sidebar;