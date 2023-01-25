import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
  
function App() {
    const [mode, setMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    }); // Whether dark mode is enabled or not
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
    const toggleMode = (bgCol,textCol,btnColor) => {
        let myBox = document.getElementById('mybox');
        let body = document.body;
        let style = `background-color:${bgCol};color:${textCol}`;

        setMode({
            color: textCol,
            bgCol: bgCol,
            btnColor: btnColor
        });
        body.style = style;
        myBox.style = style;
        showAlert(`${btnColor}Mode has been enabled!`, "success");
    };

    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">

                <Routes>
                    <Route path="/" element={  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> } />
                    <Route path="about" element={ <About mode={mode}/> } />
                </Routes>

            </div>
        </>
    );
}

export default App;
