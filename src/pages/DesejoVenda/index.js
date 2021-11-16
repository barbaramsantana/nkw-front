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
          console.log(response);
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
                <TextoMensagemForm action="https://api.staticforms.xyz/submit" method="POST">
                <input type="hidden" name="accessKey" value="2a247bc9-4739-41c0-b273-f60877fc8a65"/>
                <input type="hidden" name="redirectTo" value={`http://localhost:3000/desejodevenda/${id}`}/>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Olá</label>
                    <div class="col-sm-10">
                        <input type="text" name="name" readonly class="form-control-plaintext" id="staticName" value={name}/>
                    </div>
                </div>
                <input type="hidden" name="email" readonly class="form-control-plaintext" id="staticEmail" value={`Email de: ${email}`}/>
                    <p>Que bom que está interessado(a) em tornar um dos desejos realidade!</p>
                    <p>Para isso, entre em contanto com o(a) criador(a) do desejo.</p>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                        <input type="email" name="email" readonly class="form-control-plaintext" id="staticEmail" value={user.email}/>
                    </div>
                </div>
                <input type="hidden" name="subject" readonly class="form-control-plaintext" id="staticEmail" value={`Desejo: ${id}`}/>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Se surgiu alguma dúvida entre em contanto e nos envie uma mensagem.</label>
                    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div> 

                <Button>Enviar mensagem</Button>
                </TextoMensagemForm>
                  
            </ContainerForm>
</div>
    )}
export default DesejoVenda;