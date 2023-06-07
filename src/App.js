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

  // return (
  // <div>
  //   Projects
  //   <ul ref={parent}>
  //     {items.map(
  //       item => <li key={item}>{ item }</li>
  //     )}
  //   </ul>
  //   <div ref={parent}>  
  //     <p className="dropdown-label"> Clubfinity</p>
  //     { show && <p className="dropdown-content" >Lorum ipsum...</p> }
  //   </div>
  //   <button onClick={() => add()}>Add number</button>
  // </div>
  // )

  return (
    <div className="mainFlex">
      <h1>
        If you're seeing this...
      </h1>
      <h2>
        ...this site is still under construction.
      </h2>
      <p>
        In the meantime,
      </p>
      <p>
        &nbsp; Check out my projects on&nbsp;
        <a href="https://github.com/MaximilianMeiler">GitHub</a>
        ,
      </p>
      <p>
        &nbsp; And feel free to reach out on&nbsp;
        <a href="https://www.linkedin.com/in/maximilian-meiler/">LinkedIn</a>
        .
      </p>

    </div>
  )
}

export default App;
