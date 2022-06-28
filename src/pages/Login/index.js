import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import { Attention, Button, ContainerForm, ContainerInput, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
import './styled.css';
import api from '../../services/api';
import nkw from  '../../img/NKW.svg';
import logo from '../../img/logo.png';

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
            const response = await api.post("/auth/authenticate", {email, password});
            
            //console.log(response);
            
            login(response.data.token);
            nameuser(response.data.user.name);
            emailuser(response.data.user.email);
            iduser(response.data.user._id);
            //console.log(getToken());
            
    
            // this.props.history.push("/meuspedidos");
            this.props.history.push("/home");
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
            {//<img src={nkw} alt="nkw" className="image-logo"/>
    } <img src={logo} alt="logo nkw" className="img-fluid figure-img" width="250px"/>
            <form onSubmit={this.handleSignIn}>
                <Titulo1>Login</Titulo1>
                <br />
                <div className="form-group">
                    {this.state.error && <Attention>{this.state.error}</Attention>}
                    <label htmlFor="email" className="form-label">Email</label>
                    <Input type="email" name="email" className="form-control" id="email" required="required" placeholder="Digite seu email..." aria-describedby="email" onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <br />
                    <Input type="password" name="password" id="password" className="form-control" required="required" placeholder="Digite sua senha..." onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <br/>
                    <Button className="btn btn-primary" type="submit" id="password">Entrar</Button>

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