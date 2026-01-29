import {useLocation, useParams, Link } from "react-router-dom";
import StatusBadge from "../components/statusBadge";

function JobDetails() {
  const location = useLocation();
  const {job } = location.state || {}; 
  

    if (!job) {
      return (
        <div style={{ padding: "20px" }}>
          <Link to="/">← Back to Dashboard</Link>
          <p>Job not found.</p>
        </div>
      );
    }
    console.log("location.state:", location.state);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Dashboard</Link>
      <h2>{job.role} @ {job.company}</h2>
      <StatusBadge status={job.status} />
      <p><strong>Date Applied:</strong> {job.dateApplied}</p>
      <p><strong>Resume:</strong> {job.resume || "Not uploaded yet"}</p>
      <p><strong>Contacts:</strong> {job.contacts || "None added"}</p>
      <p><strong>Notes:</strong> {job.notes || "No notes"}</p>
    </div>
  );
}

export default JobDetails;
