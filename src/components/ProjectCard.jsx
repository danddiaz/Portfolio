import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div style={{
        background: "white",
        borderRadius: 12,
        padding: 18,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.2s",
        height: "100%"
      }}
      onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        <h3>{project.title}</h3>

        <p style={{ color: "#555" }}>
          {project.description}
        </p>

        <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: "#e2e8f0",
              padding: "4px 8px",
              borderRadius: 999,
              fontSize: 12
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
