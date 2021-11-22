import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ContainerForm, ContainerInput, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';
import api from '../../services/api';
import nkw from  '../../img/NKW.svg';
import logo from '../../img/logo.png';

class RegisterUser extends Component{
    state ={
        name: "",
        email: "",
        password: "",
        error: ""
      };
      handleSignUp = async e => {
        e.preventDefault();
        //const token = getToken();
        const { name, email, password } = this.state;
        if (!name || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            const data = {
              "email": email,
              "name": name,
              "password": password,
            }
            await api.post("/auth/register", data);
            this.props.history.push("/meuspedidos");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
          }
        }
      };
    render(){
    return(
        <ContainerForm>
            <img src={logo} alt="logo nkw" className="img-fluid figure-img" width="250px"/>
            <form onSubmit={this.handleSignUp}>
                <Titulo1>Cadastre-se</Titulo1>
                <br />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    {this.state.error && <p>{this.state.error}</p>}
                    <br />
                    <ContainerInput>
                    <Input className="form-control" type="text" name="name" id="name" required="required" placeholder="Digite seu nome..." onChange={e => this.setState({name: e.target.value})}/>
                    </ContainerInput>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" >Email</label>
                    <br />
                    <ContainerInput>
                    <Input className="form-control" type="email" name="email" id="email" required="required" placeholder="Digite seu email..." onChange={e => this.setState({email: e.target.value})}/>
                    </ContainerInput>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Senha</label>
                    <br />
                    <ContainerInput>
                    <Input className="form-control" type="password" name="password" id="password" required="required" placeholder="Digite sua senha..." onChange={e => this.setState({password: e.target.value})}/>
                    </ContainerInput>
                </div>

                    <Button className="btn btn-primary" type="submit" id="password">Cadastrar</Button>

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
}
export default withRouter(RegisterUser);