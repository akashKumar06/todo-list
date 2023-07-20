import { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Items from './components/Items';
function App() {
  const [items,setItems] = useState([])
  function handleSubmit(item){
    setItems([...items,item])
    console.log(items);
  }
  return (
    <div className="App">
      <h1>Todo - List</h1>
      <Form onSubmit={handleSubmit}/>
      <Items items={items}/>
    </div>
  );
}

export default App;
