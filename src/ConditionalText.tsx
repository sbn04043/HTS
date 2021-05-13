import { useState, ChangeEvent } from 'react';

const ConditionalText = () => {
  const [str, setStr] = useState('');
  const setText = (event: ChangeEvent<HTMLInputElement>) => {
    const morethan5 = event.currentTarget.value;
    if (morethan5.length > 5) setStr(event.currentTarget.value);
    else setStr('');
  };
  return (
    <>
      <input type="text" onChange={setText} />
      <section>{str}</section>
      {str.length > 10 && <>{str}</>}
    </>
  );
};

export default ConditionalText;
