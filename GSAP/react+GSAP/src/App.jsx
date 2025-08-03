import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './App.css'
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  // useGSAP(function(){
  //   gsap.from(".container",{
  //     opacity:0,
  //     scale:0,
  //     duration: 0.8,
  //     repeat:-1,
  //     yoyo:true
  //   })
  // })
  const monkey = useRef();
  const randomXAxis = gsap.utils.random(0,1000,3);
  const randomYAxis = gsap.utils.random(0,600,3);
  
  const [moveXAxis, setMoveXAxis] = useState(0);
  const [moveYAxis, setMoveYAxis] = useState(0);
  useGSAP(function(){
    gsap.to(monkey.current,{
      x:moveXAxis,
      y:moveYAxis,
      duration: 2,
      ease: "bounce.out",
    })
  },[moveXAxis,moveYAxis])
  return (
    <>
    <main>
      <button onClick={()=>{
        console.log("clicked");
        setMoveXAxis(randomXAxis);
        setMoveYAxis(randomYAxis);
      }} className='container'>click</button>
      {/* <div className='box'>
       <h1>
        moving box
       </h1>
      </div> */}

      <div className='monkey' ref={monkey}>
        <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_4fae4825289f642c84793a0b3596cc75.webp" alt="" />
      </div>
    </main>
    </>
  )
}

export default App
