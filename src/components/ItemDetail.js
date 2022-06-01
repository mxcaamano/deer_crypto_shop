import ItemCount from "./ItemCount";
import loading from "../assets/images/loading.svg";
import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';

const ItemDetail = ({item}) => {
    
    const onAdd = (Cant) => {
        alert(`Se agregaron ${Cant} productos al carrito`);
    }
    
    return(
        <>
    {item.pictureUrl ?
    <div className="container col-xxl-8 px-3 py-3 mt-5 bordes-neon bg-black">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={item.pictureUrl} className="d-block mx-lg-auto img-fluid" alt="Imagen producto" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{item.title}</h1>
                <h2 className="display-7 fw-bold lh-1 mb-3">Precio: {item.price} U$S / <img width="35" height="35" src={usdtlogo} alt='Tether'/> / <img width="35" height="35" src={usdclogo} alt='USD Coin'/></h2>
                <p className="lead">{item.description}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    </div>
    :
    <img className="d-block mx-lg-auto img-fluid mt-5" src={loading} width="150" height="150" alt='Loading Icon'/>
    }
    </>
    )
}

export default ItemDetail;