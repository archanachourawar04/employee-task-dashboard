function TaskCard({ title, description, priority, status, dueDate, employeeName, department, onComplete, id, onDelete, onEdit }) {
  const priorityStyles = {
    High: { backgroundColor: "#f4dcd0", color: "#b85c38", border: "1px solid #e8b89a" },
    Medium: { backgroundColor: "#f4ecd0", color: "#a3851a", border: "1px solid #e0cf8a" },
    Low: { backgroundColor: "#d8e8e0", color: "#3a7a5c", border: "1px solid #a8d4be" },
  };

  const statusStyles = {
    Completed: { backgroundColor: "#d8e8e0", color: "#3a7a5c", border: "1px solid #a8d4be" },
    Pending: { backgroundColor: "#dce8f0", color: "#2c5577", border: "1px solid #a8c5d6" },
  };

  return (
    <div className="h-100">
      <div
        className="card rounded-4 h-100"
        style={{
          boxShadow: "0 4px 16px rgba(29, 43, 58, 0.1)",
          border: "1.5px solid #1d2b3a",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="card-body" style={{ padding: "22px 26px" }}>

          <h5 className="mb-1" style={{ color: "#1d2b3a", fontWeight: 700, fontSize: "20px" }}>
            {title}
          </h5>

          {(employeeName || department) && (
            <div
              className="d-flex align-items-center gap-2 mb-2"
              style={{ fontSize: "13px", color: "#5c6b7a", flexWrap: "wrap" }}
            >
              {employeeName && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  👤 <span style={{ color: "#8a94a3" }}>Employee:</span>{" "}
                  <strong style={{ color: "#1d2b3a" }}>{employeeName}</strong>
                </span>
              )}
              {employeeName && department && <span>•</span>}
              {department && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  🏢 <span style={{ color: "#8a94a3" }}>Department:</span>{" "}
                  <strong style={{ color: "#1d2b3a" }}>{department}</strong>
                </span>
              )}
            </div>
          )}

          <p style={{ color: "#7a8699", fontSize: "14.5px", marginBottom: "14px", lineHeight: "1.5" }}>
            {description}
          </p>

          <div className="mb-2">
            <span
              style={{
                ...priorityStyles[priority],
                fontWeight: 600,
                fontSize: "12.5px",
                padding: "5px 12px",
                borderRadius: "8px",
              }}
            >
              {priority} Priority
            </span>
          </div>

          <div className="d-flex align-items-center gap-2 mb-3" style={{ flexWrap: "wrap" }}>
            <span
              style={{
                ...statusStyles[status],
                fontWeight: 600,
                fontSize: "12.5px",
                padding: "5px 14px",
                borderRadius: "20px",
              }}
            >
              {status}
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "13.5px",
                color: "#1d2b3a",
                backgroundColor: "#eef3f6",
                border: "1px solid #c8d8e2",
                padding: "5px 12px",
                borderRadius: "8px",
                fontWeight: 700,
              }}
            >
              📅 {dueDate}
            </span>
          </div>

          <hr style={{ borderTop: "1px solid #e6edf2", margin: "0 0 16px" }} />

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm"
              style={{
                flex: 1,
                borderRadius: "9px",
                fontWeight: 600,
                fontSize: "13.5px",
                border: "1.5px solid #2c5577",
                color: "#2c5577",
                backgroundColor: "#ffffff",
              }}
              onClick={() =>
                onEdit({ id, title, description, priority, status, dueDate, employeeName, department })
              }
            >
              Edit
            </button>

            <button
              className="btn btn-sm"
              style={{
                flex: 1,
                borderRadius: "9px",
                fontWeight: 600,
                fontSize: "13.5px",
                border: "1.5px solid #b85c38",
                color: "#b85c38",
                backgroundColor: "#ffffff",
              }}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>

            <button
              className="btn btn-sm"
              style={{
                flex: 1,
                borderRadius: "9px",
                fontWeight: 600,
                fontSize: "13.5px",
                border: "1.5px solid #3a7a5c",
                color: "#3a7a5c",
                backgroundColor: "#ffffff",
              }}
              onClick={() => onComplete(id)}
            >
              Complete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TaskCard;