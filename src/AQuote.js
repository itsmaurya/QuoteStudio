import { useEffect, useState } from "react";
import "./App.css";

function AQuote() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  // fetch("https://type.fit/api/quotes/")
  //   .then((data) => {

  //     data
  //       .json()
  //       .then((actual) => {
  //         setData(actual);
  //         console.log(actual)

  //       })
  //       .catch((err) => {});

  //   })
  //   .catch((err) => {});

  useEffect(() => {
    const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?limit=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0e70c4e10fmsh2cf4680875e26b1p1a0c10jsna9a29d32de98",
        "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
      },
    };

    const fetchdata = async ()=>{
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  },[]);

  function copy(e) {
    setText(e.target.value);
    navigator.clipboard.writeText(text); // write the text to the clipboard
    alert("Text copied to clipboard!");
  }
  return (
    <div className="App">
      <div className="container">
      {data.map((obj) => {
        return (
          <div className="box">
            <h4 style={{ textAlign: "center" }}>Quote</h4>
            <p className="quote">{obj.quote}</p>
            <p>Author - {obj.author}</p>
            <p> Category - {obj.category}</p>
            <button onClick={copy} value={obj.quote}>
              Copy Quote{" "}
            </button>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default AQuote;
