import "./StatusBadge.css";

function StatusBadge({ status }) {
  // Convert status to lowercase for CSS class
  const statusClass = status.toLowerCase();

  return (
    <span className={`status-badge status-${statusClass}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
