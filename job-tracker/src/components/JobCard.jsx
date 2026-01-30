import StatusBadge from "./statusBadge";
import "./JobCard.css";
import { useNavigate } from "react-router-dom";

function JobCard({ job, onDelete, onEdit }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <div className="job-card-header">
        <h3>{job.company}</h3>
        <StatusBadge status={job.status} />
      </div>

      <p>{job.role}</p>
      <p>Applied on: {job.dateApplied}</p>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(job.id);
        }}
      >
        Delete
      </button>
      <button
        className="edit-btn"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(job);
        }}
      >
        Edit
      </button>
    </div>
  );
}
export default JobCard;
