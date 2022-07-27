//import logo from "./logo.svg";
import "./App.css";

import React from "react";
import CheckOut from "./checkOut";
import { useState, useEffect } from "react";
import { getProduct } from "./actions/index";
/*
import lodash from "lodash";
import axios from "axios";
//import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    return <h1>this is an error</h1>;
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App({ calling }) {
  const [arr, setArr] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const DEBOUNCE_DELAY = 500;

  function handleChange(e) {}

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const abc = await getProduct();

      // setArr(abc);
      // console.log(arr);
      //console.log(abc);
      abc.map((item) => {
        setArr((prevState) => {
          return [...prevState, item.name];
        });
      });

      setIsLoading(false);
    }
    getData();
    return;
  }, []);

  const getSelectedData = async (word) => {
    const response = await fetch("/allProduct", { method: "GET" });
    const result = await response.json();
    const nr = [];

    //curl "https://retoolapi.dev/nlFeIg/data?Column 1=value"
    for (let x of result) {
      nr.push(x.name);
    }
    //console.log(result);
    // console.log(result);
    return nr.filter((item) => item.includes(word));
  };

  const update = async (word) => {
    const response = await fetch("/allProduct", { method: "GET" });
    const result = await response.json();
    const nr = [];
    for (let x of result) {
      nr.push(x.name);
    }

    const abc = nr.reduce((previousValue, currentValue) => {
      if (currentValue.includes(word)) {
        previousValue.push(currentValue);
      }
      return previousValue;
    }, []);
    console.log(abc);
    const axioArray = await axios.get("https://retoolapi.dev/uQKO48/data", {
      params: { Column: 67 },
    });
    // console.log(axioArray);
    // let abc = await getSelectedData(word);
    setArr(abc);
    console.log("this is" + arr);
  };

  const handleInput = (e) => {
    const debounced = lodash.debounce(update, DEBOUNCE_DELAY);

    debounced.cancel();
    debounced(e.target.value);
  };

  //throw new Error();
  // return <CheckOut />;
  return (
    <div className="wrapper">
      <div className={"control" + (isloading ? " is-loading" : null)}>
        <input type="text" className="input" onChange={handleInput}></input>
      </div>
      {isloading ? null : (
        <div className="list">
          {arr.map((item, index) => {
            return (
              <a className="list-item" key={index} onClick={() => calling()}>
                {item}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
*/

export default function App() {
  return (
    <div>
      <CheckOut></CheckOut>
    </div>
  );
}
