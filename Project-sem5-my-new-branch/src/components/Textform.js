import React , {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
       // console.log("uppercase was clicked");
        let newText = text.toUpperCase();

        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked");
         let pewText = text.toLowerCase();
 
         setText(pewText);
     }
     const handleItClick = ()=>{
        // console.log("uppercase was clicked");
         let oewText = " ";
 
         setText(oewText);
     }
    //  const handleItClick = ()=>{
    //     let newwtext = text.toLowerCase;
    //     setText(newwtext);
    //  }
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }


    const [text, setText] = useState('enter text here');
   // setText("new Text");
  return ( 
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#04357e'}}>
  <h1>{props.heading}</h1>      
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#04357e'}}    value={text}></textarea>
</div>
<button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Upercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleItClick}>Clear text</button>
</div>
<div className="container my-3"  style={{color: props.mode==='dark'?'white':'#04357e'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length}</p>
    <p>{0.008*text.split(" ").length} Minutes or Time taken to read it</p>
    <h2>
        Preview
    </h2>
    <p>{text.length>0?text:"Enter something in textbox to preview it here "}</p>
</div>
</>
)
}

