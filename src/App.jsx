import { useState } from 'react';


import './App.css'
import { Form, PackingList, Stats } from './Components';

function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const [isReceipt, setIsReceipt] = useState(false);

  const initialDisplay = <h1 className='m-auto text-white'>ADD ITEMS FOR YOUR JOURNEY</h1>

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
      <div className='relative bg-black shadow-sm shadow-zinc-300 w-full h-10 flex items-center justify-center'>
        <h1 className=' text-[2rem] text-white'>TRAVELLING APP🚍</h1>
      </div>
      <div className='relative header flex justify-center items-center flex-col'>
        <div className='z-10 w-5/6 md:w-3/4 flex justify-center flex-col
      relative bottom-20 '>
          <Form onhandleItems={handleAddingItems} numItems={numItems} numPacked={numPacked} percentage={percentage} items={items} handleRecipt={handleReceipt} isRecipt={isReceipt} />
          <div className='rounded relative m-auto w-full md:w-5/6 lg:w-3/4 flex flex-col items-baseline gap-14 mt-2 bottom-5 overflow-y-auto h-40 max-h-40 bg-black bg-opacity-70 shadow-sm mt-8 shadow-zinc-300'>

            {numItems === 0 ? initialDisplay : <PackingList items={items} onDeleteItems={handleDelete} onhandleToggle={handleToggle} onClearitems={handleClearItems} />}
          </div>

        </div>

        <div className='fixed z-10 bg-black bg-opacity-70 shadow-sm shadow-zinc-300 flex  items-center bottom-0 w-full h-10'>
          <Stats numItems={numItems} numPacked={numPacked} percentage={percentage} items={items} />
        </div>
      </div>
    </div>
  )
}

export default App
