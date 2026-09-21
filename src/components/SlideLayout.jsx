import MeshBg from './MeshBg'

export default function SlideLayout({ children, variant = 'default' }) {
  return (
    <div
      className={[
        'slide-frame',
        variant !== 'default' && `slide-frame--${variant}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <MeshBg />
      <div className="slide-content">{children}</div>
    </div>
  )
}
