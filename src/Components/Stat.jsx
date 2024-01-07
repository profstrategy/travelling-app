import React from 'react';

const Stat = ({ items }) => {
  const numDeleted = items.filter((item) => item.clear).length;
  if(!items.length) return 'Start adding what you need for your journey'

  
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
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
