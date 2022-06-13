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

    const removeItem = (idItem) =>
    {
        setCartList (cartList.filter((item) => item.id !== idItem.id));
    }

    const clear = () =>{
        setCartList([])
    }

    const calcTotalPerItem = (idItem) => {
        let i = cartList.map(item => item.id).indexOf(idItem);
        return cartList[i].price * cartList[i].quantity;
    }
    
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((pValue, cValue) => pValue + cValue);
    }

    const calcTaxes = () => {
        return calcSubTotal()*0.21;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () =>{
        let qtys = cartList.map (item => item.quantity);
        return qtys.reduce(((pValue, cValue) => pValue + cValue), 0);
    }

    return(
        <CartContext.Provider value ={{cartList, addItem, removeItem, clear, calcTotalPerItem, calcSubTotal, calcTaxes, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;