import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import { Attention, Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
import './styled.css';
import api from '../../services/api';
import nkw from  '../../img/NKW.svg';

import {emailuser, login, nameuser, iduser} from "../../Auth/index";

class Login extends Component{
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
          try {
            const datas = {
              "email": email,
              "password": password
            }
            const response = await api.post("/auth/authenticate", datas);
            
            console.log(response);
            
            //login(response.data.token);
            //nameuser(response.data.user.name);
            //emailuser(response.data.user.email);
            //iduser(response.data.user._id);
            
    
            this.props.history.push("/meuspedidos");
          } catch (err) {
            console.log(err);
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais."
            });
          }
        }
      };
    render(){
    return(
        <ContainerForm>
            <img src={nkw} alt="nkw" className="image-logo"/>
            <form onSubmit={this.handleSignIn}>
                <Titulo1>Login</Titulo1>
                <br />
                <p>
                    {this.state.error && <Attention>{this.state.error}</Attention>}
                    <Label htmlFor="email">Email</Label>
                    <br />
                    <Input type="email" name="email" id="email" required="required" placeholder="Digite seu email..." onChange={e => this.setState({email: e.target.value})}/>
                </p>

                <p>
                    <Label htmlFor="password">Senha</Label>
                    <br />
                    <Input type="password" name="password" id="password" required="required" placeholder="Digite sua senha..." onChange={e => this.setState({password: e.target.value})}/>
                </p>

                <p>
                    <Button type="submit" id="password" value="Entrar"/>
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
}
export default withRouter(Login);