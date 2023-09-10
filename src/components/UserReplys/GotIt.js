import React, { useState } from 'react';

function GotIt(props) {
  const [delay, setDelay] = useState(false);
  setTimeout(() => {
    setDelay(true);
  }, 900);

  return (
    <>
      {delay ? (
        <span
          onClick={props.actionProvider.calenderSlots}
          className='p-2 border-2 rounded-md border-sky-300 cursor-pointer'
          // {...props}
        >
          Got it!
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default GotIt;
