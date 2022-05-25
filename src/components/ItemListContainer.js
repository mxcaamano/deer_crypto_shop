import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import products from '../utils/products';

const ItemListContainer = ({greeting}) => {
    const [Datos, setDatos] = useState([]);
    useEffect(() => {
        customFetch(2000, products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    const onAdd = (Cant) => {
        alert(`Se agregaron ${Cant} productos al carrito`);
    }
    return (
        <>
        <h4 className="container mt-5 text-white">{greeting}</h4>
        <ItemList items={Datos}/>
        <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </>
    );

}
export default ItemListContainer;