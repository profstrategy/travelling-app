import { useState } from 'react';


import './App.css'
import { Form, PackingList, Stats, ResetSort } from './Components';

function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const [isReceipt, setIsReceipt] = useState(false);
  const [sortItem, setSortItem] = useState("input")

  let sortItems;
  if (sortItem === 'input') sortItems = items;
  if (sortItem === 'description') sortItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortItem === 'packed') sortItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  if (sortItem === 'quantity') sortItems = items.slice().sort((a, b) => a.quantity - b.quantity)

  const initialDisplay = <h1 className='text-center text-white mt-12'>ADD ITEMS FOR YOUR JOURNEY</h1>

  const handleAddingItems = (addItem) => {
    setItems((items) => [...items, addItem])
  }

  const handleDelete = (id) => {
    setItems((items) => items.filter(item => item.id !== id))
    setIsReceipt('')
  }

  const handleToggle = (id) => {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearItems = () => {
    setItems([])
    setIsReceipt('')
  }

  const handleReceipt = () => {

    setIsReceipt(!isReceipt);
  };
  return (
    <div>
      <div className='bg-black shadow-sm shadow-zinc-300  h-10'>
        <h1 className=' text-[2rem] text-white grid justify-center'>TRAVELLING APP🚍</h1>
      </div>
      <div className='header'>
        <div className='z-50 row-span-1 w-5/6 sm:w-5/6 m-auto lg:w-4/6 relative bottom-5
      '>
          <Form onhandleItems={handleAddingItems} numItems={numItems} items={items} />
          <div className='rounded m-auto w-full md:w-5/6 lg:w-3/4 overflow-y-auto h-40 max-h-40 bg-black bg-opacity-70 shadow-sm shadow-zinc-300 mt-2'>

            {numItems === 0 ? initialDisplay : <PackingList onDeleteItems={handleDelete} onhandleToggle={handleToggle} sortItems={sortItems} />}
          </div>

        </div>

        <div className='fixed z-10 bg-black bg-opacity-70 shadow-sm shadow-zinc-300  items-center bottom-0 w-full flex flex-col md:flex-row justify-between px-3'>
          <ResetSort onClearitems={handleClearItems} sortItem={sortItem} setSortItem={setSortItem} handleReceipt={handleReceipt} numItems={numItems} isReceipt={isReceipt} numPacked={numPacked} percentage={percentage} />

          <div>
            <Stats numItems={numItems} numPacked={numPacked} percentage={percentage} items={items} />
          </div>
        </div>
        </div>
        </div>

        )
}

        export default App
