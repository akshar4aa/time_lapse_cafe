import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD TO CART

  const addToCart = (item) => {

    const existingItem = cart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {

      const updatedCart = cart.map((cartItem) =>

        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem

      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        { ...item, quantity: 1 }
      ]);

    }
  };

  // INCREASE QUANTITY

  const increaseQuantity = (name) => {

    const updatedCart = cart.map((item) =>

      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item

    );

    setCart(updatedCart);
  };

  // DECREASE QUANTITY

  const decreaseQuantity = (name) => {

    const updatedCart = cart
      .map((item) =>

        item.name === name
          ? { ...item, quantity: item.quantity - 1 }
          : item

      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // REMOVE ITEM

  const removeItem = (name) => {

    const updatedCart = cart.filter(
      (item) => item.name !== name
    );

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;