import usdtlogo from '../assets/images/logos/usdtlogo.svg';
import usdclogo from '../assets/images/logos/usdclogo.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const inputCheck = () => {
      return(
      name.match(/^[a-z ,.'-]+$/i) && email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && phone.match(/^[0-9]*$/)
      ? createOrder() 
      : toast.error('Complete los campos correctamente', {autoClose: 3000, theme: "colored", transition: Flip})
      )   
    }

    const context = useContext(CartContext);

    const createOrder = () => {

      const itemsForDB = context.cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      }));
    
      let order = {
        buyer: {
          name: name,
          email: email,
          phone: ("+",phone)
        },
        total: context.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };

      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    
      createOrderInFirestore()
        .then(result => toast.success('Tu orden fue creada!, recuerda anotar el numero de orden: ' + result.id, {position: "top-center", autoClose: false, theme: "colored", transition: Flip}))
        .catch(err => console.log(err));
        
        context.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc (itemRef, {
            stock: increment(-item.quantity)
          })
        });

        context.clear();
    }

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
                    <ToastContainer />
                    <div className="card-body cart">
                      <div className="col-sm-12 empty-cart-cls text-center">
                        <img className='mb-5 img-fluid mr-2' src={require("../assets/images/logos/cart.png")} width="130" height="120" alt='loading-icon'/>
                        <h3><strong>Tu Carrito est?? vac??o!</strong></h3>
                        <h4 className='mb-3'>???? Ingresa a la tienda para a??adir productos ????</h4>
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
                            <div className="my-2">
                            <input className="form-control my-3 mt-4" name="name" label='Nombre' placeholder='John Doe' onChange={event => setName(event.target.value)}/>
                            <input className="form-control my-3" name='email' label='Email' placeholder='xyz@ejemplo.com' type='email' onChange={event => setEmail(event.target.value)}/>
                            <input className="form-control my-3" name="phone" label='Tel??fono' type="tel" placeholder="5401145342210" onChange={event => setPhone(event.target.value)}></input>
                              <button onClick={inputCheck} type="button" className="rounded-0 btn btn-success font-weight-bold text-white m-2">Comprar</button>
                              <button type="button" className="rounded-0 btn btn-danger font-weight-bold text-white m-2" onClick={() => context.clear()}>Vaciar Carrito</button>
                              <ToastContainer/>
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
