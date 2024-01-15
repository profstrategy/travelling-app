import React from 'react'
import { useState } from 'react'

const Content = ({ description, id, packed, quantity, clear, onDeleteItems, onhandleToggle }) => {
  return (
    <>
      <div className={`${packed ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} h-auto mt-3 px-2 rounded`}>
        <ul key={id} className='text-white flex items-center gap-2'>
          <div style={packed ? { textDecoration: "line-through" } : {}} className={`${clear ? 'clear' : ''} flex gap-1`}>
            <input type='checkbox' value={packed} onChange={() => onhandleToggle(id)} onClick={() => setIspacked((isPacked) => !isPacked)} />
            <li>{quantity}</li>
            <li>{description}</li>
          </div>
          <li className={`${packed ? 'visible' : 'hidden'} text-xs`}>Packed</li>
          <li onClick={() => onDeleteItems(id)} value={clear} className={`${clear ? 'hidden' : 'visible'} cursor-pointer`}>❌</li>
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
    <div className='flex flex-col items-center'>
      <div className='sm:px-10 px-6 basis-3/4'>
        <ul className='flex gap-2 flex-wrap'>
          {sortItems.map((items, index) => (
            <Content {...items} key={index} onDeleteItems={onDeleteItems} onhandleToggle={onhandleToggle} onclearitems={onClearitems} />
          ))}
        </ul>
      </div>

      <div className=' px-2 py-2 flex items-center bottom-52 fixed'>
        <div className='left-4 fixed flex gap-2'>
          <h4 className='text-white hidden md:block'>Sort by</h4>
          <select value={sortItem} onChange={(e) => setSortItem(e.target.value)} className='w-100 outline-0 py-1 rounded'>
            <option value='input'>Input order.</option>
            <option value='description'>Alphabetical order. </option>
            <option value='packed'>Number of packed items. </option>
            <option value='quantity'>Ascending order. </option>
          </select>
        </div>

          <button onClick={onClearitems} className="bg-blend-saturation bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 rounded text-white fixed right-4">Clear All</button>
        </div>
    </div>
  )
}

export default PackingList
