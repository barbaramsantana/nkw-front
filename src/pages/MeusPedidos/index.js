import React, { useEffect, useState } from 'react';
import {Link, withRouter} from "react-router-dom";
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';
import { Titulo1, ContainerForm, ContainerCaracteristicas, ContainerDesejo, ContainerText, TextoLink } from './styled.js';
import './styled.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { BiHeart, BiTrash } from "react-icons/bi";
import api from '../../services/api';

//Falta fazer um map nos desejos
//resetar o banco para todos terem a lista de descrição
//passar id na url

function MeusPedidos(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        async function loadListDesejos() {
        const token = "teste";
        //const response = await api.get('/desejos',{headers:{token: token}});
        const response = await api.get('/desejos');

        setItems(response.data.desejos);
        console.log(items);
        }
        loadListDesejos();
    },[]);
    //const response = await api.post("/desejos");
    async function excluirDesejo(val){
        const response = await api.delete(`/desejos/${val}`);
        console.log(response);
        window.location.reload();
    }
    //console.log(response);
    return(
        <div>
            {//<Cabecalho></Cabecalho>
            }
            <div className="meus-desejos">
                <Titulo1>Meus Desejos</Titulo1>
                <div className="group-my-desejos">
                    <Link className="link-entrar" to="/registerdesejos" style={{ textDecoration: 'none' }}>
                        <h2 className="new-desejo"><AiFillPlusCircle className="add-circle"/> Novo Desejo</h2>
                    </Link>
                </div>
            </div>
            {//<Lista desejos={items}></Lista>
            }
            {//<ContainerForm>
               // <ContainerCaracteristicas>
            }
            <div className="container">
                <div className="row">
                {Object.keys(items).map( item => (
                    //<ContainerDesejo>
                    <div className="col-6 col-lg-4 com-md-6">
                        <div className="col">


                <Link style={{ textDecoration: 'none' }} className="link-desejo" to={`/desejo/${items[item]._id}`}>
                    <div >
                        {//Bárbara M. S.
                        <TextoLink>Bárbara</TextoLink>
                    }
                    </div>
                    <ContainerText>{items[item].descricao}
                    </ContainerText>
                </Link>
                    <div>
                        <BiHeart color="#BB6BD9"/> 
                        <BiTrash color="#BB6BD9" onClick={async () =>{await excluirDesejo(items[item]._id)}}/>
                        </div>
                    </div>
                    </div>
                //</ContainerDesejo>
                ))}
                </div>

            </div>
            {//</div></ContainerCaracteristicas>
        //</ContainerForm>
            }

        </div>
    )
}
export default MeusPedidos;