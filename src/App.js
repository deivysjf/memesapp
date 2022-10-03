import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [images, setImages] = useState('fire');

  const onchangeLinea1 = function (event) {
    setLinea1(event.target.value)
  };

  const onchangeLinea2 = function (event) {
    setLinea2(event.target.value)
  };
  const onChangeImages = function (event) {
    setImages(event.target.value)
  };

  const onChangeExport = function (event) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'memes.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <h1>Create Meme</h1>
      <div className='container'>
        <select className='selectImage' onChange={onChangeImages}>
          <option value="fire">Burning House</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="Philosoraptor">Philosoraptor</option>
          <option value="Smartguy">Smart Guy</option>
        </select> <br />
        <input className='inputBox' onChange={onchangeLinea1} type="text" placeholder='Write Your Top Text Here' />
        <input className='inputBox' onChange={onchangeLinea2} type="text" placeholder='Write Your Bottom Text Here' />
      </div><br />
      <div className="memes" id='meme'>
        <span>{linea1}</span>
        <span className='spanBottom'>{linea2}</span>
        <img src={"/memesapp/img/" + images + ".jpg"} />
      </div>
      <button onClick={onChangeExport}>Make MEME</button>
    </div>
  );
}

export default App;
