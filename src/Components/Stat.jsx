import React from 'react';

const Stat = ({ numItems, numPacked, percentage, items }) => {
  if (!items.length) return <em className='text-white m-auto'>Start adding what you need for your journey</em>;

  return (
    <div className='m-auto'>
      {

        <div className='flex items-center'>
          <em className='text-white'>
            {
              percentage === 100 ? 'You have gotton everything you need' :
               `You have ${numItems} on your list, packed ${numPacked} (${percentage}%)`}
          </em>
        </div>
      }
    </div>
  )
}

export default Stat
