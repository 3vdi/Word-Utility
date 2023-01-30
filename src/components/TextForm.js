import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleDownClick =()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const spaceremove =(event)=>{
        setText(text.split(" ").join(""))
        props.showAlert("spaces removed", "success");
    }
    const cleartext =()=>{
      let newText='';
      setText(newText)
      props.showAlert("text cleared", "success");
  }
    const copyContent =(event)=> {
        try {
          navigator.clipboard.writeText(text);
          props.showAlert('Content copied to clipboard', 'success');
        } catch (err) {
          props.showAlert('Failed to copy: ', err);
        }
      }
      function wordlng(text) {
        // if (text===''){
        // return text.split(" ").length-1 
        // }else if (text===' '){
        //     return text.split(" ").length-1 
        // }else{
        // return text.split(" ").length 
        // }  
        const arr = text.split(' ');

        return arr.filter(word => word !== '').length;
      }
      function charleng(text){
      var regex = /\S/g;
      return text.split(regex).length - 1;
      }

    const [text, setText] = useState('enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div class="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#16121f', color: props.mode==='light'?'black':'white'}}
   id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-success mx-2 my-2" onClick={handleDownClick}>convert to lowercase</button>
<button className="btn btn-danger mx-2 my-2" onClick={spaceremove}>remove spaces</button>
<button className="btn btn-warning mx-2 my-2" onClick={copyContent}>copy to clipboard</button>
<button className="btn btn-dark mx-2 my-2" onClick={cleartext}>clear text</button>
</div>
<div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>text summary</h1>
    <p>{wordlng(text)} words and {charleng(text)} charecters</p>
</div>
</>
  )
}
