import React, { useState } from 'react';
import pizzaImage from './pizza.jpeg'; // Import pizza image
import burgerImage from './burger.jpeg'; // Import burger image
import './CartPage.css'; // Import CSS file for styling

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Pizza", price: 10, quantity: 1, image: pizzaImage },
        { id: 2, name: "Burger", price: 5, quantity: 2, image: burgerImage }
        // Add more items to the cart as needed
    ]);

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const placeOrder = () => {
        // Implement logic to place the order
        // For now, just console log the items in the cart
        console.log("Placing order:", cartItems);
    };

    return (
        <div className="cart-page">
            <h1>Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div className="quantity-control">
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                <span>{item.quantity}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="place-order-button" onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default CartPage;
