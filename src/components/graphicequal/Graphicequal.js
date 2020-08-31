import React, {useContext, useEffect, useState, useRef} from "react";
import Styles from "./Graphicequal.module.css"


function Graphicequal(){
    const [myAudio, setMyAudio] = useState();
    const canvRef = useRef(null)
    const contextRef = useRef(null)

    
    
    
    
    
    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createAnalyser();
    const gainNode = audioCtx.createGain()
    //navigator.mediaDevices.stream().then((e)=>{
    // audioCtx.createMediaStreamSource(e).connect(analyser)
     //gainNode.gain.setValueAtTime(1, audioCtx.currentTime)
    
    //})
    //navigator.mediaDevices.
    //getDisplayMedia().then((e)=>{
    //getUserMedia({audio: true, video: false}).then((e)=>{
    
    //audioCtx.createMediaStreamSource(e).connect(gainNode).connect(analyser)
    //gainNode.gain.setValueAtTime(1, audioCtx.currentTime)
    //analyser.connect(audioCtx.destination)
    
    
    //})
    //setInterval(()=>{
    //navigator.mediaDevices.getUserMedia({audio: true, video: false}).then((e)=>setMyAudio(audioCtx.createMediaStreamSource(e)))
    //console.log(myAudio)
    
    
    //analyser.fftSize = 2048;
    //var bufferLength = analyser.frequencyBinCount;
    //var dataArray = new Uint8Array(bufferLength);
    //analyser.getByteFrequencyData(dataArray)
    


    //}, 10000)
    
    //let options = {
     // mediaStream: stream

    //}
    //const fish = document.querySelector("iframe")
    //let source = audioCtx.createMediaStreamSource()

   //  setMyAudio(fish)
    //setInterval(()=> console.log(audioCtx)    , 20000)
   
      
    //navigator.mediaDevices.getUserMedia ({audio: true, video: true})
   // if (myAudio !== undefined && myAudio !==0){
    //console.log(myAudio)
    //var stream =  myAudio.src
    //var source = audioCtx.createMediaStreamSource(stream);
    //
    
    // ...
    //setInterval(()=>{
    //analyser.fftSize = 2048;
    //var bufferLength = analyser.frequencyBinCount;
    //var dataArray = new Uint8Array(bufferLength);
    //analyser.getByteFrequencyData(dataArray)
    //console.log(dataArray)
    //}, 10000)}
    
    // Get a canvas defined with ID "oscilloscope"
    //var canvas = document.getElementById("oscilloscope");
    useEffect(()=>{
    const canvas = canvRef.current
    const context = canvas.getContext("2d");    
    contextRef.current = context
    analyser.smoothingTimeConstant=0;
    setTimeout(()=>{
    //navigator.mediaDevices.getDisplayMedia().then((e)=>{
    navigator.mediaDevices.getUserMedia({audio: true, video: false}).then((e)=>{
    
      audioCtx.createMediaStreamSource(e).connect(gainNode).connect(analyser)
      gainNode.gain.setValueAtTime(1, audioCtx.currentTime)})
    draw()

    function draw() {
      //navigator.mediaDevices.getDisplayMedia().then((e)=> console.log(e))
      
      
      
     
      //analyser.fftSize = 2048;
      //var bufferLength = analyser.frequencyBinCount;
      
      //analyser.getByteFrequencyData(dataArray)
      const xw=window.innerWidth
      const xh=window.innerHeight
      
      analyser.fftSize = 512;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray)
      //analyser.getByteFrequencyData(dataArray)

      var gradient = contextRef.current.createLinearGradient(0, 0, 1000, 0);
      gradient.addColorStop("0", "black");
      gradient.addColorStop("0.5" ,"white");
      gradient.addColorStop("1.0", "grey");
    
      contextRef.current.fillStyle = "rgb(200, 200, 200, 0)";
      contextRef.current.fillRect(0, 0, xw, xh);
    
      contextRef.current.lineWidth = 1;
      contextRef.current.strokeStyle = gradient;
    
      contextRef.current.beginPath();
    
      var sliceWidth = xw * 1.0 / bufferLength;
      var x = 0;
    
      for (var i = 0; i < bufferLength; i++) {
    
        var v = dataArray[i] / 128.0;
        var y = (v * xh / 2);
    
        if (i === 0) {
          contextRef.current.moveTo(x, y);
        } else {
          contextRef.current.lineTo(x, y);
        }
    
        x += sliceWidth;
        dataArray[i]=[]
      }
    
      contextRef.current.lineTo(xw, xh / 2);
      contextRef.current.stroke();
     
  	setTimeout(()=>
      {contextRef.current.clearRect(0, 0, xw, xh)
      draw()
      
      }, 200)
      
      


  }}, 1000)
    }, [])
    // draw an oscilloscope of the current audio source
    
    
    


return (
    <div className={Styles.canvasContainer}>
      <canvas width={window.innerWidth} height={window.innerHeight} ref={canvRef}></canvas></div>

)}

export default Graphicequal;
