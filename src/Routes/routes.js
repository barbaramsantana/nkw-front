import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Auth/index';
import Desejo from '../pages/Desejo';
import DesejoGeral from '../pages/DesejoGeral';
import DesejoVenda from '../pages/DesejoVenda';
import Login from '../pages/Login';
import MeusFavoritos from '../pages/MeusFavoritos';
import MeusPedidos from '../pages/MeusPedidos';
import Perfil from '../pages/Perfil';
import PerfilEdite from '../pages/PerfilEdite';
import RegisterDesejo from '../pages/RegisterDesejo';
import RegisterUser from '../pages/RegisterUser';
import TodosDesejos from '../pages/TodosDesejos';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () =>{
return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={() => <Login/>} />
    <Route path="/register" component={() => <RegisterUser/>} />
    <PrivateRoute path="/meuspedidos" component={() => <MeusPedidos/>}/>
    <PrivateRoute path="/desejo/:id" component={() => <Desejo/>}/>
    <PrivateRoute path="/desejogeral/:id" component={() => <DesejoGeral/>}/>
    <PrivateRoute path="/perfil" component={() => <Perfil/>}/>
    <PrivateRoute path="/perfiledite" component={() => <PerfilEdite/>}/>
    <PrivateRoute path="/meusfavoritos" component={() => <MeusFavoritos/>}/>
    <PrivateRoute path="/registerdesejos" component={() => <RegisterDesejo/>}/>
    <PrivateRoute path="/todosdesejos" component={() => <TodosDesejos/>}/>
    <PrivateRoute path="/desejodevenda/:id" component={() => <DesejoVenda/>}/>
  </Switch>
  </BrowserRouter>
)
}


export default Routes;
