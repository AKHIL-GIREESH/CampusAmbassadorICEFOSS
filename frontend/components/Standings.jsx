import { useFetchStats } from "../hooks/useFetchStats";
import NotTop3 from "./NotTop3";
import Top3 from "./Top3";
import Err from "./Error";
import Loading from "./Loading";

const Standing = () => {
  const { data, error, isFetching } = useFetchStats();
  return (
    <>
      {isFetching && <Loading />}
      {error && <Err />}
      {data && (
        <>
          <Top3 data={data.slice(1, 4)} />
          <NotTop3 data={data.slice(4)} />
        </>
      )}
    </>
  );
};

export default Standing;
