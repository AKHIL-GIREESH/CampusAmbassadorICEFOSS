const NotTop3 = ({ data }) => {
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

export default NotTop3;
