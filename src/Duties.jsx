import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from "react-icons/fa"

const Duties = ({ duties }) => {
    const id = uuidv4();

    return (
        <div>
            {duties.map((duty, index) => <div key={id} className="jobs-desc ">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
            </div>)}
        </div>
    )
}
export default Duties