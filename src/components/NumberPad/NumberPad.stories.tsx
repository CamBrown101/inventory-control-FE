import React, { useState } from 'react';
import NumberPad from './Numberpad';

export default {
  title: 'Number Pad',
  component: NumberPad,
};

export const Default = () => {
  const [returnValue, setReturnValue] = useState(0);

  return <NumberPad updateFunction={setReturnValue} value={'3'} />;
};
