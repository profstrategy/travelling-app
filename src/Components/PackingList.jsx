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

const PackingList = ({ onDeleteItems, onhandleToggle, onClearitems, sortItems }) => {

  return (
    <div className='flex flex-col items-center'>
      <div className='sm:px-10 px-6 basis-3/4'>
        <ul className='flex gap-2 flex-wrap'>
          {sortItems.map((items, index) => (
            <Content {...items} key={index} onDeleteItems={onDeleteItems} onhandleToggle={onhandleToggle} onclearitems={onClearitems} />
          ))}
        </ul>
      </div>

    </div>
  )
}

export default PackingList
