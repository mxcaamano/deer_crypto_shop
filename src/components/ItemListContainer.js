import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../utils/products';

const ItemListContainer = ({greeting}) => {
    const [Datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (id === undefined) 
            return item; 
            return item.categoryId === parseInt(id)
        }))        
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [id]);
    return (
        <>
        <h4 className="container my-5 fs-1">{greeting}</h4>
        <ItemList items={Datos}/>
        </>
    );

}
export default ItemListContainer;