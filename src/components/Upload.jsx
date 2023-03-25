import React, { useState, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
function Upload() {
  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.type === "image/jpeg" || file.type === "image/png") {
      reader.onload = function () {
        const imageBase64 = reader.result;
        localStorage.setItem("Image", imageBase64);
        setSelected(imageBase64);
      };
      reader.readAsDataURL(file);
    } else {
      setSelected(null);
      localStorage.removeItem("Image");
    }
  };

  useEffect(() => {
    const checkStorage = localStorage.getItem("Image");
    if (checkStorage) {
      setSelected(checkStorage);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "30vh",
        width: "30vw",
      }}
    >
      {!selected ? (
        <>
          <input
            id="file-input"
            type="file"
            accept=".png,.jpeg"
            onChange={handleChange}
            hidden
          />

          <label
            htmlFor="file-input"
            style={{
              display: "flex",
              fontSize: "0.8rem",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              border: "0.1rem solid gray",
              height: "30vh",
              width: "20vw",
              cursor: "pointer",
            }}
          >
            <BsUpload style={{ fontSize: "2rem" }} />
            PNG, JPEG files only
          </label>
        </>
      ) : (
        <div
          style={{
            objectFit: "fill",
            height: "30vh",
            width: "30vw",
          }}
        >
          <img
            src={selected}
            alt="Selected file preview"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              border: "0.1rem solid #d3d3d3",
              boxShadow: "15px 10px 20px  rgba(0, 0, 0, 0.05)",
              height: "30vh",
              width: "20vw",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Upload;
