import React from 'react';

import Options from './options';

const GeneralOptions = (props) => {
  const options = [
    {
      name: 'flights',
      handler: props.actionProvider.calenderSlots,
      id: 1,
    },
  ];

  console.log(props.actionProvider);
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
