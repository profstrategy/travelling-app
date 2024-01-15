import React, { useState } from 'react';
import Button from './Button';

const Form = ({ onhandleItems, numItems, numPacked, percentage, onShowItems, handleRecipt, isRecipt }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newData = {
      description,
      quantity,
      id: Date.now(),
      packed: false,
      clear: false
    };

    onhandleItems(newData);

    setDescription('');
    setQuantity(1);
  };



  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='w-full md:w-5/6'>
        <div className='flex items-center justify-center gap-3'>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className='py-2 outline-0 shadow-md shadow-zinc-300 shadow-sm rounded'
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((numSelect) => (
              <option key={numSelect}>{numSelect}</option>
            ))}
          </select>

          <input
            type='text'
            value={description}
            onClick={onShowItems}
            onChange={(e) => setDescription(e.target.value)}
            className=' w-5/6 md:w-3/4 py-2 rounded outline-0 shadow-zinc-300 shadow-sm'
          />

          <Button
            onClick={() => setShowReceipt(!showReceipt)}

            bgColor='gradient-to-r from-cyan-500 to-blue-500'
            px={'6'}
            py={'2'}
            shadowCol={'zinc-300'}
          >
            ADD
          </Button>
          <div className='fixed bottom-10 z-20 left-4'>

            {isRecipt? (
              <>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 top-5 rounded relative left-40'>
                  <ul className='text-white'>
                    <li className='border-b-2'>Total-items: {numItems}</li>
                    <li className='border-b-2'>Packed-items: {numPacked}</li>
                    <li className={`border-b-2 ${percentage < 50 ? 'text-red-600' : 'text-green-900'}`}>Percentage: {percentage}%</li>
                  </ul>
                </div>

              </>
            ) : null}

            {numItems ? (
              <Button
                onClick={handleRecipt}
                bgColor='gradient-to-r from-cyan-500 to-blue-500'
                px={'6'}
                py={'2'}
                shadowCol={'zinc-300'}
                z_index={'50'}
                saturation={'blend-saturation'}
                bottom={'20'}
              >Your Receipt</Button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
