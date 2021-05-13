type PhotoType = {
  address: string;
  description: string;
};

const Photo = (props: PhotoType) => {
  const { address, description } = props;
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>{description}</article>
    </>
  );
};

export default Photo;
