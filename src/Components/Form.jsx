import React from 'react'
import { useState } from 'react';

const Form = ({ onhandleItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
      e.preventDefault()

      if(!description) return

      const newData = {
        description,
        quantity,
        id: Date.now(),
        packed: false,
        clear: false
      }

      onhandleItems(newData)
  
      setDescription('')
      setQuantity(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((numSelect) => (
              <option key={numSelect}>{numSelect}</option>
          ))}
          </select>

          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

          <button>ADD</button>
        </span>
      </form>
    </div>
  )
}

export default Form
