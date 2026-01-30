import { useState, useEffect } from "react";

function AddJobForm({ onAddJob, onUpdateJob, editingJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");

  useEffect(() => {
    if (editingJob) {
      setCompany(editingJob.company);
      setRole(editingJob.role);
      setStatus(editingJob.status);
      setDateApplied(editingJob.dateApplied);
    } else {
      // Optional: reset form if not editing
      setCompany("");
      setRole("");
      setStatus("Applied");
      setDateApplied("");
    }
  }, [editingJob]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingJob) {
      onUpdateJob({
        ...editingJob,
        company,
        role,
        status,
        dateApplied,
      });
    } else {
      onAddJob({
        company,
        role,
        status,
        dateApplied,
      });
    }
  };

  return (
    <form className="add-job-form" onSubmit={handleSubmit}>
      <h3>Add Job Application</h3>

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <input
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default AddJobForm;
