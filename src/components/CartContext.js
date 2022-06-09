import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item,quantity) => {
        const cartitem = cartList.find((i) => i.id === item.id ) 
        cartitem 
        ? cartitem.quantity += quantity
        : setCartList([...cartList, {...item, quantity:quantity}]);
    }

    const removeItem = (itemId) =>
    {
        setCartList (cartList.filter((item) => item.id !== itemId.id));
    }

    const clear = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value ={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;