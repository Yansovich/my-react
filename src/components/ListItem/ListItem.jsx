import './style.css'
import React, { useState } from 'react';

function ListItem ({item}) {
  const [isOpen, setIsOpen] = useState(false);

  const showSubItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <li>
      <div onClick={showSubItems} style={{ cursor: 'pointer' }}>
        {item.label} {item.subItems && (isOpen ? '►' : '▼')}
      </div>
      {isOpen && item.subItems && (
        <ul>
          {item.subItems.map((subItem, index) => (
            <li key={index}>{subItem}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default ListItem;