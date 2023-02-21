import React,{useState} from 'react'

export default function Textform(props) {
    const [text, settext] = useState('');
    const { mode } = props;
    const [textAreaStyles, setTextAreaStyles] = useState({});
    

    const handleOnChange=(event)=>{
        settext(event.target.value)
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to UPPERCASE!", "success");
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied Text!", "success");
    }

    const handleClear=()=>{
        let ntxt='';
        settext(ntxt);
        props.showAlert("Cleared Text!", "success");
    }

    const handleExtraSpaces=()=>{
        let nwtxt=text.split(/[ ]+/)
        settext(nwtxt.join(" "));
        props.showAlert("Cleared Extra Spaces!", "success");
    }

    const handlespeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking...", "success");
      }

  return (
    <>
    <div>
        <h1 className='mx-4 my-3'>{props.heading}</h1>
    <div className="form-floating mx-5" style={{ margin: "30px auto", width: "50%" } } >

<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{ ...textAreaStyles, height: "300px", backgroundColor: mode === "dark" ? "#333" : "white",
    color: mode === "dark" ? "white" : "#042743", }}></textarea>
    <div>
    <button disabled={text.length===0} onClick={handleUpClick} type="button" className="btn btn-primary mx-3 my-3">Upper Case</button>
    <button disabled={text.length===0} onClick={handleLowClick} type="button" className="btn btn-primary mx-3">Lower Case</button>
    <button disabled={text.length===0} onClick={handleCopy} type="button" className="btn btn-primary mx-3">Copy Text</button>
    <button disabled={text.length===0} onClick={handleClear} type="button" className="btn btn-primary mx-3">Clear Text</button>
    <button disabled={text.length===0} onClick={handleExtraSpaces}type="button" className="btn btn-primary mx-3">Clear Extra Spaces</button>
    <button disabled={text.length===0} onClick={handlespeak} type="button" className="btn btn-primary mx-3">Speak</button>
    </div>
</div>
</div>
    <h2 className='mx-4 my-3' >Your Text Summary</h2>
    <div className=" align-items-center" style={{fontSize: "22px", fontFamily: "Consolas"  }}>
    <p className='mx-5'> Total number of Words     : <strong>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}</strong></p>
    <p className='mx-5'>Total number of Characters  :  <strong>{text.length}</strong> </p>
    <p className='mx-5'>Time to read : <strong>{text.length === 0 ? '0 Minutes' : (0.008 * text.split(" ").length).toFixed(2) + ' Minutes'}</strong></p>   
</div>
<h2 className='mx-4 my-3'>Preview of your Text &#x1F447;</h2>
<p className='mx-4 my-3' style={{ margin: '0px', fontSize: '18px'}}>{text}</p>
</>
  )
}
