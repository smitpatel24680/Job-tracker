import StatusBadge from "./statusBadge";
import "./JobCard.css";
import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <StatusBadge status={job.status} />
      <p>Applied on: {job.dateApplied}</p>
    </div>
  );
}
export default JobCard;
