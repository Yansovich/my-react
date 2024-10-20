import './style.css'
import React, { useState } from 'react';

// function Button (props) {

//     const {title} = props
     
//     return <button className="btn">{title}</button>
// }


function Button (props) {

    const {title} = props
    const [count, setCount] = useState(0);
    console.log(count);
    
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };
    const textColor = count % 2 === 0 ? 'white' : 'red';
      

    return (
        <div className='container'>
        <button 
            className='btn'
            onClick={handleClick}>{title}{count}
        </button>
          <p 
          className='p'
          style={{ color: textColor }}>
            {textColor}
          </p>
        </div>
      );
};

export default Button;