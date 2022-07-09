import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Auth/index';
import { Desejo, DesejoGeral, DesejoVenda, Home, Login, MeusFavoritos, MeusPedidos, Perfil, PerfilEdite, RegisterDesejo, RegisterUser, TodosDesejos} from '../pages';
import { Categories } from '../components';

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
    <PrivateRoute path="/home" component={() => <Home/>}/>
    <PrivateRoute path="/categories" component={() => <Categories/>}/>
  </Switch>
  </BrowserRouter>
)
}


export default Routes;
