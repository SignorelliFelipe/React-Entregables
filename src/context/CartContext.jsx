import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            const updatedCart = cart.map((item) =>

                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                    : item

            );

            setCart(updatedCart);

        } else {

            const newProduct = {
                ...product,
                quantity,
            };

            setCart([...cart, newProduct]);

        }

    };

    const removeItem = (id) => {

        const updatedCart = cart.filter(
            (product) => product.id !== id
        );

        setCart(updatedCart);

    };

    const clearCart = () => {

        setCart([]);

    };

    const totalQuantity = () => {

        return cart.reduce((acc, product) => acc + product.quantity, 0);

    };

    const totalPrice = () => {

        return cart.reduce(
            (acc, product) => acc + (product.price * product.quantity),
            0
        );

    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;