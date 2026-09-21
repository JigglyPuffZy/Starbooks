export default function Reveal({
  children,
  className = '',
  delay = 0,
  active = true,
}) {
  return (
    <div
      className={['reveal', active && 'reveal--active', className]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
