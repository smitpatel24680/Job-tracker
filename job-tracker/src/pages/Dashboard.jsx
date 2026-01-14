import JobCard from "../components/JobCard";

function Dashboard() {
   const jobs = [
    {
        id: 1,
        company: "Google",
        role: "Software Engineer",
        status: "Applied",
        dateApplied: "2026-01-10"
    },
   ];
   return (
     <div className="dashboard">
       <h1>Job Applications</h1>

       {jobs.length == 0 ? (
         <p>No job applications found.</p>
       ) : (
         jobs.map((job) => <JobCard key={job.id} job={job} />)
       )}
     </div>
   );
}

export default Dashboard;