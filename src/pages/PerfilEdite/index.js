import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

function PerfilEdite(){
    return(
        <div>
            <Cabecalho></Cabecalho>
           <Link className="link-desejo" to="/perfiledite">
            <h2>    
                Editar Perfil
                </h2>
           </Link> 
            <div>
                <form action="">
                <Titulo1>Bárbara M. Santana</Titulo1>
                <br />
                <p>
                    <Label htmlFor="name">Nome</Label>
                    <br />
                    <Input type="text" name="name" id="name" required="required" placeholder="Bárbara M. Santana"/>
                </p>
                <p>
                    <Label htmlFor="email">Email</Label>
                    <br />
                    <Input type="email" name="email" id="email" required="required" placeholder="barbara@email.com"/>
                </p>

                <p>
                    <Label htmlFor="password">Senha</Label>
                    <br />
                    <Input type="password" name="password" id="password" required="required" placeholder="*******"/>
                </p>

                <p>
                    <Link className="link-entrar" to="/meuspedidos">
                    <Button type="submit" id="password" value="Editar"/>
                    </Link>
                </p>
            </form>
            </div>
</div>
    )
}
export default PerfilEdite;