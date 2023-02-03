import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QRCode from 'qrcode'
import QrScanner from 'qr-scanner'
import {Html5Qrcode} from 'html5-qrcode'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData]= useState('Contenido codigo')
  const [data2, setData2]= useState('Contenido codigo2')
  const canvasRef = useRef(null)
  const videoRef = useRef()
  const divRef = useRef(null)
  const qrImage = QRCode.toCanvas(canvasRef.current,'holaaaaa', { errorCorrectionLevel: 'H' }, (error,) => {
    if (error) {
      console.log(error);
    }
  })

  const scanner = (decodedText, decodedResult) => {
    setData(decodedResult)
    setData2(decodedText)
  } 
  
  const config = {
    fps: 10,
    qrbox: {
      width: 250,
      height: 250
    }
  }
  
  let html5QrCode;

  useEffect(() => {
    html5QrCode = new Html5Qrcode("reader")
  }, [])

  
  
  return (
    <div className="App" >
      <p>{ data}</p>
      <p>{ data2}</p>
      <div id="reader" ></div>
      <button onClick={() => {
        console.log('click');
        /*   const scanner = new QrScanner(videoRef.current, result => console.log(result), { returnDetailedScanResult: true }) */
        
        html5QrCode.start({ facingMode: "environment" }, config, scanner)
      }}>escanear</button>

      <canvas ref={canvasRef}></canvas>
      <video ref={videoRef} disablePictureInPicture playsInline ></video>
    </div>
  )
}

export default App
