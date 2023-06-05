import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import './App.css';


const App = function () {
  const [items, setItems] = useState([0, 1, 2])
  const [show, setShow] = useState(false)
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  const add = () => {
    setItems([...items, items.length])
    setShow(!show)
  } 

  return (
  <div>
    Projects
    <ul ref={parent}>
      {items.map(
        item => <li key={item}>{ item }</li>
      )}
    </ul>
    <div ref={parent}>  
      <p className="dropdown-label"> Clubfinity</p>
      { show && <p className="dropdown-content" >Lorum ipsum...</p> }
    </div>
    <button onClick={() => add()}>Add number</button>
  </div>
  )
}

export default App;
