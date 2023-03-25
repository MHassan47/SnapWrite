import React, { useEffect, useState } from "react";

function TextBox({ storageKey, setSavedText, savedText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(savedText);

  //   handles textarea or div logic based on click
  const handleContainerClick = () => {
    setIsEditing(true);
  };

  //   handles onBlur logic for when user clicks away from textarea
  const handleInputBlur = () => {
    setIsEditing(false);
    setSavedText(editingText);
    localStorage.setItem(storageKey, editingText);
  };

  //   handles textarea onChange and updates editingText state
  const handleInputChange = (event) => {
    const words = event.target.value.split(/\s+/);
    console.log(words.length);
    if (
      (words.length === 21 || words.length === 46) &&
      event.target.value.slice(-1) === " "
    ) {
      setEditingText(event.target.value + "\n" + "\n");
    } else {
      setEditingText(event.target.value);
    }
  };

  // useEffect needed to get localStorage items and set as savedText upon refresh
  useEffect(() => {
    const storedText = localStorage.getItem(storageKey);
    if (storedText) {
      setEditingText(storedText);
      setSavedText(storedText);
    }
  }, []);

  //   allows user to only be able to backspace when textbox is at capacity
  const handleKeyPress = (event) => {
    if (
      event.target.value.split(" ").length >= 56 &&
      event.key !== "Backspace"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "0.15rem solid #d3d3d3",
        boxShadow: "15px 10px 20px  rgba(0, 0, 0, 0.1)",
        height: "30vh",
        width: "30vw",
      }}
    >
      <div style={{ borderBottom: "0.2rem solid yellow", padding: "0.4rem" }}>
        Text Box
      </div>
      {isEditing ? (
        <textarea
          type="text"
          value={editingText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyPress}
          autoFocus
          style={{
            display: "flex",
            flex: 1,
            verticalAlign: "top",
            border: "none",
            overflow: "auto",
            outline: "none",
          }}
        />
      ) : (
        <div
          style={{
            whiteSpace: "pre-line",
            marginTop: "1rem",
            marginLeft: "0.5rem",
          }}
        >
          {savedText}
        </div>
      )}
    </div>
  );
}

export default TextBox;
