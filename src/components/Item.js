import { useState } from "react";
import "../styles/Item.css";

function Item({ item, onClose, id, onEdit, onUp, onDown, onComplete }) {
  const [status, setStatus] = useState(false);
  function handleCloseButton() {
    onClose(id);
  }

  function handleEditButton() {
    onEdit(item);
  }

  function handleUpButton() {
    onUp(item);
  }

  function handleDownButton() {
    onDown(item);
  }
  function handleComplete() {
    setStatus(!status);
    onComplete(item);
  }
  return (
    <div className="item">
      <button
        className={`item-name ${status === false ? "" : "clicked"}`}
        onClick={handleComplete}
      >
        {item.name}
      </button>
      <button className="up-button" onClick={handleUpButton}>
        UP
      </button>
      <button className="down-button" onClick={handleDownButton}>
        DOWN
      </button>
      {item.status === "completed" ? (
        <button className="edit-button" disabled onClick={handleEditButton}>
          Edit
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditButton}>
          Edit
        </button>
      )}
      <button className="close-button" onClick={handleCloseButton}>
        X
      </button>
    </div>
  );
}

export default Item;
