function DashboardStats({ totalTasks, completedTasks, pendingTasks }) {
  const stats = [
    { label: "Completed Tasks", value: completedTasks },
    { label: "Pending Tasks", value: pendingTasks },
    { label: "Total Tasks", value: totalTasks },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {stats.map((s) => (
        <div
          className="card text-center"
          key={s.label}
          style={{
            border: "1.5px solid #000000",
            boxShadow: "-6px 0 14px rgba(0, 0, 0, 0.2)",
            borderRadius: "14px",
            backgroundColor: "#ffffff",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-body">
            <h5
              style={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "8px",
                whiteSpace: "nowrap",
              }}
            >
              {s.label}
            </h5>
            <h2 style={{ fontWeight: 700, color: "#000000", margin: 0 }}>
              {s.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;