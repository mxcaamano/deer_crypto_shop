import ItemCount from './ItemCount';
const ItemListContainer = ({greeting}) => {
    const onAdd = (Cant) => {
        alert(`Se agregaron ${Cant} productos al carrito`);
    }
    return (
        <>
        <h4 className="container mt-5 text-dark">{greeting}</h4>
        <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </>
    );
}
export default ItemListContainer;