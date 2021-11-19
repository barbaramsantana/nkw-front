import React from 'react';
import { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import { getToken } from '../../Auth';
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { Button, ContainerCaracteristicas, ContainerForm, Input, InputDescription, Label, Logo, NewCadastroTitle, TextoLink, Titulo1 } from './styled';
//import '/styled.css';

class RegisterDesejo extends Component{
    state ={
        descricao: "",
        quarto: 0,
        suite: 0,
        cozinha: 0,
        localidade: "",
        area: 0,
        vagaGaragem: 0,
        valor: 0,
        taxaCond: 0,
        favorito: 0,
        error: ""
      };
      handleSignUp = async e => {
        e.preventDefault();
        const token = getToken();
        const { descricao, quarto, suite, cozinha, localidade, area, vagaGaragem, valor, taxaCond, favorito} = this.state;
        if (!descricao || !quarto || !suite || !cozinha || !localidade || !area || !vagaGaragem || !valor || !taxaCond) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            const data = {
                "descricao": descricao,
                "quarto": quarto,
                "suite": suite,
                "cozinha": cozinha,
                "localidade": localidade,
                "area": area,
                "vagaGaragem": vagaGaragem,
                "valor": valor,
                "taxaCond": taxaCond,
                "favorito": favorito
            }
            await api.post("/desejos", data, {headers:{token:`Bearer ${token}`}});
            this.props.history.push("/meuspedidos");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar seu desejo." });
          }
        }
      };
    render(){
    return(
        <div>
                <Navbar></Navbar>
            <NewCadastroTitle>    
                <br />
                Cadastro de novo desejo
                </NewCadastroTitle>
                <br />
            <ContainerForm>
            <div>
                <form onSubmit={this.handleSignUp}>
                <br />
                <p>
                    <Label htmlFor="name">Descrição do  desejo*</Label>
                    <br />
                    <InputDescription type="text" name="name" id="name" required="required" placeholder="Descreva seu desejo..." onChange={e => this.setState({descricao: e.target.value})}/>
                </p>
                <div>
                    <Label>Preencha com as caractetísticas que deseja:</Label>
                </div>
                <div className="row d-flex align-items-center">
                <ContainerCaracteristicas className="mb-3 col">
                    <div className="row">

                <div className="form-floating mb-3 col-3">
                    <Input type="number" className="form-control" min="0" name="quarto" id="quarto" required="required" placeholder="Numero de quartos..." onChange={e => this.setState({quarto: e.target.value})}/>
                    <Label htmlFor="quarto">Quarto*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" min="0" name="suite" id="suite" required="required" placeholder="Numero de suites..." onChange={e => this.setState({suite: e.target.value})}/>
                    <Label htmlFor="suite">Suíte*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" name="value" id="value" required="required" placeholder="R$" onChange={e => this.setState({valor: e.target.value})}/>
                    <Label htmlFor="email">Valor*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" min="0" name="cozinha" id="cozinha" required="required" placeholder="Numero de cozinhas..." onChange={e => this.setState({cozinha: e.target.value})}/>
                    <Label htmlFor="cozinha">Cozinha*</Label>
                </div>

                <div className="form-floating mb-3 col-6">
                    <Input className="form-control" type="text" name="text" id="text" required="required" placeholder="Bairro, cidade..." onChange={e => this.setState({localidade: e.target.value})}/>
                    <Label htmlFor="local">Local*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" min="0" name="area" id="area" required="required" placeholder="Valor da área..." onChange={e => this.setState({area: e.target.value})}/>
                    <Label htmlFor="area">Área*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" min="0" name="garagem" id="garagem" required="required" placeholder="Número de vagas de garagem..." onChange={e => this.setState({vagaGaragem: e.target.value})}/>
                    <Label htmlFor="area">Vaga de garagem*</Label>
                </div>

                <div className="form-floating mb-3 col-3">
                    <Input className="form-control" type="number" name="condominio" id="condominio" required="required" placeholder="Valor da taxa de condomínio..." onChange={e => this.setState({taxaCond: e.target.value})}/>
                    <Label htmlFor="area">Taxa de condomínio*</Label>
                </div>
                </div>
                </ContainerCaracteristicas>
                </div>
                <p className="align-items-center">
                    <Button className="btn btn-primary" type="submit" id="password"></Button>
                </p>
            </form>
            </div>
            </ContainerForm>
</div>
    )
}
}
export default withRouter(RegisterDesejo);