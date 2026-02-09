import Accordion from "../components/Accordion"

export default function Extras() {
  return (
    <div>

      <h1 className="page-title">Experiencia Adicional</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
          alignItems: "start"
        }}
      >

        <Accordion
          title="Investigación y Academia"
          items={[
            "Coordinadora — Semillero de investigación Immersive Tech",
            "Tesis en proceso (casi finalizada): pipeline de reconstrucción y streaming de escenas 3D con Gaussian Splatting para telepresencia inmersiva",
            "Ponencia técnica: Representación de escenas 3D — Explorando Futuro 202X (febrero 2025)",
            "Poster de investigación: Telepresencia y comunicaciones inmersivas — Ciencia al Parque (septiembre 2025)"
          ]}
        />

        <Accordion
          title="Divulgación Técnica"
          items={[
            "Charla técnica — Women Game Jam 2025 — sede Popayán (formato híbrido)",
            "Charla técnica — Global Game Jam 2026 — sede Popayán (formato híbrido)",
            "Presentaciones técnicas a comunidades de desarrollo y tecnología"
          ]}
        />

        <Accordion
          title="Eventos Tecnológicos"
          items={[
            "Organizadora — Women Game Jam 2025 — sede Popayán",
            "Team leader — equipo de desarrollo — Global Game Jam 2025 — sede Cali (site Globant)",
            "Desarrollo de videojuego en sprint intensivo de 48 horas"
          ]}
        />

        <Accordion
          title="Soporte Técnico Universitario"
          items={[
            "Monitora de sala de sistemas",
            "Mantenimiento básico de equipos",
            "Configuración de red local",
            "Soporte técnico a usuarios",
            "Configuración base de sistemas"
          ]}
        />

        <Accordion
          title="Trabajo y Colaboración"
          items={[
            "Trabajo en entornos interculturales",
            "Coordinación de equipos técnicos",
            "Comunicación técnica",
            "Gestión de actividades académicas y tecnológicas"
          ]}
        />

      </div>

    </div>
  )
}
