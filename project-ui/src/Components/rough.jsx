import React, { useState } from 'react'

export const Rough = (props) => {

      const [value, setValue] = useState(0);
      
  return (
    
            <div>Hello {props.name}
    <button onClick={ ()=> {setValue(value + 1)}}> click</button>
    <p>Value: {value}</p>
    </div>
  )
}


