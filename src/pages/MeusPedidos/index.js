import React, { useEffect, useState } from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Titulo1, ContainerForm, ContainerCaracteristicas, ContainerDesejo, ContainerText, TextoLink } from './styled.js';
import './styled.css';
import { AiFillHeart, AiFillPlusCircle, AiOutlineHeart } from "react-icons/ai";
import { BiHeart, BiTrash } from "react-icons/bi";
import api from '../../services/api';
import { getToken } from '../../Auth/index';
import { getName } from '../../Auth/index';
import axios from 'axios';
import Navbar from '../../components/Navbar/index'; 

function MeusPedidos(){
    const [items, setItems] = useState([]);
    const name = getName();
    useEffect(()=>{
        async function loadListDesejos() {
            try{
                const token = getToken();
                console.log(token);
                const response = await api.get('/desejos',{headers:{token:`Bearer ${token}`}});
                //const response = await api.get('/desejos');
        
                setItems(response.data.desejos);
                console.log(response);
            } catch(err){
                console.error(err);
            }
        }
        loadListDesejos();
    },[]);
    //const response = await api.post("/desejos");
    async function excluirDesejo(val){
        try{
            const token = getToken();
            const response = await api.delete(`/desejos/${val}`, {headers:{token:`Bearer ${token}`}});
            console.log(response);
            window.location.reload();

        } catch(err){
            console.error(err);
        }
    }
    async function isFavorito(id, val){
        if(val == 1){
            try{
                const token = getToken();
                const data = {"favorito": 0};
                const response = await api.put(`/desejos/favorito/${id}`, data,{headers:{token:`Bearer ${token}`}});
                console.log(response);
                window.location.reload();
    
            } catch(err){
                console.error(err);
            } 
        }else{
            try{
                const token = getToken();
                const data = {"favorito": 1};
                const response = await api.put(`/desejos/favorito/${id}`, data,{headers:{token:`Bearer ${token}`}});
                console.log(response);
                window.location.reload();
    
            } catch(err){
                console.error(err);
            }  
        }
    }
    return(
        <div>
            {//<Cabecalho></Cabecalho>
            <Navbar></Navbar>
        }
        <br />
            <div className="meus-desejos">
                <Titulo1>Desejos</Titulo1>
                <br />
                <div className="group-my-desejos">
                   { /*<Link className="link-entrar" to="/registerdesejos" style={{ textDecoration: 'none' }}>
                        <h2 className="new-desejo"><AiFillPlusCircle className="add-circle"/> Novo Desejo</h2>
                    </Link>*/
}
                </div>
            </div>
            {//<Lista desejos={items}></Lista>
            <ContainerForm>
            <div className="container">
                <div className="row">
                {Object.keys(items).map( item => (
                    //<ContainerDesejo>
                    <ContainerDesejo className="col-6 col-lg-4 com-md-6">
                        <div className="col">


                <Link style={{ textDecoration: 'none' }} className="link-desejo" to={`/desejo/${items[item]._id}`}>
                    <div >
                        {//Bárbara M. S.
                        <TextoLink>{name}</TextoLink>
                    }
                    </div>
                    <ContainerText>{items[item].descricao
                    }
                    </ContainerText>
                </Link>
                    <div id="icones-fav">
                        {/*isFavorito(items[item].favorito)*/}
                        {items[item].favorito == 1 && ( 
                            <AiFillHeart color="#BB6BD9" onClick={async () =>{await isFavorito(items[item]._id, items[item].favorito)}}/>
                        )}
                        {items[item].favorito == 0 && (
                            <AiOutlineHeart color="#BB6BD9" onClick={async () =>{await isFavorito(items[item]._id, items[item].favorito)}}/>
                        )}
                        <BiTrash color="#BB6BD9" onClick={async () =>{await excluirDesejo(items[item]._id)}}/>
                    </div>
                    </div>
                    </ContainerDesejo>
                ))}
                </div>

            </div>
            </ContainerForm>
            }

        </div>
    )
}
export default MeusPedidos;