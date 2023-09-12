import React, { useEffect } from 'react';
import Select from 'react-dropdown-select';

function AgeDropDown(props) {
  const onChange = (value) => {
    console.log(value);
    props.actionProvider.handleUserAge();
  };
  const options = Array.from({ length: 23 }, (_, index) => {
    return {
      //array from 18 to 40
      value: 18 + index,
      label: 18 + index,
    };
  });

  return (
    <div className='flex items-center justify-center'>
      <Select
        autoFocus
        dropdownGap={1}
        dropdownHeight={'100px'}
        style={{ width: '120px' }}
        options={options}
        onChange={(values) => onChange(values)}
      />
    </div>
  );
}

export default AgeDropDown;
