import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function MeusPedidos(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <div>
                <Titulo1>Meus Pedidos</Titulo1>
                <h2>Novo Pedido</h2>
            </div>
            <Lista></Lista>

</div>
    )
}
export default MeusPedidos;