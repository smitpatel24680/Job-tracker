import JobCard from "../components/JobCard";
import AddJobForm from "../components/AddJobForm";
import { useState, useEffect } from "react";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const addJob = (job) => {
    setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  
  return (
    <div className="dashboard">
      <h1>Job Applications</h1>

      <button onClick={() => setShowForm(!showForm)}>+ Add Application</button>

      {showForm && <AddJobForm onAddJob={addJob} />}

      {jobs.length == 0 ? (
        <p>No job applications found.</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default Dashboard;

// [
//     {
//       id: 1,
//       company: "Google",
//       role: "Software Engineer",
//       status: "Interviewing",
//       dateApplied: "2026-01-10",
//     },
//   ]
