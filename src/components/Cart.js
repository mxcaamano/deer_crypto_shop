import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);
    return(
        <>
        {
            
            <div className="container py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0">Tu Carrito</h3>
                  </div>
                  
                  {
                    context.cartList.length === 0 
                    ? <>
                    <div className="card-body cart">
                      <div className="col-sm-12 empty-cart-cls text-center">
                        <img className='mb-5 img-fluid mr-2' src={require("../assets/images/logos/cart.png")} width="130" height="120"/>
                        <h3><strong>Tu Carrito está vacío!</strong></h3>
                        <h4 className='mb-3'>🤑 Ingresa a la tienda para añadir productos 🤑</h4>
                        <Link to='/'><button type="button" className="px-3 btn-view fs-5">Tienda</button></Link>
                      </div>
                    </div>
                    </>
                    : context.cartList.map((item) => {
                    return(
                            <div className="card bg-black my-5 bordes-neon p-3">
                                <div className="card-body p-4">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                        src={item.pictureUrl}
                                        className="img-fluid" alt="Imagen Producto"/>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">{item.title}</p>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center">                    
                                    <span className="mx-3 fs-3">{item.quantity}</span>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-3 justify-content-center">
                                    <h6 className="mb-0">Precio Unitario: {item.price} U$S <img className='mb-1' width="20" height="20" src={usdtlogo} alt='tether'/> <img className='mb-1' width="20" height="20" src={usdclogo} alt='USD Coin'/></h6>
                                    <h5 className="mb-0 fs-5">Total: {context.calcTotalPerItem(item.id)} U$S <img className='mb-1' width="23" height="23" src={usdtlogo} alt='tether'/> <img className='mb-1' width="23" height="23" src={usdclogo} alt='USD Coin'/></h5>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button type="button" className="rounded-0 mb-1 py-1 btn btn-danger font-weight-bold text-white" onClick={() => context.removeItem(item)}>X</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                    )
                    })
        }
                      {context.cartList.length !== 0 
                      && 
                      <div className="d-flex justify-content-center">
                        <div className="col-md-4 order-md-2 mb-4">
                          <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="fs-4">Articulos</span>
                            <span className="fs-4 p-2 rounded-pill bordes-neon">{context.calcItemsQty()}</span>
                          </h4>
                          <ul className="bg-black list-group mb-3 bordes-neon mt-4">
                            <li className="bg-black list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0">Subtotal</h6>
                              </div>
                              <span>{context.calcSubTotal()}</span>
                            </li>
                            <li className="bg-black list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0">Impuestos y Tasas</h6>
                              </div>
                              <span>{context.calcTaxes()}</span>
                            </li>
                            <li className="bg-black list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0">Descuentos</h6>
                              </div>
                              <span>-{context.calcTaxes()}</span>
                            </li>
                            <li className="bg-black list-group-item d-flex justify-content-between">
                              <span className='fs-5'>Total (U$S) / <img className='mb-1' width="20" height="20" src={usdtlogo} alt='tether'/> / <img className='mb-1' width="20" height="20" src={usdclogo} alt='USD Coin'/></span>
                              <strong className='fs-5'>{context.calcTotal()}</strong>
                            </li>
                          </ul>
                            <div className="d-flex justify-content-center my-2">
                              <button type="button" className="rounded-0 btn btn-success font-weight-bold text-white m-2">Pagar</button>
                              <button type="button" className="rounded-0 btn btn-danger font-weight-bold text-white m-2" onClick={() => context.clear()}>Vaciar Carrito</button>
                            </div>
                        </div>
                      </div>}
                </div>
              </div>
            </div>
        }
        </>
    )
}

export default Cart;

