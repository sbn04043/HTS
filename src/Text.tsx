type TextType = {
  text: string;
  type: string;
};

const Text = (textType: TextType) => {
  const { text, type } = textType;
  return (
    <>
      {type === 'bold' && <strong>{text}</strong>}
      {type === 'header' && <h1>{text}</h1>}
    </>
  );
};

export default Text;
