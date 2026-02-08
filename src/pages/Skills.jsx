export default function Skills() {
  return (
    <div>
      <h1 className="page-title">Habilidades Técnicas</h1>

      <SkillBlock
        title="Lenguajes de programación"
        items={[
          "Python — análisis de datos, dashboards, scripts",
          "JavaScript — aplicaciones web React",
          "Java — proyectos académicos",
          "C++ — bases de programación",
          "PHP — desarrollo web básico",
          "SQL / NoSQL — modelado y consultas",
          "Kotlin — desarrollo Android",
          "Dart — Flutter apps"
        ]}
      />

      <SkillBlock
        title="Análisis de Datos & Visualización"
        items={[
          "Power BI — dashboards e indicadores",
          "Pandas — procesamiento de datos",
          "Matplotlib / Seaborn — visualización",
          "Excel avanzado — análisis y reporting",
          "Modelado de datos"
        ]}
      />

      <SkillBlock
        title="Desarrollo & Plataformas"
        items={[
          "React — SPA y componentes",
          "Node.js — APIs básicas",
          "Flutter — apps móviles",
          "openEDX — soporte LMS",
          "Power Platform — automatización"
        ]}
      />

      <SkillBlock
        title="Infraestructura & Redes"
        items={[
          "Cisco Packet Tracer",
          "Simulación de redes",
          "Switching",
          "Fundamentos IoT",
          "Arduino"
        ]}
      />
    </div>
  )
}

function SkillBlock({ title, items }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2>{title}</h2>
      <ul style={{ lineHeight: 1.7 }}>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  )
}
