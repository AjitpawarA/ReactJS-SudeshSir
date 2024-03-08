import React, { createContext, useState } from 'react';
import HomeContext from '../HomeContext';

export const CartContext = createContext();  

function CartProvider(props) {
    const [item, setitem] = useState([]);
    console.log(item);
    return (
        <CartContext.Provider value={{ item, setitem }}>
            <HomeContext/>
        </CartContext.Provider>
    );
}

export default CartProvider;
