import { useFetchStats } from "../hooks/useFetchStats";
import NotTop3 from "./NotTop3";
import Top3 from "./Top3";
import Err from "./Error";
import Loading from "./Loading";

const Standing = () => {
  const { data, error, isFetching } = useFetchStats();
  return (
    <>
      {data && (
        <>
          <Top3 data={data.slice(1, 4)} />
          <br />
          <NotTop3 data={data.slice(4)} />
        </>
      )}
      {isFetching && <Loading />}
      {error && <Err />}
    </>
  );
};

export default Standing;
