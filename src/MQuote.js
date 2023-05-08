import React, { useState, useEffect } from "react";
import fireDb from "./Firebase";
import "./App.css"
const MQuote = () => {
  const [arr, setArr] = useState({});
  const [text, setText] = useState();

  useEffect(() => {
    fireDb.child("quote").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setArr({ ...snapshot.val() });
      } else {
        setArr({});
      }
    });
    return () => {
      setArr({});
    };
  }, []);
  function copy(e) {
    setText(e.target.id);
    navigator.clipboard.writeText(text); // write the text to the clipboard
    alert("Text copied to clipboard!");
  }
  return (
    <div className="App">
      <div className="container">
      {Object.keys(arr).map(function (obj, index) {
        return (
          <div className="box">
            <h4 style={{ textAlign: "center" }}>Quote</h4>
            <p className="quote" >{arr[obj].Quote}</p>
            <p>Author - {arr[obj].Name}</p>
            <button onClick={copy} id={arr[obj].Quote}>
              Copy Quote{" "}
            </button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default MQuote;
