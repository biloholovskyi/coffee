import React from 'react';
import './App.sass';
import WithCoffeeService from '../hoc';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/mainPage';
import CoffeePage from '../pages/coffeePage';
import CoffeeItemPage from '../pages/coffeeItemPage';
import PleasurePage from '../pages/pleasurePage';
import ContactPage from '../pages/contactPage';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/coffee' exact component={CoffeePage}/>
        <Route path='/coffee/:id' exact component={CoffeeItemPage}/>
        <Route path='/pleasure' exact component={PleasurePage}/>
        <Route path='/contact' exact component={ContactPage}/>
      </Switch>
    </div>
  );
}

export default WithCoffeeService()(App);