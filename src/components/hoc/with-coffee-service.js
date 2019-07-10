import React from 'react';
import CoffeeDiplomaContext from '../coffee-diploma-context';

const WithCoffeeService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoffeeDiplomaContext.Consumer>
                {
                    (CoffeeService) => {
                        return <Wrapped {...props} CoffeeService={CoffeeService}/>
                    }
                }
            </CoffeeDiplomaContext.Consumer>
        )
    }
}

export default WithCoffeeService;