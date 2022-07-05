import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';
import { toast, Flip } from 'react-toastify';
import { Link } from 'react-router-dom';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      toast.error(<span><Link className='text-light' to='/'>El artículo que buscas no se encuentra, presiona aquí para volver</Link></span>, {closeButton: false, closeOnClick: false, autoClose: false, position: "top-center", theme: "colored", transition: Flip})
    }
}