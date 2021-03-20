import React, { useState } from 'react';
import NumberPad from './Numberpad';

export default {
  title: 'Number Pad',
  component: NumberPad,
};

export const Default = () => {
  const [returnValue, setReturnValue] = useState(0);

  return (
    <NumberPad
      updateFunction={setReturnValue}
      returnValue={returnValue}
      value={'3'}
      itemName="Absolut"
      measurementType="ml (bottle)"
      measurementValue={750}
    />
  );
};
