import Item from "./Item";

const ItemList = ({items}) => {
    return(
    <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {
            items.map(item => 
            <Item 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            price={item.price}
            description={item.description}
            pictureUrl={item.pictureUrl}
            />)
            }
          </div>
        </div>
    </div>
    )
}

export default ItemList;