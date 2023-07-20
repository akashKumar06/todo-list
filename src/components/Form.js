import { useState } from "react";
import "../styles/Form.css";

function Form({onSubmit}) {
  const [data, setData] = useState({});

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({...data,id:Math.floor(Math.random()*100 + 1)});
  }

  function handleChange(e) {
    setData({...data,[e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Add Item</button>
    </form>
  );
}

export default Form;
