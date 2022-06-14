import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = ({greeting}) => {
    const [Datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        firestoreFetch(id)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
        <h4 className="container my-4 fs-1">{greeting}</h4>
        <ItemList items={Datos}/>
        </>
    );

}
export default ItemListContainer;