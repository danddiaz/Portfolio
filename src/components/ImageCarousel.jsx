import { useState } from "react"

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () =>
    setIndex(i => (i === 0 ? images.length - 1 : i - 1))

  const next = () =>
    setIndex(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div style={{ margin: "30px 0", textAlign: "center" }}>

      <img
        src={images[index]}
        alt="screenshot"
        style={{
          maxWidth: "100%",
          maxHeight: 420,
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
        }}
      />

      <div style={{ marginTop: 12, display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={prev}>◀</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={next}>▶</button>
      </div>

    </div>
  )
}
