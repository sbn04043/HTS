import { useState, ChangeEvent } from 'react';

const HiddenName = () => {
  const [name, setName] = useState<string>('');

  const setHiddenName = (event: ChangeEvent<HTMLInputElement>) => {
    let Hidden = event.currentTarget.value;
    const EA = Hidden.length - 2;
    if (EA > 0) {
      const first = Hidden.substring(0, 1);
      const star = '*'.repeat(EA);
      const last = Hidden.substring(Hidden.length - 2, Hidden.length - 1);
      setName((Hidden = first + star + last));
    } else setName('');
  };

  return (
    <section>
      <input type="text" onChange={setHiddenName} />
      <br />
      <>{name.length >= 3 ? <>{name}</> : ''} </>
    </section>
  );
};

export default HiddenName;
