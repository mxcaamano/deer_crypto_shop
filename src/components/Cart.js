import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);
    return(
        <>
        {
            <section className="h-100">
            <div className="container py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
          
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0">Tu Carrito</h3>
                  </div>
                  
                  {
                    context.cartList.length === 0 
                    ? <p className='fs-5 mt-5'>🌵 Tu Carrito está vacío! 🌵</p>
                    : context.cartList.map((item) => {
                    return(
                            <div className="card bg-black mb-4 bordes-neon p-3">
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
                                    <h5 className="mb-0 fs-4">{item.price} U$S <img className='mb-1' width="23" height="23" src={usdtlogo} alt='tether'/> <img className='mb-1' width="23" height="23" src={usdclogo} alt='USD Coin'/></h5>
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
                      {context.cartList.length !== 0 && <button type="button" className="rounded-0 btn btn-success font-weight-bold text-white m-2">Pagar</button>}
                      {context.cartList.length !== 0 && <button type="button" className="rounded-0 btn btn-danger font-weight-bold text-white m-2" onClick={() => context.clear()}>Vaciar Carrito</button>}
                </div>
              </div>
            </div>
          </section>
        }
        </>
    )
}

export default Cart;

