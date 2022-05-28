import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';


const Item = ({ id, title, price, pictureUrl}) => {
    return(
    <div className="col ">
        <div className="card bordes-neon bg-black">
            <img src={pictureUrl} className="bg-white productIMG"/>
            <div className="card-body">
                <h4 className="list-unstyled card-text">{title}</h4>
                <li className="list-unstyled card-text">ID: {id}</li>
                <li className="list-unstyled card-text fs-5">Precio: {price} U$S / <img width="20" height="20" src={usdtlogo}/> / <img width="20" height="20" src={usdclogo}/></li>
                <button className="btn-view my-3">Ver más</button>
            </div>
        </div>
    </div>
    );
}

export default Item;