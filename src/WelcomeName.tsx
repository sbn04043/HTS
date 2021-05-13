import { useState, ChangeEvent } from 'react';

const WelcomeName = () => {
  const [name, setName] = useState('');
  const setWelcome = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const resultName = name + ' 환영합니다.';
  return (
    <section>
      <input type="text" onChange={setWelcome} />
      <br />
      {resultName}
    </section>
  );
};

export default WelcomeName;
