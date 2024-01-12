import { useState } from 'react';


import './App.css'
import { Form, PackingList, Stats } from './Components';
import { bg_2 } from './assets'

function App() {

  const [items, setItems] = useState([]);

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const numDeleted = items.filter((item) => item.clear).length;

  const handleAddingItems = (addItem) => {
    setItems((items) => [...items, addItem])
  }

  const handleDelete = (id) => {
    setItems((items) => items.map(item => item.id === id ? { ...item, clear: !item.clear } : item))
  }

  const handleToggle = (id) => {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearItems = () => {
    setItems([])
  }

  return (
    <div className='relative flex justify-center'>
      {/* <img src={bg_2} alt='background' className=' z-0 absolute top-40 md:top-40 min-h-screen w-full' /> */}
      <div className=' relative z-0 left-10 right-10 md:left-24 md:right-24 lg:right-52 lg:left-52 top-28 w-full'>
        <Form onhandleItems={handleAddingItems} numItems={numItems} numDeleted={numDeleted} numPacked={numPacked} percentage={percentage} items={items} />
        </div>


        <div className=' absolute bg-[#252422] opacity-1 rounded min-h-40 z-[-1] mt-2 left-10 right-10 md:left-24 md:right-24 lg:right-52 lg:left-52 top-32'>
          <PackingList items={items} onDeleteItems={handleDelete} onhandleToggle={handleToggle} onClearitems={handleClearItems} />
        </div>

      <Stats numItems={numItems} numDeleted={numDeleted} numPacked={numPacked} percentage={percentage} items={items} />
    </div>

  )
}

export default App
