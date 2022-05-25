import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';


const Item = ({ id, title, price, description, pictureUrl}) => {
    return(
    <div className="col ">
        <div className="card bordes-neon bg-black">
            <img src={pictureUrl} className="bg-white productIMG"/>
            <div className="card-body">
                <h4 className="list-unstyled card-text">{title}</h4>
                <li className="list-unstyled card-text">ID: {id}</li>
                <li className="list-unstyled card-text fs-5">Precio: {price} <img width="25" height="25" src={usdtlogo}/> / <img width="25" height="25" src={usdclogo}/></li>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button className="btn-view">Ver más</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Item;