import React from 'react';

const Stat = ({ numItems, numDeleted, numPacked, percentage, items }) => {
  if(!items.length) return 'Start adding what you need for your journey';

  return (
    <div className='sm:px-24 px-6'>
      {
      
        <div>
          <em>
            {
            percentage === 100 ? 'You have gotton everything you need':
             numDeleted >= 1 ? 
              `You have ${numItems} on your list, packed ${numPacked} (${percentage}%) items already and removed ${numDeleted} item(s)` : `You have ${numItems} on your list, packed ${numPacked} (${percentage}%)`}
          </em>
        </div>
      }
    </div>
  )
}

export default Stat
