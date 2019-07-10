import React, {Component} from 'react';

class MainBlock extends Component {
    render() {
        const {items, Component} = this.props;
        return items.map(item => {
            const length = 8;
            const allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const allSymbolsLength = allSymbols.length;
            let newId = '';
    
            for ( var i = 0; i < length; i++ ) {
                newId += allSymbols.charAt(Math.floor(Math.random() * allSymbolsLength));
            }
            return <Component
            key={newId}
            item={item}/>
        })
    }
}

export default MainBlock;