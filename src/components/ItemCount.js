import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd}) => {
    const [Cant, setCant] = useState(initial);

    const inc = () => {
        Cant < stock && setCant (Cant+1);
        }
    const dec = () => {
        Cant > initial && setCant (Cant-1);
        }
    return (
        <div className="container">
        <button type="button" className="mb-1 py-1 btn btn-danger font-weight-bold text-white" onClick={dec}>-</button>
        <span className="mx-3 fs-5">{Cant}</span>        
        <button type="button" className="mb-1 py-1 btn btn-success font-weight-bold text-white" onClick={inc}>+</button>
        <button type="button" className="mx-4 p-2 btn-view" onClick={() => { stock >= 1 && onAdd(Cant)}}>Agregar al Carrito</button>
        </div>
    );
}
export default ItemCount;