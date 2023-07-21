import Item from "./Item";
function Items({ items, onClose, onEdit, onUp, onDown,onComplete}) {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          onClose={onClose}
          onEdit={onEdit}
          onUp={onUp}
          onDown={onDown}
          onComplete={onComplete}
          item={item}
        />
      ))}
    </div>
  );
}

export default Items;
