/** Decorative slide backdrop — static, no animation */
export default function MeshBg() {
  return (
    <div className="slide-bg" aria-hidden="true">
      <div className="slide-bg-bar" />
      <div className="slide-bg-orb slide-bg-orb--blue" />
      <div className="slide-bg-orb slide-bg-orb--yellow" />
      <div className="slide-bg-grid" />
    </div>
  )
}
