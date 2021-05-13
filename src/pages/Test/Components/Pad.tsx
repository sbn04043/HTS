type padType = {
  keyName: string;
  callback: (keyName: string) => void;
};

const Pad = (props: padType) => {
  const { keyName, callback } = props;
  return <button onClick={() => callback(keyName)}>{keyName}</button>;
};

export default Pad;
