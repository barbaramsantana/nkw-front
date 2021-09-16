import React from 'react';
import {Link, withRouter} from "react-router-dom";
//import { Button, ContainerForm, Input, Label, Logo, TextoLink, Titulo1 } from './styled';
//import '/styleed.css';

function Lista(){
    return(
        <div>
            <Link className="link-desejo" to="/desejo">
                <div >
                    <img src="" alt="" />
                    Bárbara M. S.
                </div>
                <div>Apartamento em Aracaju</div>
                <div>
                    like comentario apagar ver
                </div>
            </Link>
        </div>
    )
}
export default Lista;