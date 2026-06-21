import { useState, useEffect } from "react";

function TaskForm({ addTask, updateTask, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setPriority(editingTask.priority || "Medium");
      setDueDate(editingTask.dueDate || "");
      setEmployeeName(editingTask.employeeName || "");
      setDepartment(editingTask.department || "");
      setErrors({});
    }
  }, [editingTask]);

  const validate = () => {
    const newErrors = {};

    if (!employeeName.trim()) newErrors.employeeName = "Employee name is required";
    if (!department.trim()) newErrors.department = "Department is required";
    if (!title.trim()) newErrors.title = "Task title is required";
    if (!dueDate.trim()) newErrors.dueDate = "Due date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingTask) {
      updateTask({ ...editingTask, title, description, priority, dueDate, employeeName, department });
    } else {
      addTask({
        id: Date.now(),
        title,
        description,
        priority,
        status: "Pending",
        dueDate,
        employeeName,
        department,
      });
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setEmployeeName("");
    setDepartment("");
    setErrors({});
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "8px 12px",
    borderRadius: "8px",
    border: hasError ? "1.5px solid #d32f2f" : "1.5px solid #c8d8e2",
    outline: "none",
    fontSize: "13.5px",
  });

  const errorText = {
    color: "#d32f2f",
    fontSize: "12px",
    marginTop: "2px",
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        backgroundColor: "#ffffff",
        border: "1.5px solid #000000",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h6 style={{ color: "#1d2b3a", fontWeight: 700, marginBottom: "14px" }}>
        {editingTask ? "Edit Task" : "Add New Task"}
      </h6>

      <div className="d-flex gap-2 mb-3">
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Employee name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={inputStyle(errors.employeeName)}
          />
          {errors.employeeName && <div style={errorText}>{errors.employeeName}</div>}
        </div>

        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={inputStyle(errors.department)}
          />
          {errors.department && <div style={errorText}>{errors.department}</div>}
        </div>
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle(errors.title)}
        />
        {errors.title && <div style={errorText}>{errors.title}</div>}
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1.5px solid #c8d8e2",
            outline: "none",
            fontSize: "13.5px",
            resize: "none",
          }}
        />
      </div>

      <div className="d-flex gap-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1.5px solid #c8d8e2",
            outline: "none",
            fontSize: "13.5px",
            height: "38px",
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div style={{ flex: 1 }}>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={inputStyle(errors.dueDate)}
          />
          {errors.dueDate && <div style={errorText}>{errors.dueDate}</div>}
        </div>
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "9px 0",
          marginTop: "16px",
          borderRadius: "9px",
          border: "none",
          backgroundColor: "#1d2b3a",
          color: "#ffffff",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;