import React from 'react';
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { Card } from 'react-bootstrap';

import './styled.css';
import imovel from '../../img/imovel-exemplo.jpg';


const Cards = () => {
    return (
        <>
            <Card className="card">
                <Card.Img className="p-2 m-0" variant="top" src={imovel} />
                <Card.Body className="p-0 m-0">

                <Card.Title className="m-0 p-1">
                    <div className="card-title" >
                        Casa em Barra dos Coqueiros com piscina
                    </div>
                </Card.Title>

                <div className="card-icons">
                <AiFillHeart size="1.2rem" color="#BB6BD9" style={{ cursor: "pointer" }} />
                <BiTrash size="1.2rem" color="#BB6BD9" style={{ cursor: "pointer" }} />
                <AiOutlineEye size="1.5rem" color="#BB6BD9" style={{ cursor: "pointer" }} />
                </div>

                </Card.Body>
            </Card >

            {/* <ContainerDesejo>
                <img className="img" src={imovel} />
                <label className="card-title">
                    Casa</label>
            </ContainerDesejo> */}

        </>
    )
}

export default Cards;