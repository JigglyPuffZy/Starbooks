import Reveal from './Reveal'

export default function SlideHeader({
  active,
  tag,
  title,
  subtitle,
  centered = false,
  compact = false,
}) {
  return (
    <header
      className={[
        'slide-header',
        centered && 'slide-header--centered',
        compact && 'slide-header--compact',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Reveal active={active}>
        <p className="slide-tag">{tag}</p>
        <h2 className="slide-title">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal active={active} delay={0.05}>
          <p className="slide-subtitle">{subtitle}</p>
        </Reveal>
      )}
    </header>
  )
}
