import React from 'react'

import Button from './Button'

const ResetSort = ({ onClearitems, sortItem, setSortItem, handleReceipt, numItems, isReceipt, numPacked, percentage }) => {

    return (
        <>
            <div className='flex justify-between items-center gap-2 flex-wrap'>

                {numItems ? (
                    <Button
                        onClick={handleReceipt}
                        bgColor='gradient-to-r from-cyan-500 to-blue-500'
                        px={'6'}
                        py={'2'}
                        shadowCol={'zinc-300'}
                        z_index={'50'}
                        saturation={'blend-saturation'}

                    >Your Receipt</Button>
                ) : null}


                <div className='flex gap-2'>
                    <h4 className='text-white hidden md:block'>Sort by</h4>
                    <select value={sortItem} onChange={(e) => setSortItem(e.target.value)} className='w-100 outline-0 py-1 rounded'>
                        <option value='input'>Input order.</option>
                        <option value='description'>Alphabetical order. </option>
                        <option value='packed'>Number of packed items. </option>
                        <option value='quantity'>Ascending order. </option>
                    </select>
                </div>


                {isReceipt ? (
                    <>

                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 rounded md:w-1/6 fixed bottom-28 md:bottom-10 w-3/6 left-40 '>
                            <ul className='text-white'>
                                <li className='border-b-2'>Total-items: {numItems}</li>
                                <li className='border-b-2'>Packed-items: {numPacked}</li>
                                <li className={`border-b-2 ${percentage < 50 ? 'text-red-600' : 'text-green-900'}`}>Percentage: {percentage}%</li>
                            </ul>
                        </div>

                    </>
                ) : null}


                <button onClick={onClearitems} className="bg-blend-saturation bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 rounded text-white col-span-1  h-fit ">Clear All</button>
            </div>
        </>
    )
}

export default ResetSort
