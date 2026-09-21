import MeshBg from './MeshBg'

export default function SlideLayout({ children, variant = 'default' }) {
  const isSpecial = variant === 'intro' || variant === 'closing' || variant === 'reminder'

  return (
    <div
      className={[
        'slide-frame',
        isSpecial && `slide-frame--${variant}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <MeshBg />
      <div className="slide-content">{children}</div>
    </div>
  )
}
