import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => { }, [])

  return <h2>Loading...</h2>
  return <h2>Tabs Starter</h2>;
};
export default App;
