import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Items from "./components/Items";
function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function handleClose(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function handleEditItem(item) {
    const index = items.findIndex((e) => e.id === item.id);
    const newItems = [...items];
    newItems.splice(index, 1, item);
    setItems(newItems);
    setEditItem(null);
  }

  function handleEdit(item) {
    setEditItem(item);
  }

  function handleUp(item) {
    const index = items.findIndex((e) => e.id === item.id);
    const newItems = [...items];
    if(index !== 0){
      newItems.splice(index,1);
      newItems.splice(index-1,0,item);
      setItems(newItems);
    }
  }
  function handleDown(item) {
    const index = items.findIndex((e) => e.id === item.id);
    const newItems = [...items];
    if(index !== (newItems.length - 1)){
      newItems.splice(index,1);
      newItems.splice(index+1,0,item);
      setItems(newItems);
    }
  }
  function handleSubmit(item) {
    setItems([...items, { ...item, id: Math.floor(Math.random() * 100 + 1) }]);
  }
  return (
    <div className="App">
      <h1>Todo - List</h1>
      <Form
        onSubmit={handleSubmit}
        editItem={editItem}
        onEdit={handleEditItem}
      />
      <Items
        items={items}
        onClose={handleClose}
        onEdit={handleEdit}
        onUp={handleUp}
        onDown={handleDown}
      />
    </div>
  );
}

export default App;
