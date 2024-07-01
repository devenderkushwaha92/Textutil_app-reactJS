import React ,{useState}from 'react'

export default function Mytext(props) {

  const [text ,setText]= useState('Paste your text to Convert in upper case')

  const handleonchange=(event)=>{
    setText(event.target.value);
   }

  const ToUpper=()=>{
   let newText = text.toUpperCase();
   setText(newText)
   }
 
   const ToLower=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    }

    const CapLetter = () => {
      let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      setText(newText);
    };

    const Clear=()=>{
      let newText = '';
      setText(newText);
    }
    
    
  return (
    <>
<div className={`"container"`}>
  <label htmlFor="exampleFormControlTextarea1" className="heading"  style={{color:props.fontColor}}  ><h1>Enter The Text To analyze</h1></label>
  <div class="col-md-10 ">
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange} rows="8"  value={text}></textarea>
  </div>
  <br></br>
  <button type="button" className="btn btn-success" onClick={ToUpper}>Convert to UpperCase</button>
  <button type="button" className="btn btn-success mx-4" onClick={ToLower}>Convert to LowerCase</button>
  <button type="button" className="btn btn-success mx-4" onClick={CapLetter}>Capitalize First Letter</button>
  <button type="button" className="btn btn-danger mx-4" onClick={Clear}>Clear</button>
</div>
    <div className="container">
      <h2 style={{color:props.fontColor}}>Your text summary</h2>
      <p style={{color:props.fontColor}}>{text.split(" ").length} Words and {text.length} Charactors</p>
      <h2 style={{color:props.fontColor}}>Preview</h2>
      <p style={{color:props.fontColor}}>{text}</p>
    </div>

  
    </>
  )
}

