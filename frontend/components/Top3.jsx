const Top3 = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <>
          {item[2]}
          <br />
        </>
      ))}
    </>
  );
};

export default Top3;
