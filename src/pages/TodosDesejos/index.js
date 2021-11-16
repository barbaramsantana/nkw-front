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
import Navbar from '../../components/Navbar';

function TodosDesejos(){
    const [items, setItems] = useState([]);
    const name = getName();
    useEffect(()=>{
        async function loadListDesejos() {
            try{
                const token = getToken();
                console.log(token);
                const response = await api.get('/desejos/todosdesejos',{headers:{token:`Bearer ${token}`}});
                //const response = await api.get('/desejos');
        
                setItems(response.data.desejos);
                console.log(response);
            } catch(err){
                console.error(err);
            }
        }
        loadListDesejos();
    },[]);
    return(
        <div>
            {//<Cabecalho></Cabecalho>
            }<Navbar></Navbar>
            <br />
            <div className="meus-desejos">
                <Titulo1>Meus Desejos</Titulo1>
                <br />
                <div className="group-my-desejos">
                    <Link className="link-entrar" to="/registerdesejos" style={{ textDecoration: 'none' }}>
                        <h2 className="new-desejo"><AiFillPlusCircle className="add-circle"/> Novo Desejo</h2>
                    </Link>
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


                <Link style={{ textDecoration: 'none' }} className="link-desejo" to={`/desejogeral/${items[item]._id}`}>
                    <div >
                        {//Bárbara M. S.
                        <TextoLink>{items[item].user.name}</TextoLink>
                    }
                    </div>
                    <ContainerText>{items[item].descricao}
                    </ContainerText>
                </Link>
                    <div id="icones-fav">
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
export default TodosDesejos;