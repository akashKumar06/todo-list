import '../styles/Item.css';

function Item({item,onClose,id, onEdit,onUp,onDown}){
    function handleCloseButton(){
        onClose(id);
    }

    function handleEditButton(){
        onEdit(item)
    }

    function handleUpButton(){
        onUp(item)
    }

    function handleDownButton(){
        onDown(item)
    }
    return(
        <div className="item">
            <button className='item-name'>{item.name}</button>
            <button className='up-button' onClick={handleUpButton}>UP</button>
            <button className='down-button' onClick={handleDownButton}>DOWN</button>
            <button className='edit-button' onClick={handleEditButton}>Edit</button>
            <button className='close-button' onClick={handleCloseButton}>X</button>
        </div>
    )
}

export default Item;