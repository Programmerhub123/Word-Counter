import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase Click Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("LowerCase Click Was Clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    console.log("LowerCase Click Was Clicked" + text);
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Time to read in Minutes</p>
        <h2>Preview</h2>
        <p> {text}</p>
      </div>
    </>
  );
}
