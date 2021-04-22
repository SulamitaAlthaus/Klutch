import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import  Home from '../views/Home';
import  FindClient from '../views/FindClient';
import  CreditCard from '../views/CreditCard';

export default function Routes(){
 return(
  <BrowserRouter>
  <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/cliente" exact component={FindClient}/>
   <Route path="/cartao" exact component={CreditCard}/>
   
  </Switch>
  </BrowserRouter>
 )
}