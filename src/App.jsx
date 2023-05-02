import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  // TODO currentItem

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return (<section className="jobs-center">
    <JobInfo jobs={jobs} />
  </section>);
};
export default App;
