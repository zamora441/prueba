import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QRCode from 'qrcode'
import QRScanner from 'cordova-plugin-qrscanner'

function App() {
  const [count, setCount] = useState(0);
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const divRef = useRef(null)

  const qrImage = QRCode.toCanvas(canvasRef.current,'holaaaaa', { errorCorrectionLevel: 'H' }, (error,) => {
    if (error) {
      console.log(error);
    }
  })

  const done = (error, status) => {
    if (error) {
    console.log(error._message);
    }
  }
  
  const displayContents = (error, content) => {
    if(error){
      console.log(error._message);
    } else {
      console.log(content);
    }
  }


  return (
    <div className="App" ref={divRef}>
      <button onClick={() => {
        console.log('click');
        QRScanner.scan(displayContents)
        QRScanner.show(status => {
          console.log(status);
        })
      }}>escanear</button>

      <canvas ref={canvasRef}></canvas>

      <video ref={videoRef} ></video>
    </div>
  )
}

export default App
