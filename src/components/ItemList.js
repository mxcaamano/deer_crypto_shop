import Item from "./Item";
import loading from "../assets/images/loading.svg";

const ItemList = ({items}) => {
    return(
    <div className="album py-5">
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
            description={item.description}
            pictureUrl={item.pictureUrl}
            />)
            : <img className="d-block mx-lg-auto mt-5" src={loading} width="120" height="120" alt='Loading Icon'/>
            }
          </div>
        </div>
    </div>
    )
}

export default ItemList;