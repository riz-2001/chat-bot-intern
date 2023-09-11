import React from 'react';

function TimeSlot({ time, handleClickOnTime }) {
  return (
    <div className='flex align-middle flex-nowrap justify-evenly'>
      {time.map((t, i) => {
        return (
          <span
            key={i}
            onClick={() => {
              handleClickOnTime(t,i);
            }}
            className='text-gray-400 border-2 p-1 rounded-md whitespace-nowrap hover:bg-sky-500 hover:text-white cursor-pointer'
          >
            {t}
          </span>
        );
      })}
    </div>
  );
}

export default TimeSlot;
