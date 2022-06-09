import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';
import { Link } from 'react-router-dom';


const Item = ({ id, title, price, pictureUrl}) => {
    return(
    <div className="col ">
        <div className="card bordes-neon bg-black pb-2">
            <img src={pictureUrl} className="bg-white productIMG" alt='Imagen de producto'/>
            <div className="card-body">
                <h4 className="list-unstyled card-text">{title}</h4>
                <li className="list-unstyled card-text fs-5 mb-3">Precio: {price} U$S / <img width="20" height="20" src={usdtlogo} alt='tether'/> / <img width="20" height="20" src={usdclogo} alt='USD Coin'/></li>
                <Link to={`/item/${id}`} className="btn-view my-3" >Ver más</Link>
            </div>
        </div>
    </div>
    );
}

export default Item;