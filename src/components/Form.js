import { useState, useEffect } from "react";
import "../styles/Form.css";

function Form({ onEdit, onSubmit, editItem }) {
  const initialData = { name: "", id: 1 };
  const [data, setData] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    if (editItem) {
      onEdit(data);
    } else {
      if (data.name !== "") {
        onSubmit(data);
      }
    }
    setData(initialData);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editItem) {
      setData(editItem);
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Item"
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <button className="submit-button">
        {editItem ? "Edit Item" : "Add Item"}
      </button>
    </form>
  );
}

export default Form;
