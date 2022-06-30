import React, { useState } from 'react';


export default function Textbar(props) {
    const [text, settext] = useState("Enter text Here");

    const handleUoClick = () => {
        console.log("The button was clicked");
        let newText = text.toUpperCase();
        settext(newText)
    }
    const handleonChange = (event) => {
        console.log("The on change is working");
        settext(event.target.value)
    }
    return (<>
        <div className="mb-3">
            <h1>Enter Your Text Here:-</h1>
            <textarea className="form-control" onChange={handleonChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-dark my-2" onClick={handleUoClick}>{props.btnname}</button>
        </div>
        <div className="container">
            <h2>
                Your Text Summary:
            </h2>
            <p> Your Text has {text.split(" ").length} words and {text.length} Charecters</p>
            <p> It will take {0.008 * text.split(" ").length} munites to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
};
Textbar.defaultProps = {
    btnname: 'UpperCase'
}
