import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"


export default function Layout({ children }) {

  const navStyle = ({ isActive }) => ({
    fontWeight: 700,
    textDecoration: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: 8,
    transition: "all 0.2s ease",
    background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
    boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.25)" : "none"
  })

  return (
    <div>
      <header style={{
        background: "#0f172a",
        color: "white",
        width: "100%",
      }}>

        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap", 
          padding: "16px 16px"
        }}>

          <div style={{ maxWidth: 420 }}>
            <h2 style={{
              margin: 0,
              padding: "16px 0",
              color: "white"
            }}>
              Daniela Diaz Medina
            </h2>

            <small>
              Analista de Datos y Desarrolladora de Software Junior
            </small>
          </div>

          <nav style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "flex-end"
          }}>

            <NavLink to="/" style={navStyle}>Inicio</NavLink>
            <NavLink to="/projects" style={navStyle}>Proyectos</NavLink>
            <NavLink to="/skills" style={navStyle}>Habilidades</NavLink>
            <NavLink to="/extras" style={navStyle}>Extras</NavLink>
            <NavLink to="/contacto" style={navStyle}>Contacto</NavLink>

          </nav>


        </div>
      </header>


      <main className="container" style={{ padding: "40px 20px" }}>
        {children}
      </main>
    </div>
  )
}
