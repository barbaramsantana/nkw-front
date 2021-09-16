import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function Login(){
    return(
        <ContainerForm>
            <Logo>NKW</Logo>
            <form action="">
                <Titulo1>Login</Titulo1>
                <br />
                <p>
                    <Label htmlFor="email">Email</Label>
                    <br />
                    <Input type="email" name="email" id="email" required="required" placeholder="Digite seu email..."/>
                </p>

                <p>
                    <Label htmlFor="password">Senha</Label>
                    <br />
                    <Input type="password" name="password" id="password" required="required" placeholder="Digite sua senha..."/>
                </p>

                <p>
                    <Link className="link-entrar" to="/meuspedidos">
                    <Button type="submit" id="password" value="Entrar"/>
                    </Link>
                </p>

                <p>
                    <Link className="link-register" to="/register" >
                    <TextoLink>
                        Criar uma conta
                        </TextoLink>
                    </Link>
                </p>

            </form>
        </ContainerForm>
    )
}
export default Login;