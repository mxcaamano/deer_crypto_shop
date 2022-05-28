import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import products from '../utils/products';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [Datos, setDatos] = useState([]);
        
    useEffect(() => {
        customFetch(2000, products[1])
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={Datos} />
    )
}

export default ItemDetailContainer;