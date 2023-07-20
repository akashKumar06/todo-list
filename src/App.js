import { useState } from 'react';
import './App.css';

import Form from './components/Form';

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
    </div>
  );
}

export default App;
