import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react'
import { LOGO_SRC, PDF_DOWNLOAD_NAME, PDF_DOWNLOAD_SRC } from '../constants/brand'
import { SLIDE_LIST } from './Slides'

export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [presenting, setPresenting] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const total = SLIDE_LIST.length

  const goTo = useCallback(
    (index) => setCurrent(Math.max(0, Math.min(total - 1, index))),
    [total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const togglePresent = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        setPresenting(true)
      } else {
        await document.exitFullscreen()
        setPresenting(false)
      }
    } catch {
      setPresenting((v) => !v)
    }
  }, [])

  useEffect(() => {
    const onFullscreen = () => setPresenting(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFullscreen)
    return () => document.removeEventListener('fullscreenchange', onFullscreen)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        togglePresent()
        return
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, togglePresent])

  const handleDownloadPdf = () => {
    if (downloading) return
    setDownloading(true)
    try {
      const link = document.createElement('a')
      link.href = PDF_DOWNLOAD_SRC
      link.download = PDF_DOWNLOAD_NAME
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (err) {
      console.error(err)
      window.alert('Could not download the STARBOOKS PDF. Please try again.')
    } finally {
      window.setTimeout(() => setDownloading(false), 600)
    }
  }

  const { Component, label } = SLIDE_LIST[current]

  return (
    <div className={`deck ${presenting ? 'deck--present' : ''}`}>
      <header className="deck-header">
        <div className="brand">
          <img
            src={LOGO_SRC}
            alt="STARBOOKS"
            className="brand-logo"
            width={200}
            height={39}
            decoding="async"
            fetchPriority="high"
          />
          <div className="brand-text">
            <span className="brand-name">STARBOOKS</span>
            <span className="brand-sub">Teacher Orientation</span>
          </div>
        </div>
        <div className="deck-header-right">
          <span className="slide-info">
            {label} · {current + 1} / {total}
          </span>
          <button
            type="button"
            className="download-btn"
            onClick={handleDownloadPdf}
            disabled={downloading}
            title="Download STARBOOKS PDF"
          >
            <Download size={18} />
            <span>{downloading ? 'Downloading…' : 'Download PDF'}</span>
          </button>
          <button
            type="button"
            className="present-btn"
            onClick={togglePresent}
            title="Fullscreen (F)"
          >
            {presenting ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            <span>{presenting ? 'Exit' : 'Present'}</span>
          </button>
        </div>
      </header>

      <main className="slide-stage">
        <div key={current} className="slide-panel slide-panel--enter">
          <Component active />
        </div>
      </main>

      <footer className="deck-nav">
        <button
          type="button"
          className="nav-btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </button>

        <div className="nav-center">
          <div className="nav-dots">
            {SLIDE_LIST.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`nav-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={s.label}
              />
            ))}
          </div>
          <p className="nav-hint">Arrow keys · Space · F for fullscreen</p>
        </div>

        <button
          type="button"
          className="nav-btn nav-btn-primary"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      </footer>
    </div>
  )
}
