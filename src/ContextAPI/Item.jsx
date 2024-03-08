import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
function Item(props) {
    const itemsdata = useContext(CartContext);

    return (
        <div>
            {props.name}
            <button
                onClick={() => {
                    itemsdata.setitem([...itemsdata.item, { name: props.name }]);
                }}
            >
                Add to cart
            </button>
        </div>
    );
}

export default Item;
