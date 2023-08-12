import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase Was Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase","success");
  };
  const handleDownClick = () => {
    //console.log("LowerCase Was Clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase","success");
  };
  const handleClearClick = () => {
    //console.log("Clear Text Was Clicked");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Has Been Cleared","success");

  };
  const handleReverseClick = () => {
    //console.log("Reverse Text Was Clicked" + text);
    let newtext = text.split("").reverse().join("");
    setText(newtext);
    props.showAlert("Text Has Been Reversed","success");
  };
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#071930'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#071930'}}
            id="myBox"
            rows="15"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#071930'}}>
        <h2>your Text Summary</h2>
        <p>
          {text.split(" ").filter((Element)=>{return Element.length!==0}).length} Words, {text.length} Characters
        </p>
        <p>Will Take {0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview!"}</p>
      </div>
    </>
  );
}



