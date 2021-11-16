import React, {useEffect, useState} from 'react';
import {Link, withRouter, useParams} from "react-router-dom";
import { getToken } from '../../Auth';
import  Cabecalho  from '../../components/Cabecalho';
import Navbar from '../../components/Navbar';
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
          const token = getToken();
          const response = await api.get(`/desejos/${id}`, {headers:{token:`Bearer ${token}`}});
    
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
           { //<Cabecalho></Cabecalho>
           <Navbar></Navbar>
           }
           <br />
            <div>
                <Titulo1>Meu Desejo</Titulo1>
                <br />
            </div>
            <ContainerForm> 
                <div>
                <p>
                <TextoDescricao className="textdescription">
                {items.descricao
                }
                </TextoDescricao>          
                </p>
               <TextoLink>
                <div>
                    Características
                
               </div>
               <div className="row d-flex text-center">
                    <ContainerCaracteristicas className="mb-5 col-6 col-lg-12 com-md-12 text-center">
                        <div className="row text-center">
                            <TextoLink className="form-floating mb-5 col-6 col-lg-4 text-center">
                                Area:
                                
                                <Label>
                                    {items.area
                                    } 
                                </Label>
                            </TextoLink>
                        <TextoLink className="form-floating mb-5 col-6 col-lg-4 text-center">
                            Cozinha:
                            
                            <Label>
                                {items.cozinha} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
                           Localidade: 
                           
                            <Label>
                                {items.localidade
                                } 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
                           Quarto: 
                           
                            <Label>
                                {items.quarto
                                } 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
                            Suite:
                            
                            <Label>
                                {items.suite} 
                            </Label> 
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
                            Taxa Condominio: 
                            
                            <Label>
                                {items.taxaCond
                                } 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
                            Vaga de Garagem: 
                            
                            <Label>
                                {items.vagaGaragem} 
                            </Label>
                        </TextoLink>
                        <TextoLink className="form-floating mb-3 col-6 col-lg-4 text-center">
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
export default Desejo;