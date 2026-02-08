import profile from "../assets/profile.jpg"

export default function Home() {
  return (
    <div>

      {/* header perfil */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: 30,
        alignItems: "center",
        marginBottom: 40
      }}>
        <img
          src={profile}
          alt="Daniela Diaz"
          style={{
            width: 160,
            height: 160,
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        />

        <div>
          <h1>Daniela Diaz Medina</h1>
          <h3>Analista de Datos y Desarrolladora de Software Junior</h3>

          <p>
            Estudiante de último semestre de Ingeniería Electrónica y
            Telecomunicaciones con enfoque en análisis de datos y desarrollo
            de software. Formación certificada en Data Analytics, Power BI,
            Python, SQL, IoT y fundamentos de cloud computing.
          </p>
        </div>
      </div>

      {/* resumen */}
      <Section title="Resumen profesional">
        He desarrollado proyectos en análisis y visualización de datos,
        simulación de redes, desarrollo de aplicaciones móviles y plataformas
        tecnológicas. Participo en investigación aplicada y liderazgo de
        iniciativas tecnológicas integrando programación y analítica para
        construir soluciones prácticas.
      </Section>

      {/* enfoque */}
      <Section title="Enfoque">
        Resolución de problemas técnicos combinando análisis de datos y
        desarrollo de software. Construcción de soluciones que integran
        procesamiento de información, automatización y desarrollo de
        aplicaciones.
      </Section>

      {/* áreas */}
      <Section title="Áreas">
        <ul>
          <li>Data Analytics y Business Intelligence</li>
          <li>Visualización y modelado de datos</li>
          <li>Desarrollo de software junior</li>
          <li>Aplicaciones móviles</li>
          <li>Automatización de procesos</li>
          <li>Redes e IoT aplicado</li>
          <li>Plataformas técnicas y educativas</li>
          <li>Investigación tecnológica</li>
        </ul>
      </Section>

      {/* stack */}
      <Section title="Stack tecnológico">

        <h4>Lenguajes</h4>
        <BadgeList items={[
          "Python","JavaScript","Java","C++","PHP",
          "CSS","SQL","NoSQL","Kotlin","Dart"
        ]} />

        <h4>Análisis de Datos</h4>
        <BadgeList items={[
          "Power BI","Excel avanzado","Pandas",
          "Matplotlib","Seaborn","Data modeling"
        ]} />

        <h4>Herramientas</h4>
        <BadgeList items={[
          "Power Platform","openEDX","Arduino",
          "Azure Fundamentals","Git"
        ]} />

        <h4>Redes</h4>
        <BadgeList items={[
          "Cisco Packet Tracer","Switching",
          "IoT fundamentals"
        ]} />

      </Section>

      {/* objetivo */}
      <Section title="Objetivo profesional">
        Iniciar mi carrera como Analista de Datos y Desarrolladora de Software 
        Junior participando en proyectos donde pueda aplicar análisis de
        datos, programación y desarrollo de soluciones tecnológicas, con
        enfoque en aprendizaje rápido y mejora continua.
      </Section>

    </div>
  )
}


function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2>{title}</h2>
      <div style={{ color: "#444", lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )
}

function BadgeList({ items }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 16
    }}>
      {items.map(i => (
        <span key={i} style={{
          background: "white",
          padding: "6px 12px",
          borderRadius: 999,
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          fontSize: 13
        }}>
          {i}
        </span>
      ))}
    </div>
  )
}
