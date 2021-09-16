import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function RegisterUser(){
    return(
        <ContainerForm>
            <Logo>NKW</Logo>
            <form action="">
                <Titulo1>Cadastre-se</Titulo1>
                <br />
                <p>
                    <Label htmlFor="name">Nome</Label>
                    <br />
                    <Input type="text" name="name" id="name" required="required" placeholder="Digite seu nome..."/>
                </p>
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
                    <Button type="submit" id="password" value="Cadastrar"/>
                </p>

                <p>
                    <Link className="link-login" to="/">
                    <TextoLink>
                        Já tenho uma conta
                        </TextoLink>
                    </Link>
                </p>

            </form>
        </ContainerForm>
    )
}
export default RegisterUser;