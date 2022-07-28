import React, { Component, useState } from 'react';
import { withRouter } from "react-router-dom";
import { InputGroup, Form, Button } from 'react-bootstrap';
import { AiOutlineFileImage } from 'react-icons/ai';
import './styled.css';
import { getToken } from '../../Auth';
import api from '../../services/api';
import Navbar from '../../components/Navbar';
import { SubmitButton, ContainerCaracteristicas, ContainerForm, Input, InputDescription, Label, NewCadastroTitle } from './styled';


// class RegisterDesejo extends Component {
const RegisterDesejo = () => {

    const state = {
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

    const handleSignUp = async e => {
        e.preventDefault();
        const token = getToken();
        const { descricao, quarto, suite, cozinha, localidade, area, vagaGaragem, valor, taxaCond, favorito } = this.state;
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
                    "favorito": favorito,
                    // Inserir imagem aqui?
                }
                await api.post("/desejos", data, { headers: { token: `Bearer ${token}` } });
                this.props.history.push("/meuspedidos");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar seu desejo." });
            }
        }
    };

    /* const [image, setImage] = useState('');
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const uploadmage = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const headers = {
            'headers' = {
                'Content-Type': 'application/json'
            }
        }

        await api.post("/upload-image", formData, headers)
            .then((response) => {
                setStatus({

                }
                )
            }
            )
    } */

    return (
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
                            <InputDescription type="text" name="name" id="name" required="required" placeholder="Descreva seu desejo..." onChange={e => this.setState({ descricao: e.target.value })} />
                        </p>
                        <div>
                            <Label>Preencha com as caractetísticas que deseja:</Label>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <ContainerCaracteristicas className="mb-3 col">
                                <div className="row">

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input type="number" className="form-control" min="0" name="quarto" id="quarto" required="required" placeholder="Numero de quartos..." onChange={e => this.setState({ quarto: e.target.value })} />
                                        <Label htmlFor="quarto">Quarto*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" min="0" name="suite" id="suite" required="required" placeholder="Numero de suites..." onChange={e => this.setState({ suite: e.target.value })} />
                                        <Label htmlFor="suite">Suíte*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" name="value" id="value" required="required" placeholder="R$" onChange={e => this.setState({ valor: e.target.value })} />
                                        <Label htmlFor="email">Valor*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" min="0" name="cozinha" id="cozinha" required="required" placeholder="Numero de cozinhas..." onChange={e => this.setState({ cozinha: e.target.value })} />
                                        <Label htmlFor="cozinha">Cozinha*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-8 com-md-6">
                                        <Input className="form-control" type="text" name="text" id="text" required="required" placeholder="Bairro, cidade..." onChange={e => this.setState({ localidade: e.target.value })} />
                                        <Label htmlFor="local">Local*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" min="0" name="area" id="area" required="required" placeholder="Valor da área..." onChange={e => this.setState({ area: e.target.value })} />
                                        <Label htmlFor="area">Área*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" min="0" name="garagem" id="garagem" required="required" placeholder="Número de vagas de garagem..." onChange={e => this.setState({ vagaGaragem: e.target.value })} />
                                        <Label htmlFor="area">Vaga de garagem*</Label>
                                    </div>

                                    <div className="form-floating mb-3 col-10 col-lg-4 com-md-6">
                                        <Input className="form-control" type="number" name="condominio" id="condominio" required="required" placeholder="Valor da taxa de condomínio..." onChange={e => this.setState({ taxaCond: e.target.value })} />
                                        <Label htmlFor="area">Taxa de condomínio*</Label>
                                    </div>
                                    <div className="form-floating mb-3 col-10 com-md-6 col-lg-3">
                                        <InputGroup className="mb-3">
                                            <Input className="form-control" type="" name="referencia" id="referencia" required="required" placeholder="Produto semelhante" />
                                            {/* <button className="btn-upload" variant="outline-secondary" id="button-addon2"> */}
                                            <button className="btn-upload">
                                                <AiOutlineFileImage />
                                            </button>
                                        </InputGroup>
                                    </div>
                                </div>
                            </ContainerCaracteristicas>
                        </div>
                        <p className="align-items-center">
                            <SubmitButton className="btn btn-primary" type="submit" id="password"></SubmitButton>
                        </p>
                    </form >
                </div >
            </ContainerForm >
        </div >
    )
}
export default RegisterDesejo;