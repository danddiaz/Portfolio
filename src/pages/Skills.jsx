import { useState } from "react"
import Accordion from "../components/Accordion"

export default function Skills() {
  return (
    <div>

      <h1 className="page-title">Habilidades</h1>

    <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "start"
        }}
    >
        <Accordion
          title="Lenguajes de programación"
          items={[
            "JavaScript — React, Node, APIs",
            "Python — análisis de datos y scripts",
            "PHP — CRUD, login, roles",
            "SQL — modelado y consultas",
            "Kotlin — apps Android",
            "Dart — Flutter",
            "Java — proyectos académicos",
            "C++ — fundamentos"
          ]}
        />

        <Accordion
          title="Fullstack & Web"
          items={[
            "React — SPA y componentes",
            "Node + Express — APIs REST",
            "CRUD fullstack",
            "Arquitectura cliente–servidor",
            "Fetch API",
            "Validación con Zod",
            "Prisma ORM",
            "Autenticación y roles"
          ]}
        />

        <Accordion
          title="Datos & Visualización"
          items={[
            "Power BI",
            "Pandas",
            "Visualización",
            "EDA básico",
            "Excel avanzado"
          ]}
        />

        <Accordion
          title="Mobile & Cloud"
          items={[
            "Flutter",
            "Kotlin",
            "Firebase",
            "Firestore",
            "Auth Firebase"
          ]}
        />

        <Accordion
          title="Infraestructura & Plataformas"
          items={[
            "Docker",
            "Tutor Open edX",
            "Linux + Bash",
            "XAMPP",
            "MySQL",
            "LMS administration",
            "IoT integración"
          ]}
        />

        <Accordion
          title="Habilidades Profesionales"
          items={[
            "Liderazgo técnico",
            "Coordinación de semillero",
            "Organización de eventos tecnológicos",
            "Trabajo en equipo",
            "Comunicación técnica",
            "Presentación de ponencias",
            "Trabajo bajo presión",
            "Entornos interculturales"
          ]}
        />

        <Accordion
          title="Comunicación & Academia"
          items={[
            "Ponencia técnica",
            "Poster de investigación",
            "Charlas Women Game Jam",
            "Charlas Global Game Jam",
            "Monitora universitaria"
          ]}
        />

        <Accordion
          title="Idiomas"
          items={[
            "Español — nativo",
            "Inglés — B2"
          ]}
        />
      </div>
    </div>
  )
}

