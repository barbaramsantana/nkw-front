import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';

export const Sidebar = [
    {
    title:'Perfil',
    path:"/perfil",
    icon:<BiUserCircle/>,
    cName: 'nav-text'
    },
    {
    title:'Meus Desejos',
    path:"/meuspedidos",
    icon:<IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title:'Todos Desejos',
    path:"/todosdesejos",
    icon:<FaIcons.FaCartPlus />,
    cName:'nav-text'
    },
    {
        title:'Meus Favoritos',
        path:"/meusfavoritos",
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Novo Desejo',
        path:"/registerdesejos",
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    }

]
/*<PrivateRoute path="/meuspedidos" component={() => <MeusPedidos/>}/>
    <PrivateRoute path="/desejo/:id" component={() => <Desejo/>}/>
    <PrivateRoute path="/desejogeral/:id" component={() => <DesejoGeral/>}/>
    <PrivateRoute path="/perfil" component={() => <Perfil/>}/>
    <PrivateRoute path="/perfiledite" component={() => <PerfilEdite/>}/>
    <PrivateRoute path="/meusfavoritos" component={() => <MeusFavoritos/>}/>
    <PrivateRoute path="/registerdesejos" component={() => <RegisterDesejo/>}/>
    <PrivateRoute path="/todosdesejos" component={() => <TodosDesejos/>}/>*/ 

export default Sidebar;