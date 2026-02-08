import { useState } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Web", "Mobile", "Data"]

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <div>
      <h1 className="page-title">Proyectos</h1>

      {/* filtros */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: "none",
              background: filter === c ? "#0f172a" : "#e5e7eb",
              color: filter === c ? "white" : "#222",
              cursor: "pointer"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 20
      }}>
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
