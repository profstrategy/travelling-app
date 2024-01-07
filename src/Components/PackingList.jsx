import React from 'react'
import { useState } from 'react'

const Content = ({ description, id, packed, quantity, clear, onDeleteItems, onhandleToggle }) => {
  return (
    <>
      <div>
        <span>

          <li key={id}>
            <span style={packed ? { textDecoration: "line-through" } : {}} className={`${clear ? 'clear' : ''}`}>
              <input type='checkbox' value={packed} onChange={() => onhandleToggle(id)} />
              {quantity} &nbsp;
              {description}
              <button onClick={() => onDeleteItems(id)} value={clear}>❌</button>
            </span>
          </li>
        </span>
      </div>
    </>
  )
}

const PackingList = ({ items, onDeleteItems, onhandleToggle, onClearitems }) => {
  const [sortItem, setSortItem ] = useState("input")
  let sortItems;
  if(sortItem === 'input') sortItems = items;
  if(sortItem === 'description') sortItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  if(sortItem === 'packed') sortItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  if(sortItem === 'quantity') sortItems = items.slice().sort((a,b) =>a.quantity - b.quantity)

  return (
    <>
      <div>
        <ul>
          {sortItems.map((items, index) => (
            <Content {...items} key={index} onDeleteItems={onDeleteItems} onhandleToggle={onhandleToggle} onclearitems={onClearitems} />
          ))}
        </ul>
      </div>

      <div>
        <span>
            Sort By:
          <select value={sortItem} onChange={ (e) => setSortItem(e.target.value)}>
            <option value='input'>Input order.</option>
            <option value='description'>Alphabetical order. </option>
            <option value='packed'>Number of packed items. </option>
            <option value='quantity'>Ascending order. </option>
          </select>
          <button onClick={onClearitems}>Clear All</button>
        </span>
      </div>
    </>
  )
}

export default PackingList
