import "./App.css";
import Alert from "./component/Alert";
/*import About from "./component/About";*/
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#071930";
      showAlert(" Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      //setInterval(()=>{
      //  document.title = "TextUtils is Amazing"
      //}, 2000);
      //setInterval(()=>{
      //  document.title = "Install TextUtils Now"
      //}, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*<Router>*/}
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          {/*<Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={*/}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text To Analyze"
                  mode={mode}
                />
              {/*}*/}
              {/*/>
          </Routes>*/}
        </div>
        {/*</Router>*/}
    </>
  );
}

export default App;
