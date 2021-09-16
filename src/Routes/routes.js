import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Desejo from '../pages/Desejo';
import Login from '../pages/Login';
import MeusFavoritos from '../pages/MeusFavoritos';
import MeusPedidos from '../pages/MeusPedidos';
import Perfil from '../pages/Perfil';
import PerfilEdite from '../pages/PerfilEdite';
import RegisterDesejo from '../pages/RegisterDesejo';
import RegisterUser from '../pages/RegisterUser';


const Routes = () =>{
return(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={RegisterUser} />
    <Route path="/meuspedidos" component={MeusPedidos}/>
    <Route path="/desejo" component={Desejo}/>
    <Route path="/perfil" component={Perfil}/>
    <Route path="/perfiledite" component={PerfilEdite}/>
    <Route path="/meusfavoritos" component={MeusFavoritos}/>
    <Route path="/registerdesejos" component={RegisterDesejo}/>
  </BrowserRouter>
)
}


export default Routes;
