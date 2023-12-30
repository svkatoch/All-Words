import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const[text,setText] = useState('Enter Text Here');
    return (
        <>
        
        <div className='container'>
        <div className="mb-3 my-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
        </div>
        <button className=" btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
    <div className="container my-3">
        <h2><b>Your text summary</b></h2>
        <p>{text.split(".").length} sentences, {text.split(" ").length} words, {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
        </>
  )
}
