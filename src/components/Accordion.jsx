import { useState } from "react"

export default function Accordion({ title, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        marginBottom: 18,
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        transition: "all 0.2s ease",
        boxShadow: hover
          ? "0 6px 18px rgba(0,0,0,0.12)"
          : "0 2px 6px rgba(0,0,0,0.05)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        background: hover ? "#fafafa" : "white"
      }}
    >

      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: 18
        }}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && (
        <ul style={{ marginTop: 12, lineHeight: 1.7 }}>
          {items.map(i => <li key={i}>{i}</li>)}
        </ul>
      )}

    </div>
  )
}
