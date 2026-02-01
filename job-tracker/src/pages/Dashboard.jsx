import JobCard from "../components/JobCard";
import AddJobForm from "../components/AddJobForm";
import { useState, useEffect } from "react";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const [editingJob, setEditingJob] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const addJob = (job) => {
    setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
  };

  const handleDeleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleUpdateJob = (updatedJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job)),
    );

    setEditingJob(null);
    setShowForm(false);
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.dateApplied) - new Date(a.dateApplied);
      } else {
        return new Date(a.dateApplied) - new Date(b.dateApplied);
      }
    });

  return (
    <div className="dashboard">
      <h1>Job Applications</h1>

      <button onClick={() => setShowForm(!showForm)}>+ Add Application</button>

      <div className="controls">
        <input
          type="text"
          placeholder="Search company or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {showForm && (
        <AddJobForm
          onAddJob={addJob}
          onUpdateJob={handleUpdateJob}
          editingJob={editingJob}
        />
      )}

      {jobs.length == 0 ? (
        <p>No job applications found.</p>
      ) : (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={handleDeleteJob}
            onEdit={handleEditJob}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;
