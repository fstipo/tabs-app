import Duties from "./Duties";

const JobInfo = ({ jobs }) => {
    const { company, title, dates, duties } = jobs[0];
    console.log(jobs.at(0))
    return (
        <article >
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
        </article>
    )
}
export default JobInfo