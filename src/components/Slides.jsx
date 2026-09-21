import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  Search,
  Star,
} from 'lucide-react'
import Reveal from './Reveal'
import SlideHeader from './SlideHeader'
import SlideLayout from './SlideLayout'
import {
  classUsePhases,
  gradeLevelResources,
  insideResources,
  lessonFlow,
  mainFeatures,
  offlineAccessSteps,
  platforms,
  recapPoints,
  searchExample,
  searchSteps,
  starbooksAcronym,
  teacherBenefits,
  workshopQuestion,
  workshopTasks,
} from '../data/starbooksContent'
import { LOGO_SRC } from '../constants/brand'

const benefitIcons = [BookOpen, Search, Lightbulb, Star, BookOpen, Search, Lightbulb]

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
          <p className="intro-org">
            Department of Science and Technology – Science and Technology Information Institute
          </p>
        </Reveal>
        <Reveal active={active} delay={0.1}>
          <h1 className="intro-title">STARBOOKS Teacher Orientation</h1>
        </Reveal>
        <Reveal active={active} delay={0.14}>
          <p className="intro-tagline">
            Using STARBOOKS as a Digital Learning and Research Resource
          </p>
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

export function SlideWhatIs({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="What is STARBOOKS?"
        title="STARBOOKS"
        subtitle={starbooksAcronym}
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="callout callout-blue">
          <p>
            STARBOOKS is a <strong>digital library</strong> that provides access to Science,
            Technology, and educational resources through different platforms.
          </p>
        </div>
      </Reveal>
      <Reveal active={active} delay={0.12}>
        <div className="callout callout-yellow">
          <p>
            Described as the Philippines&apos; first <strong>S&amp;T digital library in a box</strong>{' '}
            — bringing science and technology information closer to Filipino learners.
          </p>
        </div>
      </Reveal>
      <Reveal active={active} delay={0.18}>
        <ul className="check-list">
          <li>Free digital library from DOST-STII, launched in 2011</li>
          <li>Works offline through a stand-alone school kiosk and online at starbooks.ph</li>
          <li>Supplemental tool for research, teaching, and learning</li>
          <li>Deployed in schools, LGUs, and partner institutions nationwide</li>
        </ul>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideWhyTeachers({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Why STARBOOKS for Teachers?"
        title="How STARBOOKS Supports Your Teaching"
        subtitle="Practical ways teachers can use STARBOOKS in everyday classroom instruction"
      />
      <div className="benefit-grid benefit-grid--7">
        {teacherBenefits.map((b, i) => {
          const Icon = benefitIcons[i] ?? BookOpen
          return (
            <Reveal key={b.title} active={active} delay={0.03 + i * 0.025}>
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

export function SlideInside({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="What Can You Find Inside STARBOOKS?"
        title="A Rich Collection of Learning Resources"
        subtitle="Science, technology, and education materials organized for teachers and students"
        compact
      />
      <Reveal active={active} delay={0.06}>
        <p className="section-label">Browse by topic, subject, or grade level</p>
      </Reveal>
      <div className="tag-grid">
        {insideResources.map((item, i) => (
          <Reveal key={item} active={active} delay={0.08 + i * 0.015}>
            <span className="resource-tag">{item}</span>
          </Reveal>
        ))}
      </div>
    </SlideLayout>
  )
}

export function SlideGradeLevels({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="STARBOOKS for Different Grade Levels"
        title="Resources by Education Level"
        subtitle="Match STARBOOKS materials to your students' grade or program"
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Possible Resources</th>
              </tr>
            </thead>
            <tbody>
              {gradeLevelResources.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.resources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SlideLayout>
  )
}

export function SlidePlatforms({ active }) {
  return (
    <SlideLayout variant="features-highlight">
      <SlideHeader
        active={active}
        tag="⭐ Platforms & Features"
        title="Access STARBOOKS Your Way"
        subtitle="Offline, online, and mobile — free for schools and communities"
        compact
      />
      <Reveal active={active} delay={0.06}>
        <div className="feature-pills">
          {mainFeatures.map((f, i) => (
            <span key={f.title} className={`pill ${i % 2 ? 'pill-yellow' : 'pill-blue'}`}>
              {f.title}
            </span>
          ))}
        </div>
      </Reveal>
      <div className="platform-grid">
        {platforms.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal key={p.title} active={active} delay={0.05 + i * 0.06}>
              <article className={`platform-card platform-card--${i}`}>
                <div className="platform-card-head">
                  <span className="platform-emoji">{p.emoji}</span>
                  <div className="platform-icon">
                    <Icon size={20} />
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p className="platform-sub">{p.subtitle}</p>
                <p className="platform-label">Best for:</p>
                <ul>
                  {p.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </SlideLayout>
  )
}

export function SlideOfflineAccess({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="⭐ How to Access STARBOOKS Offline"
        title="Launch STARBOOKS on the Kiosk"
        subtitle="Follow these four steps to open STARBOOKS from the external drive"
        compact
      />
      <div className="access-steps-grid">
        {offlineAccessSteps.map((step, i) => (
          <Reveal key={step.step} active={active} delay={0.04 + i * 0.06}>
            <article className="access-step-card">
              <span className="access-step-label">Step {step.step}</span>
              <img
                src={step.image}
                alt={step.alt}
                className="access-step-image"
                loading="lazy"
                decoding="async"
              />
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SlideLayout>
  )
}

export function SlideSearchGuide({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="⭐ How to Search for a Lesson"
        title={`Search Example: "${searchExample}"`}
        subtitle="Step-by-step guide to finding and using a lesson in STARBOOKS"
        compact
      />
      <div className="steps-flow">
        {searchSteps.map((step, i) => (
          <Reveal key={step.title} active={active} delay={0.04 + i * 0.04}>
            <div className="steps-flow-item">
              <span className="steps-flow-num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < searchSteps.length - 1 && (
                <ChevronDown className="steps-flow-arrow" size={18} aria-hidden />
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal active={active} delay={0.32}>
        <p className="footnote">
          <Search size={14} />
          Demonstrate this live during training so teachers can follow along on the kiosk or online.
        </p>
      </Reveal>
    </SlideLayout>
  )
}

export function SlideClassUse({ active }) {
  return (
    <SlideLayout variant="emphasis">
      <SlideHeader
        active={active}
        tag="⭐ How Teachers Can Use STARBOOKS in Class"
        title="Before · During · After Class"
        subtitle="Integrate STARBOOKS at every stage of your lesson planning and delivery"
      />
      <div className="phase-grid">
        {classUsePhases.map((uc, i) => (
          <Reveal key={uc.phase} active={active} delay={0.05 + i * 0.06}>
            <article className={`phase-card phase-card--${i}`}>
              <span className="phase-emoji">{uc.emoji}</span>
              <h3>{uc.phase}</h3>
              <ul className="phase-emoji-list">
                {uc.items.map((item) => (
                  <li key={item.text}>
                    <span className="phase-item-emoji">{item.emoji}</span>
                    {item.text}
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

export function SlideLessonFlow({ active }) {
  return (
    <SlideLayout variant="flow-highlight">
      <SlideHeader
        active={active}
        tag="Example: From Lesson → Activity"
        title="A Complete Learning Experience"
        subtitle="STARBOOKS is not just for browsing — it supports a full lesson flow"
        compact
      />
      <Reveal active={active} delay={0.05}>
        <p className="flow-journey-banner">
          One topic → read → watch → interact → assess → explore
        </p>
      </Reveal>
      <div className="lesson-flow-track">
        {lessonFlow.map((step, i) => (
          <Reveal
            key={step.label}
            active={active}
            delay={0.08 + i * 0.06}
            className={`lesson-flow-reveal${i === lessonFlow.length - 1 ? ' lesson-flow-reveal--last' : ''}`}
          >
            <div className="lesson-flow-unit">
              <article className={`lesson-flow-card lesson-flow-card--${i}`}>
                <span className="lesson-flow-badge">{i + 1}</span>
                <span className="lesson-flow-emoji">{step.emoji}</span>
                <h3 className="lesson-flow-label">{step.label}</h3>
                <p className="lesson-flow-desc">{step.desc}</p>
              </article>
              {i < lessonFlow.length - 1 && (
                <ChevronRight className="lesson-flow-arrow-h" size={28} strokeWidth={2.5} aria-hidden />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </SlideLayout>
  )
}

export function SlideWorkshop({ active }) {
  return (
    <SlideLayout variant="workshop">
      <SlideHeader
        active={active}
        tag="⭐ Hands-On Activity"
        title="Explore STARBOOKS"
        subtitle="Give each teacher 5–10 minutes to try these steps"
      />
      <ol className="task-list">
        {workshopTasks.map((item, i) => (
          <Reveal key={item.task} active={active} delay={0.04 + i * 0.05}>
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
      <Reveal active={active} delay={0.32}>
        <div className="workshop-question">
          <strong>Then ask:</strong> {workshopQuestion}
        </div>
      </Reveal>
      <Reveal active={active} delay={0.36}>
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

export function SlideRecap({ active }) {
  return (
    <SlideLayout>
      <SlideHeader
        active={active}
        tag="Quick Recap"
        title="Remember These 5 Things"
        subtitle="Key takeaways from today's STARBOOKS teacher orientation"
        compact
      />
      <div className="recap-grid">
        {recapPoints.map((item, i) => (
          <Reveal key={item.word} active={active} delay={0.04 + i * 0.05}>
            <article className="recap-card">
              <span className="recap-emoji">{item.emoji}</span>
              <span className="recap-word">{item.word}</span>
              <span className="recap-desc">{item.desc}</span>
            </article>
          </Reveal>
        ))}
      </div>
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
        <Reveal active={active} delay={0.35}>
          <p className="closing-credit">
            Department of Science and Technology – Science and Technology Information Institute
          </p>
          <a
            href="https://stii.dost.gov.ph/starbooks/"
            target="_blank"
            rel="noreferrer"
            className="closing-link"
          >
            stii.dost.gov.ph/starbooks
            <ExternalLink size={14} />
          </a>
          <button
            type="button"
            className="closing-manual-link"
            onClick={() => window.open('/starbooks-teacher-manual.html', '_blank')}
          >
            Open printable teacher manual
            <ExternalLink size={14} />
          </button>
        </Reveal>
      </div>
    </SlideLayout>
  )
}

export const SLIDE_LIST = [
  { id: 'intro', label: 'Title', Component: SlideIntro },
  { id: 'what-is', label: 'About', Component: SlideWhatIs },
  { id: 'why', label: 'Why', Component: SlideWhyTeachers },
  { id: 'inside', label: 'Contents', Component: SlideInside },
  { id: 'grades', label: 'Levels', Component: SlideGradeLevels },
  { id: 'platforms', label: 'Platforms', Component: SlidePlatforms },
  { id: 'offline', label: 'Offline', Component: SlideOfflineAccess },
  { id: 'search', label: 'Search', Component: SlideSearchGuide },
  { id: 'class-use', label: 'In Class', Component: SlideClassUse },
  { id: 'flow', label: 'Flow', Component: SlideLessonFlow },
  { id: 'workshop', label: 'Try It', Component: SlideWorkshop },
  { id: 'recap', label: 'Recap', Component: SlideRecap },
  { id: 'end', label: 'End', Component: SlideEnd },
]
