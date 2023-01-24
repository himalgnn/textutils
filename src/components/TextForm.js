import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleFocus = () =>{
        document.getElementById('mybox').focus()
    };
    const handleUpClick = () => {
        // console.log("Uppercase clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        handleFocus()
        props.showAlert("Converted to uppercase!", "success"); //Show alert when uppercase clicked
    };
    const handleLowClick = () => {
        // console.log("Lowercase clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        handleFocus()
        props.showAlert("Converted to lowercase!", "success")
    };

    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        handleFocus() //Set focus on the textbox when clear clicked
        props.showAlert("Text Cleared!", "success")
        
    };
    const handleCopyClick = () =>{
        let copyText = document.getElementById("mybox");
        copyText.select(); //Select the text
        navigator.clipboard.writeText(copyText.value); //It copies to clipboard
        props.showAlert("Copied to clipboard!", "success")
        
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        handleFocus()
        props.showAlert("Removed extra spaces!", "success")
    }
    const [myStyle, setmyStyle] = useState(null)

    
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText ("new text") // Correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="mybox"
                        value={text}
                        onChange={handleOnChange}
                        rows="8"
                        autoFocus
                        style={{backgroundColor: props.mode==='light'?'white':'#1a1f24',color: props.mode==='light'?'black':'white' }}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
                    Copy to Clipboard
                </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                    Remove Extraspaces
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    Clear
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in the textbox above to preview it here.'}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: "Enter the text to analyze",
};

