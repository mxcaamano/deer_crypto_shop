import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
        <nav className='navbar navbar-expand-lg bg-black ticker-shadow'>
          <div className='container-fluid'>
            <Link to={'/'} className='navbar-brand mx-2'>
              <img className='mx-2 d-inline-block align-text-center' src={require('../assets/images/logos/deerlogo.png')} alt='deer crypto' width='55' height='55'/>
            Deer Crypto SHOP
            </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse mx-3' id='navbarNavAltMarkup'>
              <div className='navbar-nav menu-anim mb-1'>
                <Link to={'/category/1'} className='nav-link'>GPUs</Link>
                <Link to={'/category/2'} className='nav-link' >Fuentes</Link>
                <Link to={'/category/3'} className='nav-link' >Motherboards</Link>
                <Link to={'/category/4'} className='nav-link' >Coolers</Link>
                <Link to={'/category/5'} className='nav-link' >Risers</Link>                
                <Link to={'/category/6'} className='nav-link' >Rigs Completos</Link>
                <Link to={'/category/7'} className='nav-link' >ASICs</Link>
              </div>
            </div>
            <CartWidget/>
          </div>
        </nav>
      </header>    
    );
}
export default Navbar;