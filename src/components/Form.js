import { useState, useEffect } from "react";
import "../styles/Form.css";

function Form({ onEdit, onSubmit, editItem }) {
  const initialData = { name: "", id: 1 };
  const [data, setData] = useState(initialData);

  const [isValid,setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (editItem) {
      onEdit(data);
    } else {
      if (data.name.trim().length === 0) {
        setIsValid(false);
      }else{
        onSubmit(data);
      }
    }
    setData(initialData);
  }

  function handleChange(e) {
    if(e.target.value.trim().length > 0 ){
      setIsValid(true);
    }
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editItem) {
      setData(editItem);
    }
  }, [editItem]);

  let btnStyle = {};
  if(!isValid){
    btnStyle= {
      border: '2px solid red',
      backgroundColor: 'rgb(248, 154, 154)'
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Item"
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        style={btnStyle}
      />
      <button className="submit-button">
        {editItem ? "Edit Item" : "Add Item"}
      </button>
    </form>
    
  );
}

export default Form;
