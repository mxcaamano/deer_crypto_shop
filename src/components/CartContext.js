import { createContext, useState } from "react";
import { toast, Flip } from 'react-toastify';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item,quantity) => {
        const cartitem = cartList.find((i) => i.id === item.id ) 
        if(cartitem){
            if(cartitem.quantity >= cartitem.stock){
                cartitem.quantity = cartitem.stock
                toast.warn('Ya has agregado el maximo de stock de éste articulo a tu carrito', {position: "top-center", autoClose: 3000, theme: "colored", transition: Flip})
            }
            else{
                cartitem.quantity += quantity
                toast.success(`Se agregaron ${quantity} productos al carrito`, {position: "top-center", autoClose: 3000, theme: "colored", transition: Flip});
                if(cartitem.quantity >= cartitem.stock)
                {
                    cartitem.quantity = cartitem.stock;
                    toast.warn('Ya has agregado el maximo de stock de éste articulo a tu carrito', {position: "top-center",autoClose: 3000, theme: "colored", transition: Flip})
                }                 
            }
        }
        else{
            toast.success(`Se agregaron ${quantity} productos al carrito`, {position: "top-center", autoClose: 3000, theme: "colored", transition: Flip});
            setCartList([...cartList, {...item, quantity:quantity}]);
        }
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