import { motion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  active = true,
}) {
  const offsets = {
    up: { y: 36, x: 0 },
    down: { y: -36, x: 0 },
    left: { x: 36, y: 0 },
    right: { x: -36, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = offsets[direction] || offsets.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={active ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
