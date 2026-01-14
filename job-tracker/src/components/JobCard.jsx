function JobCard({ job}) {
    return (
        <div>
            <h3>{job.company}</h3>
            <p>{job.role}</p>
            <p>{job.status}</p>
            <p>{job.dateApplied}</p>
        </div>
    )
}
export default JobCard;