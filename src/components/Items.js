import Item from "./Item";
function Items({items}){

    return (
        <div>
            {items.map((item)=>(<Item key={item.id} itemName={item.name}/>))}
        </div>
    )
}

export default Items;