import React from 'react'
import { useState } from 'react';
import '../App.css'

const Form = ({ onhandleItems, numItems, numDeleted, numPacked, percentage }) => {
  const [isReciept, setIsreceipt] = useState(false);
  const [showReciept, setShowReceipt] = useState(false)
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [download, setDownload] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) return

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

  const handleReceipt = (ev) => {
    if (!numItems) return alert('Input the items you need for your journey')

    setIsreceipt(!ev)
  }

  const handleDownload = () => {
    setDownload(!download)
  }

  return (
    <div className='sm:px-24 px-6'>
      <div className='flex justify-center items-center gap-5'>
      <form onSubmit={handleSubmit}>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='border-4 border-black w-70'>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((numSelect) => (
                <option key={numSelect}>{numSelect}</option>
              ))}
            </select>

            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border-2 sm:px-10" />

            <button onClick={() => setShowReceipt(!showReciept)} className="bg-black text-white border-2 px-5 py-2">ADD</button>

            {numItems ?
              <button onClick={() => handleReceipt(isReciept)}>Your Receipt</button> : ''
            }

            {isReciept ?
              <>
                <div>
                  <ul>
                    <li>Total-items: {numItems}</li>
                    <li>Packed-items: {numPacked}</li>
                    <li>Percentage: {percentage}%</li>
                    <li>Deleted-items: {numDeleted}</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => handleDownload()}>Download</button>
                  {download && <p>Hey! friend before you download your reciept follow me on on by clicking on the these icons</p>}
                </div>
              </>
              : ''
            }
      </form>
      </div>
      </div>
  )
}

export default Form
