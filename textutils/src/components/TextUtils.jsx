import React, { useState } from "react";
import "../components/TextUtils.css";


export default function TextUtils() {
  const [text, setText] = useState("");

  const totalWords =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Text Utils</h2>
        <div className="form-floating my-4">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-control"
            placeholder="Write Any Type Of Content.."
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2"> Content..</label>
        </div>
        <hr />
        <p>{text}</p>
          <div className="d-flex gap-2">
          <button
            onClick={() => {
              setText(text.toUpperCase());
            }}
            className="btn btn-primary"
          >
            To Uppercase
          </button>

          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            className="btn btn-success"
          >
            To Lowercase
          </button>

          
        </div>
         <li>Total Length - {text.length}</li>

          <li>Total Words - {totalWords}</li>

          <li>
            Reading Time - {(totalWords / 200).toFixed(2)} Minutes
          </li>
      
      </div>
      
    </>
  );
}

