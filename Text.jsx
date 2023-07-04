import React, { useState } from 'react'

export default function Text(props) {
  const upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const Copy = () => {
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const ExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
  }
  const onchange = (event) => {
    setText(event.target.value);
  }
  const Reset = () => {
    setText('Enter here');
  }
  const [text, setText] = useState('Enter here')

  const [btnText, setBtnText] = useState('DarkMode')

  const [myStyle, setmyStyle] = useState({

    color: "black",
    backgroundColor: 'white'
  }

  )
  /*const switchtheme=()=>{
      
      if (myStyle.color==='black'){
          setmyStyle({
              
              color:"white",
              backgroundColor:'black'

          }
          document.body.style.backgroundColor:'dark;
          
          )
          setBtnText('LightMode')
          }
      else{
          
          setmyStyle({
              color:"black",
              backgroundColor:'white'
          }
          document.body.style.backgroundColor:'white';
          )
          setBtnText('DarkMode');
      }
      <button type="button" className="btn btn-dark" onClick={switchtheme}>{btnText}</button>
          
      }*/



  return (

    //<div style={myStyle}>
    <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

      <div className="mb-3">
        <h2>Welcome to TEXT_CONVERTER</h2>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={onchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>

        <button className="btn btn-primary mx-1 " onClick={upper} >To_Upper</button>
        <button className="btn btn-primary mx-1" onClick={lower} >To_Lower</button>
        <button className="btn btn-primary mx-1" onClick={ExtraSpace} >Remove extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={Reset} >Reset</button>
        <button className="btn btn-primary mx-1" onClick={Copy} >CopyText</button>

        <div className='container'>
          <h3>Summary!</h3>
          <div>{text.split(" ").length} words and {text.length} characters</div>
          <div>{0.008 * text.split(" ").length} Minutes to read</div>
          <h4 className="my-2">Preview!</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
