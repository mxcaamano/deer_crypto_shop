import ItemCount from "./ItemCount";
import loading from "../assets/images/loading.svg";
import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer } from "react-toastify";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const context = useContext(CartContext);

    const onAdd = (Cant) => {
        setItemCount(Cant);
        context.addItem(item,Cant);
    }
    
    return(
        <>
        <ToastContainer />
    {item && item.pictureUrl ?
    <div className="container col-xxl-8 px-3 py-3 my-5 bordes-neon bg-black">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={item.pictureUrl} className="d-block mx-lg-auto img-fluid" alt="Imagen producto" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{item.title}</h1>
                <h2 className="display-7 fw-bold lh-1 mb-3">Precio: {item.price} U$S / <img width="35" height="35" src={usdtlogo} alt='Tether'/> / <img width="35" height="35" src={usdclogo} alt='USD Coin'/></h2>
                <p className="lead">Disponibles: {item.stock}</p>
                <p className="lead">{item.description}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <Link to='/cart'><button type="button" className="mx-4 p-2 btn-view">Ir al Carrito</button></Link>
                }
                </div>
            </div>
        </div>
    </div>
    : <img className="d-block mx-lg-auto img-fluid mt-5" src={loading} width="120" height="120" alt='Loading Icon'/>
    }
    </>
    )
}

export default ItemDetail;