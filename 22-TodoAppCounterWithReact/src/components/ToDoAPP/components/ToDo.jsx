import React, { useState } from "react";

const ToDo = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(todo.todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, todo: editedValue };
      }
      return item;
    });

    setTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input className="saveInp"
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
      ) : (
        <span>{todo.todo}</span>
      )}
      <button className="editBtn"
        onClick={() => {
          if (isEditing) {
            handleSave();
          } else {
            handleEdit();
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delBtn"
        onClick={() => {
          let arr = todos.filter((elem) => elem.id !== todo.id);
          setTodos(arr);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDo;
