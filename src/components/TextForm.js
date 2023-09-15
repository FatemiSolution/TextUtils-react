import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('changed into upperCase','success')
    }
    const handledeleteCase = ()=>{
        let newText = ''
        setText(newText)
    }
    const handleLowCase = ()=>{
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert('changed into lowerCase','success')
    }
    const handleOnChange = (event)=>{
         setText(event.target.value)
    }
    const [text, setText] = useState("")
                                                 //code for word count
    function wordCount(text) {
        const regex = /\S+/g;
        return text.replace(/\s+/g, " ").trim().match(regex).length;
      }
      function color(){
        if(props.Mode ==='dark'){
            if(document.body.classList.contains('bg-primary')){
                return 'blue'
            }
            if(document.body.classList.contains('bg-danger')){
                return 'red'
            }
            if(document.body.classList.contains('bg-warning')){
                return 'yellow'
            }else{
                return "white"
            }
        }else {
            return "black"
        }

      }
      
  return (
      <div className="container" style={{color:color()}}>
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label"><h2>{props.title}</h2></label>
                <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'grey':'white'}}  id="textBox" rows="10"></textarea>    
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handledeleteCase}>delete text</button>
            <h2 className='my-2'>Your Text Summary</h2>
            <span>{text && wordCount(text) } words and {text.length} characters</span>
            <br />
            <span>{Math.round((0.05 * text.split(' ').length)*100)/100} minutes to read the word</span>
            <h2>Preview</h2>
            <p>{text}</p>
            
        </div>

  )
}
