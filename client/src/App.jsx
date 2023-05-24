import { useQuery } from "react-query";
import axios from "axios";

const apiResponse = () => axios.get("http://localhost:9000");

const App = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: "api-response",
    queryFn: apiResponse,
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <h1>{data?.data?.message}</h1>;
};

export default App;
