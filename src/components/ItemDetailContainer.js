import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../utils/products';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [Datos, setDatos] = useState([]);
    const { id } = useParams();
        
    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(id)))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={Datos} />
    )
}

export default ItemDetailContainer;