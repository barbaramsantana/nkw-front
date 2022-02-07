import React, {useEffect, useState} from 'react';
import {Link, withRouter, useParams} from "react-router-dom";
import { getToken } from '../../Auth';
import  Cabecalho  from '../../components/Cabecalho';
import Navbar from '../../components/Navbar';
//import Lista from '../../components/Lista';
//import { BiHeart, BiTrash } from "react-icons/bi";
import api from '../../services/api';

import {ContainerForm, Titulo1, Label, ContainerCaracteristicas, TextoLink, TextoDescricao, TextoLinkVenda } from './styled';
//import '/styled.css';

//pegar id da url
//

function DesejoGeral(){
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);
    //console.log(id);

    useEffect(()=>{
        async function loadDesejo() {
          const token = getToken();
          const response = await api.get(`/desejos/${id}`, {headers:{token:`Bearer ${token}`}});
    
          setItems(response.data.desejo);
          setUser(response.data.desejo.user);
          //console.log(response);
        }
        loadDesejo();
    },[]);
    /*async function excluirDesejo(val){
        const response = await api.delete(`/desejos/${val}`);
        console.log(response);
        window.location.reload();
    }*/
    return(
        <div>
           <Navbar></Navbar>
           <br />
            <div>
                <Titulo1>Desejo</Titulo1>
            </div>
            <br />
            <ContainerForm> 
                <div>
                <p>
                <TextoDescricao>
                    <h3>
                    Desejado por: {user.name}
                    </h3>
                    <TextoLinkVenda className="align-items-center btn btn-primary">
                    <Link style={{ textDecoration: 'none', color: "white"}} className="link-desejo" to={`/desejodevenda/${id}`}>Realize o desejo!</Link> 
                    </TextoLinkVenda>
                    <br />
                    {items.descricao}
                </TextoDescricao>          
                </p>
               <TextoLink>
                <div>
                    Características
               </div>
               <div className="row d-flex align-items-center">
                    <ContainerCaracteristicas className="mb-5 col-6 col-lg-12 com-md-12">
                        <div className="row align-items-center">
                            <TextoLink className="form-floating mb-5 col-6 col-lg-4 align-items-center">
                                Área: 
                                <Label>
                                    {items.area} 
                                </Label>
                            </TextoLink>
                        <TextoLink className="form-floating mb-5 col-6 col-lg-4 align-items-center">
                            Cozinha: 
                            <Label>
                                {items.cozinha} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Localidade: 
                            <Label>
                                {items.localidade} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Quarto: 
                            <Label>
                                {items.quarto} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Suíte: 
                            <Label>
                                {items.suite} 
                            </Label> 
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Taxa de condomínio: 
                            <Label>
                                {items.taxaCond} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Vaga de garagem: 
                            <Label>
                                {items.vagaGaragem} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 align-items-center">
                            Valor: 
                            <Label>
                                {items.valor} 
                            </Label>
                        </TextoLink>
                    </div>
                    </ContainerCaracteristicas>
                    </div>
               </TextoLink>
               </div>
            </ContainerForm>
</div>
    )}
export default DesejoGeral;