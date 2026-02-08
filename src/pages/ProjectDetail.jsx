import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import ImageCarousel from "../components/ImageCarousel"


export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <p>Proyecto no encontrado</p>

  return (
    <div>

      <h1>{project.title}</h1>

      

      <p style={{ fontSize: 18 }}>{project.description}</p>

      {/* tech badges */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {project.tech.map(t => (
          <span key={t} style={{
            background: "#e2e8f0",
            padding: "6px 10px",
            borderRadius: 999,
            fontSize: 13
          }}>
            {t}
          </span>
        ))}
      </div>

      {project.github && (
        <p>
          💻 <a href={project.github} target="_blank" rel="noreferrer">
            Ver Github ({project.repoType || "GitHub"})
          </a>
        </p>
      )}

      {project.github2 && (
        <p>
          💻 <a href={project.github2} target="_blank" rel="noreferrer">
            Ver Github ({project.repoType2 || "GitHub"})
          </a>
        </p>
      )}

      {project.demo && (
        <p>
          🌐 <a href={project.demo} target="_blank" rel="noreferrer">
            Ver demo funcional
          </a>
        </p>
      )}

      {project.details && (
        <>
          <Section title="Descripción técnica">
            {project.details.overview}
          </Section>

          <ListSection title="Funcionalidades" items={project.details.features} />
          <ListSection title="Contribución personal" items={project.details.role} />
          <ListSection title="Aprendizajes técnicos" items={project.details.learnings} />
        </>
      )}

      <ImageCarousel images={project.images} />

    </div>
  )
}


function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2>{title}</h2>
      <p style={{ lineHeight: 1.7 }}>{children}</p>
    </div>
  )
}

function ListSection({ title, items }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2>{title}</h2>
      <ul style={{ lineHeight: 1.7 }}>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  )
}
