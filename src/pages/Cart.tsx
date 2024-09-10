import Header from "../components/Header/Header";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="cart_div">
            <Header />

            <div className="cart_items">
                {cartItems.map(item => (
                    <div key={item.name} className="cart_item">
                        <img src={item.img} alt={item.name} />
                        <div className="cart_item_text">
                        <h3>{item.name}</h3>
                        <h4>{item.price} ֏</h4>
                        <h5>Quantity: {item.quantity}</h5>
                        </div>
                        <div className="cart_buttons_div">
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                        <button>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
