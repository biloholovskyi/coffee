import React from 'react';

const GoodItem = ({item}) => {
    const {name, url, price} = item;
    return (
        <div className="pleasure__item">
            <img src={url} alt="coffee"/>
            <div className="pleasure__item-title">
                {name}
            </div>
            <div className="pleasure__item-price">{price}$</div>
        </div>
    )
}

export default GoodItem;