import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

interface Product_Props {
    img: string;
    name: string;
    price: string;
    ram: string;
    memory: string;
    OS: string;
}

const Product: React.FC<Product_Props> = ({ img, name, price, ram, memory, OS }) => {
    const [mouse, setMouse] = useState<boolean>(false);
    const { addToCart } = useCart();

    return (
        <div className="main_child">
            <div className="image_div">
                <img
                    src={img}
                    alt={name}
                    onMouseEnter={() => setMouse(true)}
                    onMouseLeave={() => setMouse(false)}
                />
            </div>
            <div className={`overlay ${mouse ? 'visible' : ''}`}>
                <h2>RAM: {ram}</h2>
                <h2>Memory: {memory}</h2>
                <h2>OS: {OS}</h2>
            </div>
            <h3>{name}</h3>
            <h4>{price} ֏</h4>
            <div className="buttons_div">
                <button onClick={() => addToCart({ img, name, price, ram, memory, OS })}>
                    Add to Cart
                </button>
                <button>Buy</button>
            </div>
        </div>
    );
}

export default Product;
