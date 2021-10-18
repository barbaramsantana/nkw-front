import React, {useEffect, useState} from 'react';
import {Link, withRouter, useParams} from "react-router-dom";
import  Cabecalho  from '../../components/Cabecalho';
//import Lista from '../../components/Lista';
//import { BiHeart, BiTrash } from "react-icons/bi";
import api from '../../services/api';

import {ContainerForm, Titulo1, Label, ContainerCaracteristicas, TextoLink, TextoDescricao } from './styled';
//import '/styled.css';

//pegar id da url
//

function Desejo(){
    const {id} = useParams();
    const [items, setItems] = useState([]);
    console.log(id);

    useEffect(()=>{
        async function loadDesejo() {
          //const token = getToken();
          const response = await api.get(`/desejos/${id}`);
    
          setItems(response.data.desejo);
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
            <Cabecalho></Cabecalho>
            <div>
                <Titulo1>Desejo</Titulo1>
            </div>
            <ContainerForm>
               <TextoDescricao>
               {items.descricao}
               </TextoDescricao>
               <TextoLink>
                    Características
                    <ContainerCaracteristicas>
                        <TextoLink>
                            Area: 
                            <Label>
                                {items.area} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Cozinha: 
                            <Label>
                                {items.cozinha} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Localidade: 
                            <Label>
                                {items.localidade} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Quarto: 
                            <Label>
                                {items.quarto} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Suite: 
                            <Label>
                                {items.suite} 
                            </Label> 
                        </TextoLink>
                        <TextoLink>
                            Taxa Condominio: 
                            <Label>
                                {items.taxaCond} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Vaga de Garagem: 
                            <Label>
                                {items.vagaGaragem} 
                            </Label>
                        </TextoLink>
                        <TextoLink>
                            Valor: 
                            <Label>
                                {items.valor} 
                            </Label>
                        </TextoLink>
                    </ContainerCaracteristicas>
               </TextoLink>
               {/*<div className="ContainerAcoes">
               <BiHeart/> 
               <BiTrash onClick={async () =>{await excluirDesejo(id)}}/>
    </div>*/}
            </ContainerForm>

</div>
    )
}
export default Desejo;