import React from 'react';

const Options = (props) => {
  return (
    <div className='options'>
      <h1 className='options-header'>{props.title}</h1>
      <div className='options-container'>
        {props.options.map((option) => {
          return (
            <button
              className='option-item'
              onClick={option.handler}
              key={option.id}
            >
              {option.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
