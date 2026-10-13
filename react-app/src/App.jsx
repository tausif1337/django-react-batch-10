import { useRef } from "react";

function App() {
  const boxRef = useRef(null)
  const h1Ref = useRef(null)
  //reference

  function changeColor() {
    boxRef.current.style.backgroundColor = "red"
    boxRef.current.style.color = "Black"
    h1Ref.current.style.fontWeight = "bold"
  }

  return (
    <div>
      <div ref ={boxRef} 
      style={{ backgroundColor: "blue", color: "white" }}>
        <p>Use Ref</p>
      </div>

      <h1 ref={h1Ref}>Hello React</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
export default App;
