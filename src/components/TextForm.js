import React,{useState} from 'react'



export default function TextForm(props) {

  // lowercase
    const handleupclick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success")
         
    }   

    // uppercase
    const handleLoclick=()=>{
     
       let newText=text.toLowerCase();
       setText(newText)   
       props.showAlert("converted to lowercase!","success")
   }

   // clear chat
   const handleclclick=()=>{
 
     let newText='';
     setText(newText)   
     props.showAlert("Text Cleared!","success")
 }

 // reverse
 const handleflclick=()=>{
 
  let strarr=text.split("");
    strarr=strarr.reverse();
   let newText=strarr.join("");
   setText(newText)   
   props.showAlert(" Reverse letter","success")
}
// Trim
const handletrimclick=()=>{
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

navigator.clipboard.writeText(text);

props.showAlert("Copy to clipboard!","success")
}



    const handleOnChange=(event)=>{
        setText(event.target.value); 
    }  
     const [text, setText] = useState('');  // 
   // text="new text"; // wrong way to change the state
   // setText("new text"); // correct way to change the state

   
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1 className="mb-4" > {props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletrimclick}>Trim</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleflclick}>Reverse Letter</button>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclclick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
