import {
  BookOpen,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  Video,
  WifiOff,
  Zap,
} from 'lucide-react'
import Reveal from './Reveal'
import SlideHeader from './SlideHeader'
import SlideLayout from './SlideLayout'
import {
  aboutContentTypes,
  aboutHighlights,
  aboutStats,
  activitySteps,
  benefits,
  closingPoints,
  features,
  guideQuestions,
  manualSections,
  reminderPoints,
  tutorialSteps,
  useCases,
  workshopTasks,
} from '../data/starbooksContent'
import { LOGO_SRC } from '../constants/brand'

const benefitIcons = [WifiOff, Lightbulb, ShieldCheck, Search, Users, FlaskConical]

const reminderIcons = [BookOpen, FileText, Video, FlaskConical, GraduationCap, UserCheck]

export function SlideIntro({ active }) {
  return (
    <SlideLayout variant="intro">
      <div className="intro-center">
        <Reveal active={active}>
          <img
            src={LOGO_SRC}
            alt="STARBOOKS Logo"
            className="intro-logo"
            width={480}
            height={93}
            decoding="async"
            fetchPriority="high"
          />
        </Reveal>
        <Reveal active={active} delay={0.05}>
          <p className="intro-org">Department of Science and Technology (DOST)</p>
        </Reveal>
        <Reveal active={active} delay={0.1}>
          <h1 className="intro-title">STARBOOKS</h1>
        </Reveal>
        <Reveal active={active} delay={0.14}>
          <p className="intro-tagline">
            A Digital Library for Science, Technology, and Education
          </p>
        </Reveal>
        <Reveal active={active} delay={0.18}>
          <p className="intro-desc">Teacher Orientation &amp; User Guide</p>
        </Reveal>
        <Reveal active={active} delay={0.22}>
          <div className="intro-badges">
            <span className="pill pill-yellow">Library in a Box</span>
            <span className="pill pill-blue">Free for Schools</span>
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  )
}

export function SlideAbout({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="What is STARBOOKS?"
        title="Science & Technology Library for Schools"
        subtitle="STARBOOKS = Science and Technology Academic- and Research-Based Openly-Operated KioskS"
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="callout callout-blue">
          <p>
            A <strong>free digital library</strong> from DOST-STII, launched in{' '}
            <strong>2011</strong>. It serves as a stand-alone supplemental tool for
            research, teaching, and learning — giving teachers and students access to
            science, technology, and educational resources even without reliable internet.
          </p>
        </div>
      </Reveal>
      <div className="stat-row stat-row--4">
        {aboutStats.map((s, i) => (
          <Reveal key={s.label} active={active} delay={0.1 + i * 0.03}>
            <div className="stat-chip">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal active={active} delay={0.18}>
        <p className="section-label">What&apos;s inside STARBOOKS?</p>
      </Reveal>
      <div className="about-content-grid">
        {aboutContentTypes.map((item, i) => (
          <Reveal key={item.title} active={active} delay={0.2 + i * 0.025}>
            <article className="about-mini-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal active={active} delay={0.34}>
        <ul className="check-list check-list--compact">
          {aboutHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideWhy({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Why Use STARBOOKS?"
        title="Benefits for Teachers"
        subtitle="How STARBOOKS supports effective and meaningful classroom instruction"
      />
      <div className="benefit-grid">
        {benefits.map((b, i) => {
          const Icon = benefitIcons[i] ?? BookOpen
          return (
            <Reveal key={b.title} active={active} delay={0.04 + i * 0.03}>
              <article className="benefit-card">
                <div className="card-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </SlideLayout>
  )
}

export function SlideFeatures({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Main Features"
        title="What You Can Do with STARBOOKS"
        subtitle="Each feature helps you find, use, and share learning materials with your students"
        compact
      />
      <div className="feature-grid">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <Reveal key={f.title} active={active} delay={0.03 + i * 0.025}>
              <article className="feature-card">
                <div className="feature-card-top">
                  <div className="card-icon card-icon-sm">
                    <Icon size={16} />
                  </div>
                  <h3>{f.title}</h3>
                </div>
                <p className="feature-desc">{f.desc}</p>
                <p className="feature-tip">
                  <GraduationCap size={13} />
                  {f.action}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </SlideLayout>
  )
}

export function SlideGuide({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="How to Use STARBOOKS"
        title="5 Easy Steps to Get Started"
        subtitle='Follow this guide to begin using STARBOOKS in your classroom'
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="callout callout-yellow">
          <strong>Try this:</strong> Search &ldquo;Climate Change&rdquo; → Open a
          resource → Use it in your Science class
        </div>
      </Reveal>
      <ol className="timeline">
        {tutorialSteps.map((step, i) => (
          <Reveal key={step.title} active={active} delay={0.08 + i * 0.04}>
            <li className="timeline-item">
              <span className="timeline-num">{i + 1}</span>
              <div className="timeline-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <ul>
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SlideLayout>
  )
}

export function SlideCases({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Teacher Use Cases"
        title="When to Use STARBOOKS"
        subtitle="Use STARBOOKS at every stage of your lesson — before, during, and after class"
      />
      <div className="phase-grid">
        {useCases.map((uc, i) => (
          <Reveal key={uc.phase} active={active} delay={0.05 + i * 0.06}>
            <article className={`phase-card phase-card--${i}`}>
              <span className="phase-emoji">{uc.emoji}</span>
              <h3>{uc.phase}</h3>
              <p className="phase-summary">{uc.summary}</p>
              <ul>
                {uc.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SlideLayout>
  )
}

export function SlideDemo({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Example Classroom Activity"
        title="Lesson: Renewable Energy"
        subtitle="A sample flow showing how STARBOOKS works as a teaching tool in one class period"
        compact
      />
      <div className="flow-list">
        {activitySteps.map((step, i) => (
          <Reveal key={step.title} active={active} delay={0.04 + i * 0.04}>
            <div className="flow-item">
              <span className="flow-num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal active={active} delay={0.28}>
        <div className="callout callout-yellow">
          <strong>Guide questions for students:</strong>
          <ul className="inline-questions">
            {guideQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal active={active} delay={0.32}>
        <p className="footnote">
          <Zap size={14} />
          STARBOOKS is a supplementary teaching tool — it helps you bring science
          and technology resources closer to your students.
        </p>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideNote({ active }) {
  return (
    <SlideLayout variant="reminder">
      <SlideHeader
        active={active}
        tag="Important Reminder"
        title="STARBOOKS complements — not replaces — the teacher"
        subtitle="Think of STARBOOKS as your extra assistant in the classroom"
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="reminder-banner">
          <div className="reminder-banner-icon">
            <UserCheck size={22} />
          </div>
          <p>
            STARBOOKS provides the <strong>resources</strong> — you provide the{' '}
            <strong>teaching</strong>, guidance, and connection with your students.
          </p>
        </div>
      </Reveal>
      <div className="reminder-grid">
        {reminderPoints.map((point, i) => {
          const Icon = reminderIcons[i] ?? BookOpen
          return (
            <Reveal key={point.title} active={active} delay={0.1 + i * 0.04}>
              <article className={`reminder-card reminder-card--${i}`}>
                <div className="reminder-card-top">
                  <div className="reminder-icon">
                    <Icon size={18} />
                  </div>
                  <span className="reminder-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </SlideLayout>
  )
}

export function SlideWorkshop({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Hands-On Activity"
        title="Explore STARBOOKS Now"
        subtitle="Try it yourself — follow these steps and share one idea with the group"
      />
      <ol className="task-list">
        {workshopTasks.map((item, i) => (
          <Reveal key={item.task} active={active} delay={0.05 + i * 0.05}>
            <li className="task-item">
              <span className="task-num">{i + 1}</span>
              <div>
                <h3>{item.task}</h3>
                <p>{item.hint}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal active={active} delay={0.28}>
        <button
          type="button"
          className="btn-cta"
          onClick={() => window.open('https://www.starbooks.ph', '_blank')}
        >
          Open starbooks.ph
          <ExternalLink size={18} />
        </button>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideManual({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Quick Reference"
        title="STARBOOKS Teacher Manual"
        subtitle="Keep this guide handy — everything you need to start using STARBOOKS in your classroom"
        compact
      />
      <div className="manual-grid">
        {manualSections.map((section, i) => (
          <Reveal key={section.title} active={active} delay={0.03 + i * 0.025}>
            <article className="manual-card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal active={active} delay={0.3}>
        <div className="manual-footer">
          <button
            type="button"
            className="btn-cta btn-cta-outline"
            onClick={() => window.open('/starbooks-teacher-manual.html', '_blank')}
          >
            Open printable manual
            <ExternalLink size={18} />
          </button>
        </div>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideEnd({ active }) {
  return (
    <SlideLayout variant="closing">
      <div className="closing-center">
        <Reveal active={active}>
          <img
            src={LOGO_SRC}
            alt="STARBOOKS Logo"
            className="intro-logo intro-logo-sm"
            width={360}
            height={70}
            decoding="async"
          />
          <h2 className="closing-title">Thank You!</h2>
          <p className="closing-tagline">
            STARBOOKS — Bringing Science &amp; Technology Resources Closer to Learners
          </p>
        </Reveal>
        <div className="closing-grid">
          {closingPoints.map((item, i) => (
            <Reveal key={item.word} active={active} delay={0.08 + i * 0.05}>
              <div className="closing-card">
                <span className="closing-word">{item.word}</span>
                <span className="closing-desc">{item.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal active={active} delay={0.35}>
          <p className="closing-credit">Department of Science and Technology · DOST-STII</p>
          <a
            href="https://stii.dost.gov.ph/starbooks/"
            target="_blank"
            rel="noreferrer"
            className="closing-link"
          >
            stii.dost.gov.ph/starbooks
            <ExternalLink size={14} />
          </a>
        </Reveal>
      </div>
    </SlideLayout>
  )
}

export const SLIDE_LIST = [
  { id: 'intro', label: 'Title', Component: SlideIntro },
  { id: 'about', label: 'About', Component: SlideAbout },
  { id: 'why', label: 'Why', Component: SlideWhy },
  { id: 'features', label: 'Features', Component: SlideFeatures },
  { id: 'guide', label: 'Guide', Component: SlideGuide },
  { id: 'cases', label: 'Uses', Component: SlideCases },
  { id: 'demo', label: 'Demo', Component: SlideDemo },
  { id: 'note', label: 'Note', Component: SlideNote },
  { id: 'workshop', label: 'Try It', Component: SlideWorkshop },
  { id: 'manual', label: 'Manual', Component: SlideManual },
  { id: 'end', label: 'End', Component: SlideEnd },
]
