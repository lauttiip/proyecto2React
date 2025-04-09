import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled]=useState(false)
  const [position, setPosition]= useState({x: -20 , y:-20})

  useEffect(()=>{
    const handleMove = (event)=> {
      const { clientX,clientY}=event

      setPosition({x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    return ()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])

  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#011',
          border:"1px solid #000",
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents:'none',
          left:"-25px",
          top:"-25px",
          width: 50,
          height:50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }/>
        <button onClick={()=> setEnabled(!enabled)}>
          { enabled ? 'Desactivar': 'Activar'} seguimiento del puntero
        </button>
    </main>
  )
}

export default App
