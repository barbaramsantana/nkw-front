import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styled.css';
import api from '../../services/api';
import nkw from  '../../img/NKW.svg';

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
            <img src={nkw} alt="nkw" className="image-logo"/>
            <form onSubmit={this.handleSignUp}>
                <Titulo1>Cadastre-se</Titulo1>
                <br />
                <p>
                    <Label htmlFor="name">Nome</Label>
                    {this.state.error && <p>{this.state.error}</p>}
                    <br />
                    <Input type="text" name="name" id="name" required="required" placeholder="Digite seu nome..." onChange={e => this.setState({name: e.target.value})}/>
                </p>
                <p>
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
}
export default withRouter(RegisterUser);