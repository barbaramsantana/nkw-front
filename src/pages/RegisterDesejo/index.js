import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function RegisterDesejo(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <h2>    
                Cadastro de novo desejo
                </h2>
            <div>
                <form action="">
                <br />
                <p>
                    <Label htmlFor="name">Descrição do  desejo</Label>
                    <br />
                    <Input type="text" name="name" id="name" required="required" placeholder="Descreva seu desejo..."/>
                </p>
                <div>
                    Preencha com as caractetísticas que deseja:
                </div>
                <p>
                <Label htmlFor="password">Quarto</Label>
                    <br />
                <select name="select">
                <option value="valor1" selected>1</option>
                <option value="valor2">2</option>
                <option value="valor3">3</option>
                </select>
                </p>
                <p>
                <Label htmlFor="password">Suite</Label>
                    <br />
                <select name="select">
                <option value="valor1" selected>1</option>
                <option value="valor2">2</option>
                <option value="valor3">3</option>
                </select>
                </p>
                <p>
                    <Label htmlFor="email">Valor</Label>
                    <br />
                    <Input type="value" name="value" id="value" required="required" placeholder="R$"/>
                </p>
                <p>
                <Label htmlFor="password">Cozinha</Label>
                    <br />
                <select name="select">
                <option value="valor1" selected>1</option>
                <option value="valor2">2</option>
                <option value="valor3">3</option>
                </select>
                </p>
                <p>
                    <Label htmlFor="password">Local</Label>
                    <br />
                    <Input type="text" name="text" id="text" required="required" placeholder="Bairro, cidade..."/>
                </p>
                <p>
                    <Link className="link-entrar" to="/meuspedidos">
                    <Button type="submit" id="password" value="Cadastrar"/>
                    </Link>
                </p>
            </form>
            </div>
</div>
    )
}
export default RegisterDesejo;