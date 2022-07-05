import Item from "./Item";
import loading from "../assets/images/loading.svg";

const ItemList = ({items}) => {
    return(
    <div className="album py-3 mb-5 my-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {
            items.length 
            ?
            items.map(item => 
            <Item 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            price={item.price}
            category={item.category}
            description={item.description}
            pictureUrl={item.pictureUrl}
            />)
            : <div className="container">
                <img className="d-block mx-lg-auto mt-5" src={loading} width="120" height="120" alt='Loading Icon'/>
                <h4 className="d-block mx-lg-auto mt-5 text-center">Buscando Productos...</h4>
              </div>
            }
          </div>
        </div>
    </div>
    )
}

export default ItemList;