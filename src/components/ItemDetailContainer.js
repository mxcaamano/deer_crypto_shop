import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from '../utils/firestoreFetch';


const ItemDetailContainer = () => {
    const [Datos, setDatos] = useState([]);
    const { id } = useParams();
        
    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={Datos} />
    )
}

export default ItemDetailContainer;