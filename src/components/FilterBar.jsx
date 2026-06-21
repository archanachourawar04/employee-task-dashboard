function FilterBar({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          border: "1.5px solid #000000",
          boxShadow: "-6px 0 14px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      />
      <select
        className="form-select mt-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          border: "1.5px solid #000000",
          boxShadow: "-6px 0 14px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        <option value="All">All Tasks</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="High">High Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;