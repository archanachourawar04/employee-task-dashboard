import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function DraggableTaskCard(props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="col-md-4 mb-4">
      <TaskCard {...props} />
    </div>
  );
}

function Dashboard() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const [editingTask, setEditingTask] = useState(null);

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: "Completed" };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.status === "Completed").length;
  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "Completed") return matchesSearch && task.status === "Completed";
    if (filter === "Pending") return matchesSearch && task.status === "Pending";
    if (filter === "High") return matchesSearch && task.priority === "High";

    return matchesSearch;
  });

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((prevTasks) => {
      const oldIndex = prevTasks.findIndex((t) => t.id === active.id);
      const newIndex = prevTasks.findIndex((t) => t.id === over.id);
      return arrayMove(prevTasks, oldIndex, newIndex);
    });
  };

  return (
    <>
      <Navbar />

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #1d2b3a",
              borderRadius: "16px",
              padding: "36px 48px",
              textAlign: "center",
              boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontSize: "44px", marginBottom: "12px" }}>✅</div>
            <h5 style={{ color: "#1d2b3a", fontWeight: 700, margin: 0, fontSize: "20px" }}>
              Task Added Successfully
            </h5>
          </div>
        </div>
      )}

      <div className="container-fluid" style={{ padding: "20px 24px" }}>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />

        <div
          className="d-flex mt-4"
          style={{ gap: "20px", flexWrap: "wrap", alignItems: "stretch" }}
        >
          <div style={{ flex: "0 0 260px" }}>
            <DashboardStats
              totalTasks={tasks.length}
              completedTasks={completedTasks}
              pendingTasks={pendingTasks}
            />
          </div>

          <div style={{ flex: "1 1 500px" }}>
            <TaskForm
              addTask={addTask}
              updateTask={updateTask}
              editingTask={editingTask}
            />
          </div>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={filteredTasks.map((t) => t.id)} strategy={rectSortingStrategy}>
            <div className="row mt-4">
              {filteredTasks.map((task) => (
                <DraggableTaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  status={task.status}
                  dueDate={task.dueDate}
                  employeeName={task.employeeName}
                  department={task.department}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

      </div>
    </>
  );
}

export default Dashboard;