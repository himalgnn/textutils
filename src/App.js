import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState("dark"); // Whether dark mode is enabled or not
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
    const toggleMode = (col) => {
        console.log("Mode changed to:-", mode);
        let myBox = document.getElementById('mybox');
        let body = document.body;
        
        switch (col) {
            case 'light':
                setMode('light');
                body.style = "background-color:white;color:black";
                myBox.style = "background-color: white;color: black";
                showAlert("Lightmode has been enabled!", "success");
                break;
            
            case 'dark':
                setMode('dark');
                body.style = "background-color:black;color:white";
                myBox.style = "background-color: black;color: white";
                showAlert("Darkmode has been enabled!", "success");
                break;
            
            case 'red':
                body.style = "background-color:red;color:white";
                myBox.style = "background-color: red;color: white";
                showAlert("Redmode has been enabled!", "success");
                break;

            case 'green':
                body.style = "background-color:green;color:white";
                myBox.style = "background-color: green;color: white";
                showAlert("GreenMode has been enabled!", "success");
                break;

            case 'blue':
                body.style = "background-color:blue;color:white";
                myBox.style = "background-color: blue;color: white";
                showAlert("BlueMode has been enabled!", "success");
                break;

            case 'purple':
                body.style = "background-color:purple;color:white";
                myBox.style = "background-color: purple;color: white";
                showAlert("PurpleMode has been enabled!", "success");
                break;

            default:
                break;
        }
    };

    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
                <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to analyze"
                    mode={mode}
                />
                {/* <About/> */}
            </div>
        </>
    );
}

export default App;
