import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="card-body cart my-5">
      <div className="col-sm-12 empty-cart-cls text-center">
      <img className='mb-5 img-fluid mr-2' src={require("../assets/images/logos/404.png")} width="450"/>
        <h3><strong>La pagina que buscas no existe!</strong></h3>
        <Link to='/'><button type="button" className="my-3 px-3 btn-view fs-5">◄ Volver</button></Link>
      </div>
    </div>
  );
}

export default PageNotFound;