import React, { useEffect, useState } from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
import './styled.css';
import { AiFillPlusCircle } from "react-icons/ai";
import api from '../../services/api';

function MeusPedidos(){
    //const [adm, setAdm] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        async function loadListDesejos() {
        const token = "teste";
        //const response = await api.get('/desejos',{headers:{token: token}});
        const response = await api.get('/desejos');

        setItems(response.data.desejos);
        console.log(response);
        }
        loadListDesejos();
    },[]);
    //const response = await api.post("/desejos");
            
    //console.log(response);
    return(
        <div>
            <Cabecalho></Cabecalho>
            <div className="meus-desejos">
                <Titulo1>Meus Desejos</Titulo1>
                <div className="group-my-desejos">
                    <Link className="link-entrar" to="/registerdesejos">
                        <h2 className="new-desejo"><AiFillPlusCircle className="add-circle"/> Novo Desejo</h2>
                    </Link>
                </div>
            </div>
            {<Lista desejos={items}></Lista>
            }

</div>
    )
}
export default MeusPedidos;