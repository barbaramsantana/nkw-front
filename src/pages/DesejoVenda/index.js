import React, {useEffect, useState} from 'react';
import {Link, withRouter, useParams} from "react-router-dom";
import { getEmail, getName, getToken } from '../../Auth';
import  Cabecalho  from '../../components/Cabecalho';
import Navbar from '../../components/Navbar';
//import Lista from '../../components/Lista';
//import { BiHeart, BiTrash } from "react-icons/bi";
import api from '../../services/api';

import {ContainerForm, Titulo1, Label, ContainerCaracteristicas, TextoLink, TextoDescricao, TextoMensagem, TextoMensagemForm, Button } from './styled';
//import '/styled.css';

//pegar id da url
//

function DesejoVenda(){
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);
    const name = getName();
    const email = getEmail();

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
                    <p>Olá, {name}</p>
                    <p>Que bom que está interessado(a) em tornar um dos desejos realidade!</p>
                    <p>Para isso, entre em contanto com o(a) criador(a) do desejo.</p>
                    <p>Email: {user.email} </p>              
            </ContainerForm>
</div>
    )}
export default DesejoVenda;