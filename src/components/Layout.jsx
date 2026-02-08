import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div>
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: "20px 0"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{ margin: 2 }}>Daniela Diaz Medina</h2>
            <small>Analista de Datos y Desarrolladora de Software Junior</small>
          </div>

          <nav style={{ display: "flex", gap: 24 }}>
            <Link to="/">Inicio</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/skills">Habilidades</Link>
            <Link to="/extras">Extras</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ padding: "40px 20px" }}>
        {children}
      </main>
    </div>
  )
}
