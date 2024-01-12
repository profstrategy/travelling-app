import React from 'react'
import { useState } from 'react'

const Content = ({ description, id, packed, quantity, clear, onDeleteItems, onhandleToggle }) => {
  const [isPacked, setIspacked] = useState('')
  return (
    <>
      <div className={`${packed ? 'bg-red-500' : 'bg-green-500'}`}>
        <ul key={id} className='text-white flex items-center gap-2'>
          <div style={packed ? { textDecoration: "line-through" } : {}} className={`${clear ? 'clear' : ''} flex gap-1`}>
            <input type='checkbox' value={packed} onChange={() => onhandleToggle(id)} onClick={() => setIspacked((isPacked) => !isPacked)} />
            <li>{quantity}</li>
            <li>{description}</li>
          </div>
          <li className={`${packed ? 'visible' : 'hidden'} text-xs`}>Packed</li>
          <li onClick={() => onDeleteItems(id)} value={clear}>❌</li>
        </ul>
      </div>
    </>
  )
}

const PackingList = ({ items, onDeleteItems, onhandleToggle, onClearitems }) => {
  const [sortItem, setSortItem] = useState("input")
  let sortItems;
  if (sortItem === 'input') sortItems = items;
  if (sortItem === 'description') sortItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortItem === 'packed') sortItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  if (sortItem === 'quantity') sortItems = items.slice().sort((a, b) => a.quantity - b.quantity)

  return (
    <>
      <div className='sm:px-24 px-6'>
        <ul>
          {sortItems.map((items, index) => (
            <div className='flex flex-row'>
            <Content {...items} key={index} onDeleteItems={onDeleteItems} onhandleToggle={onhandleToggle} onclearitems={onClearitems} />
            </div>
          ))}
        </ul>
      </div>

      <div className='sm:px-24 px-6'>
        <div className='flex justify-end'>
          <div className='absolute bottom-8 right-8'>
            <h4 className='text-white'>Sort</h4>
            <select value={sortItem} onChange={(e) => setSortItem(e.target.value)} className='w-100 outline-0 py-1 rounded'>
              <option value='input'>Input order.</option>
              <option value='description'>Alphabetical order. </option>
              <option value='packed'>Number of packed items. </option>
              <option value='quantity'>Ascending order. </option>
            </select>
          </div>

          <button onClick={onClearitems} className="bg-blend-saturation bg-blue-600 absolute left-8 bottom-8 px-4 py-1.5 rounded text-white">Clear All</button>
        </div>
      </div>
    </>
  )
}

export default PackingList
