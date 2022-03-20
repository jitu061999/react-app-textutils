import React,{useState} from 'react'



export default function TextForm(props) {

  // lowercase
    const handleupclick=()=>{
       // console.log("Uppercase was clicked" +text); 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success")
         
    }   

    // uppercase
    const handleLoclick=()=>{
      // console.log("Uppercase was clicked" +text); 
       let newText=text.toLowerCase();
       setText(newText)   
       props.showAlert("converted to lowercase!","success")
   }

   // clear chat
   const handleclclick=()=>{
    // console.log("Uppercase was clicked" +text); 
     let newText='';
     setText(newText)   
     props.showAlert("Text Cleared!","success")
 }

 // reverse
 const handleflclick=()=>{
  // console.log("Uppercase was clicked" +text); 
  let strarr=text.split("");
    strarr=strarr.reverse();
   let newText=strarr.join("");
   setText(newText)   
   props.showAlert(" Reverse letter","success")
}
// Trim
const handletrimclick=()=>{
  // console.log("Uppercase was clicked" +text); 
  
   let newText=text.trim();
   setText(newText)
   props.showAlert("Text Trim!","success")   
}
// Remove extra space 
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces remove!","success")
}
// copy text
const handlecopy=()=>{
let text=document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Copy to clipboard!","success")
}



    const handleOnChange=(event)=>{
       // console.log("handle onchange"); 
        setText(event.target.value); 
    }  
     const [text, setText] = useState('');  // 
   // text="new text"; // wrong way to change the state
   // setText("new text"); // correct way to change the state

   
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h1 > {props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handletrimclick}>Trim</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleflclick}>Reverse Letter</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleclclick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>

      <p>{0.008 *text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above  to preview it here"}</p>
      </div>
    </>
  )
}
