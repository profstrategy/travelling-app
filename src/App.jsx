import { useState } from 'react';


import './App.css'
import { Form, PackingList, Stats } from './Components';

function App() {

  const [items, setItems] = useState([]);

  const handleAddingItems = (addItem) => {
    setItems((items) => [...items, addItem])
   }
   
   const handleDelete = (id) => {
    setItems((items) => items.map(item => item.id === id ? {...item, clear: !item.clear} : item))
   }

   const handleToggle = (id) => {
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
   }

   const handleClearItems = () => {
    setItems([])
   }

  return (
      <div>
        <Form onhandleItems= {handleAddingItems} />
        <PackingList items= {items} onDeleteItems={handleDelete} onhandleToggle={handleToggle} onClearitems={handleClearItems} />
        <Stats items={items} />
       </div>
  )
}

export default App
