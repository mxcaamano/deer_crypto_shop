const Navbar = () => {
    return (
        <header>
        <nav className='navbar navbar-expand-lg bg-black borde-top'>
          <div className='container-fluid'>
            <a className='navbar-brand mx-2' href=''>
              <img className='mx-2 d-inline-block align-text-center' src={require('../assets/images/logos/deerlogo.png')} alt='deer crypto' width='55' height='55'/>
            Deer Crypto SHOP
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse mx-3' id='navbarNavAltMarkup'>
              <div className='navbar-nav menu-anim mb-1'>
                <a className='nav-link' href=''>GPUs</a>
                <a className='nav-link' href=''>Fuentes</a>
                <a className='nav-link' href=''>Motherboards</a>
                <a className='nav-link' href=''>Coolers</a>
                <a className='nav-link' href=''>Risers</a>                
                <a className='nav-link' href=''>Estructuras y Racks</a>
                <a className='nav-link' href=''>ASICs</a>
              </div>
            </div>
          </div>
        </nav>
      </header>    
    );
}
export default Navbar;