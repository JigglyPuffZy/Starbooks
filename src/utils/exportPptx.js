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

const BLUE = '00AEEF'
const BLUE_DARK = '0090C8'
const YELLOW = 'FFC220'
const BLACK = '1A1A1A'
const GRAY = '4A5568'
const WHITE = 'FFFFFF'
const BG = 'F5FBFE'

async function loadLogo() {
  try {
    const res = await fetch('/starbooks-logo.png')
    const blob = await res.blob()
    return await new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

function brandBar(slide) {
  slide.addShape('rect', {
    x: 0,
    y: 0,
    w: '100%',
    h: 0.12,
    fill: { type: 'solid', color: BLUE },
    line: { type: 'none' },
  })
  slide.addShape('rect', {
    x: 0,
    y: 0.12,
    w: '100%',
    h: 0.06,
    fill: { type: 'solid', color: YELLOW },
    line: { type: 'none' },
  })
}

function slideHeader(slide, tag, title, subtitle) {
  slide.addText(tag.toUpperCase(), {
    x: 0.6,
    y: 0.45,
    w: 12,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: BLUE,
    charSpacing: 2,
  })
  slide.addText(title, {
    x: 0.6,
    y: 0.85,
    w: 12,
    h: 0.75,
    fontSize: 28,
    bold: true,
    color: BLACK,
    fontFace: 'Arial',
  })
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6,
      y: 1.55,
      w: 11.5,
      h: 0.55,
      fontSize: 14,
      color: GRAY,
    })
  }
}

function twoColumnCards(pptx, { tag, title, subtitle, items, mapItem }) {
  const slide = pptx.addSlide()
  slide.background = { color: BG }
  brandBar(slide)
  slideHeader(slide, tag, title, subtitle)

  const colW = 5.9
  items.forEach((item, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 0.6 + col * (colW + 0.35)
    const y = 2.15 + row * 1.55
    const { heading, body } = mapItem(item)

    slide.addShape('roundRect', {
      x,
      y,
      w: colW,
      h: 1.35,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    slide.addShape('rect', {
      x,
      y,
      w: 0.08,
      h: 1.35,
      fill: { color: BLUE },
      line: { type: 'none' },
    })
    slide.addText(heading, {
      x: x + 0.2,
      y: y + 0.12,
      w: colW - 0.35,
      h: 0.35,
      fontSize: 12,
      bold: true,
      color: BLUE_DARK,
    })
    slide.addText(body, {
      x: x + 0.2,
      y: y + 0.48,
      w: colW - 0.35,
      h: 0.75,
      fontSize: 10,
      color: GRAY,
      valign: 'top',
    })
  })
}

export async function exportStarbooksPptx() {
  const { default: pptxgen } = await import('pptxgenjs')
  const pptx = new pptxgen()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.author = 'DOST-STII'
  pptx.title = 'STARBOOKS Teacher Orientation'
  pptx.subject = 'Teacher Orientation & User Guide'

  const logo = await loadLogo()

  // ── 1. Title ──
  const titleSlide = pptx.addSlide()
  titleSlide.background = { color: BG }
  brandBar(titleSlide)
  if (logo) {
    titleSlide.addImage({ data: logo, x: 5.35, y: 1.15, w: 2.3, h: 1.1 })
  }
  titleSlide.addText('Department of Science and Technology (DOST)', {
    x: 0.6,
    y: 2.45,
    w: 12,
    h: 0.4,
    fontSize: 13,
    color: GRAY,
    align: 'center',
  })
  titleSlide.addText('STARBOOKS', {
    x: 0.6,
    y: 2.85,
    w: 12,
    h: 1,
    fontSize: 54,
    bold: true,
    color: BLUE,
    align: 'center',
  })
  titleSlide.addText('A Digital Library for Science, Technology, and Education', {
    x: 1,
    y: 3.85,
    w: 11.3,
    h: 0.55,
    fontSize: 18,
    bold: true,
    color: BLACK,
    align: 'center',
  })
  titleSlide.addText('Teacher Orientation & User Guide', {
    x: 0.6,
    y: 4.45,
    w: 12,
    h: 0.4,
    fontSize: 14,
    color: GRAY,
    align: 'center',
  })
  titleSlide.addText('Stand-alone Kiosk  ·  Free Access  ·  starbooks.ph', {
    x: 3.2,
    y: 5.1,
    w: 6.9,
    h: 0.45,
    fontSize: 12,
    bold: true,
    color: BLACK,
    fill: { color: YELLOW },
    align: 'center',
    shape: pptx.ShapeType.roundRect,
  })

  // ── 2. About ──
  const about = pptx.addSlide()
  about.background = { color: BG }
  brandBar(about)
  slideHeader(
    about,
    'What is STARBOOKS?',
    'Science & Technology Library for Schools',
    'STARBOOKS = Science and Technology Academic- and Research-Based Openly-Operated KioskS',
  )
  about.addShape('roundRect', {
    x: 0.6,
    y: 2.15,
    w: 12.1,
    h: 0.95,
    fill: { color: 'E6F7FD' },
    line: { color: BLUE, width: 1 },
    rectRadius: 0.06,
  })
  about.addText(
    'A free digital library from DOST-STII, launched in 2011. It serves as a stand-alone supplemental tool for research, teaching, and learning — giving teachers and students access to science, technology, and educational resources even without reliable internet.',
    { x: 0.85, y: 2.25, w: 11.6, h: 0.85, fontSize: 12, color: BLACK },
  )
  aboutStats.forEach((stat, i) => {
    const x = 0.6 + i * 3.08
    about.addShape('roundRect', {
      x,
      y: 3.2,
      w: 2.85,
      h: 0.85,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    about.addText(stat.value, {
      x,
      y: 3.28,
      w: 2.85,
      h: 0.4,
      fontSize: stat.value.length > 6 ? 14 : 18,
      bold: true,
      color: BLUE,
      align: 'center',
    })
    about.addText(stat.label, {
      x,
      y: 3.68,
      w: 2.85,
      h: 0.3,
      fontSize: 8,
      bold: true,
      color: GRAY,
      align: 'center',
    })
  })

  const about2 = pptx.addSlide()
  about2.background = { color: BG }
  brandBar(about2)
  slideHeader(
    about2,
    'What is STARBOOKS?',
    "What's Inside STARBOOKS?",
    'Digitized science and technology resources organized for teachers and students',
  )
  aboutContentTypes.forEach((item, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const x = 0.6 + col * 4.1
    const y = 2.15 + row * 1.55
    about2.addShape('roundRect', {
      x,
      y,
      w: 3.85,
      h: 1.35,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.06,
    })
    about2.addText(item.title, {
      x: x + 0.15,
      y: y + 0.12,
      w: 3.55,
      h: 0.35,
      fontSize: 11,
      bold: true,
      color: BLACK,
    })
    about2.addText(item.desc, {
      x: x + 0.15,
      y: y + 0.48,
      w: 3.55,
      h: 0.75,
      fontSize: 9,
      color: GRAY,
      valign: 'top',
    })
  })
  about2.addText(
    aboutHighlights.map((b) => ({ text: b, options: { bullet: true, breakLine: true } })),
    {
      x: 0.75,
      y: 5.35,
      w: 12,
      h: 1.8,
      fontSize: 10,
      color: BLACK,
      valign: 'top',
      lineSpacing: 16,
    },
  )

  // ── 3. Benefits ──
  twoColumnCards(pptx, {
    tag: 'Why Use STARBOOKS?',
    title: 'Benefits for Teachers',
    subtitle: 'How STARBOOKS supports effective and meaningful classroom instruction',
    items: benefits,
    mapItem: (b) => ({ heading: b.title, body: b.desc }),
  })

  // ── 4. Features (2 slides) ──
  ;[features.slice(0, 4), features.slice(4)].forEach((chunk, idx) => {
    twoColumnCards(pptx, {
      tag: 'Main Features',
      title: idx === 0 ? 'What You Can Do with STARBOOKS (1/2)' : 'What You Can Do with STARBOOKS (2/2)',
      subtitle: 'Each feature helps you find, use, and share learning materials with your students',
      items: chunk,
      mapItem: (f) => ({
        heading: f.title,
        body: `${f.desc} For teachers: ${f.action}`,
      }),
    })
  })

  // ── 5. Guide (2 slides) ──
  ;[tutorialSteps.slice(0, 3), tutorialSteps.slice(3)].forEach((chunk, idx) => {
    const slide = pptx.addSlide()
    slide.background = { color: BG }
    brandBar(slide)
    slideHeader(
      slide,
      'How to Use STARBOOKS',
      idx === 0 ? '5 Easy Steps to Get Started (1/2)' : '5 Easy Steps to Get Started (2/2)',
      'Follow this guide to begin using STARBOOKS in your classroom',
    )
    if (idx === 0) {
      slide.addText('Try this: Search "Climate Change" → Open a resource → Use it in your Science class', {
        x: 0.6,
        y: 2.1,
        w: 12.1,
        h: 0.45,
        fontSize: 11,
        bold: true,
        color: BLACK,
        fill: { color: 'FFF8E1' },
      })
    }
    chunk.forEach((step, i) => {
      const y = 2.65 + i * 1.55
      slide.addText(String((idx === 0 ? 0 : 3) + i + 1), {
        x: 0.6,
        y,
        w: 0.45,
        h: 0.45,
        fontSize: 14,
        bold: true,
        color: WHITE,
        fill: { color: BLUE },
        align: 'center',
        shape: pptx.ShapeType.ellipse,
      })
      slide.addText(step.title, {
        x: 1.2,
        y,
        w: 11,
        h: 0.35,
        fontSize: 14,
        bold: true,
        color: BLACK,
      })
      slide.addText(step.desc, {
        x: 1.2,
        y: y + 0.35,
        w: 11,
        h: 0.35,
        fontSize: 11,
        color: GRAY,
      })
      slide.addText(
        step.points.map((p) => ({ text: p, options: { bullet: true, breakLine: true } })),
        { x: 1.2, y: y + 0.65, w: 11, h: 0.75, fontSize: 10, color: BLACK },
      )
    })
  })

  // ── 6. Use Cases ──
  const casesSlide = pptx.addSlide()
  casesSlide.background = { color: BG }
  brandBar(casesSlide)
  slideHeader(
    casesSlide,
    'Teacher Use Cases',
    'When to Use STARBOOKS',
    'Use STARBOOKS at every stage of your lesson — before, during, and after class',
  )
  useCases.forEach((uc, i) => {
    const x = 0.6 + i * 4.1
    casesSlide.addShape('roundRect', {
      x,
      y: 2.2,
      w: 3.85,
      h: 4.5,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    casesSlide.addText(`${uc.emoji} ${uc.phase}`, {
      x: x + 0.15,
      y: 2.35,
      w: 3.55,
      h: 0.45,
      fontSize: 14,
      bold: true,
      color: BLUE_DARK,
    })
    casesSlide.addText(uc.summary, {
      x: x + 0.15,
      y: 2.85,
      w: 3.55,
      h: 0.4,
      fontSize: 10,
      italic: true,
      color: GRAY,
    })
    casesSlide.addText(
      uc.items.flatMap((item) => [
        { text: item.title, options: { bold: true, breakLine: true } },
        { text: item.desc, options: { breakLine: true } },
      ]),
      { x: x + 0.15, y: 3.35, w: 3.55, h: 3.1, fontSize: 9, color: BLACK, valign: 'top' },
    )
  })

  // ── 7. Demo ──
  const demo = pptx.addSlide()
  demo.background = { color: BG }
  brandBar(demo)
  slideHeader(
    demo,
    'Example Classroom Activity',
    'Lesson: Renewable Energy',
    'A sample flow showing how STARBOOKS works as a teaching tool in one class period',
  )
  activitySteps.forEach((step, i) => {
    const y = 2.2 + i * 0.72
    demo.addText(String(i + 1), {
      x: 0.6,
      y,
      w: 0.4,
      h: 0.4,
      fontSize: 12,
      bold: true,
      color: BLACK,
      fill: { color: YELLOW },
      align: 'center',
      shape: pptx.ShapeType.roundRect,
    })
    demo.addText(step.title, {
      x: 1.15,
      y,
      w: 3,
      h: 0.55,
      fontSize: 12,
      bold: true,
      color: BLACK,
    })
    demo.addText(step.desc, {
      x: 4.2,
      y,
      w: 8.5,
      h: 0.55,
      fontSize: 11,
      color: GRAY,
    })
  })
  demo.addText('Guide questions for students:', {
    x: 0.6,
    y: 5.85,
    w: 12,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: BLACK,
  })
  demo.addText(
    guideQuestions.map((q) => ({ text: q, options: { bullet: true, breakLine: true } })),
    { x: 0.75, y: 6.2, w: 11.5, h: 1, fontSize: 11, color: GRAY },
  )

  // ── 8. Reminders ──
  const note = pptx.addSlide()
  note.background = { color: BG }
  brandBar(note)
  slideHeader(
    note,
    'Important Reminder',
    'STARBOOKS complements — not replaces — the teacher',
    'Think of STARBOOKS as your extra assistant in the classroom',
  )
  note.addShape('roundRect', {
    x: 0.6,
    y: 2.1,
    w: 12.1,
    h: 0.65,
    fill: { color: 'FFF8E1' },
    line: { color: YELLOW, width: 1 },
    rectRadius: 0.06,
  })
  note.addText(
    'STARBOOKS provides the resources — you provide the teaching, guidance, and connection with your students.',
    { x: 0.85, y: 2.22, w: 11.6, h: 0.45, fontSize: 11, bold: true, color: BLACK },
  )
  reminderPoints.forEach((point, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const x = 0.6 + col * 4.1
    const y = 2.95 + row * 1.75
    note.addShape('roundRect', {
      x,
      y,
      w: 3.85,
      h: 1.55,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    note.addText(String(i + 1).padStart(2, '0'), {
      x: x + 3.2,
      y: y + 0.08,
      w: 0.55,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: 'CCE9F5',
      align: 'right',
    })
    note.addText(point.title, {
      x: x + 0.15,
      y: y + 0.35,
      w: 3.55,
      h: 0.4,
      fontSize: 12,
      bold: true,
      color: BLUE_DARK,
    })
    note.addText(point.desc, {
      x: x + 0.15,
      y: y + 0.75,
      w: 3.55,
      h: 0.7,
      fontSize: 9,
      color: GRAY,
      valign: 'top',
    })
  })

  // ── 9. Workshop ──
  const workshop = pptx.addSlide()
  workshop.background = { color: BG }
  brandBar(workshop)
  slideHeader(
    workshop,
    'Hands-On Activity',
    'Explore STARBOOKS Now',
    'Try it yourself — follow these steps and share one idea with the group',
  )
  workshopTasks.forEach((item, i) => {
    const y = 2.2 + i * 1.05
    workshop.addText(String(i + 1), {
      x: 0.6,
      y,
      w: 0.45,
      h: 0.45,
      fontSize: 14,
      bold: true,
      color: WHITE,
      fill: { color: BLUE },
      align: 'center',
      shape: pptx.ShapeType.ellipse,
    })
    workshop.addText(item.task, {
      x: 1.2,
      y,
      w: 11,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: BLACK,
    })
    workshop.addText(item.hint, {
      x: 1.2,
      y: y + 0.38,
      w: 11,
      h: 0.45,
      fontSize: 11,
      color: GRAY,
    })
  })
  workshop.addText('Visit www.starbooks.ph to explore online.', {
    x: 0.6,
    y: 6.5,
    w: 12,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: BLUE_DARK,
  })

  // ── 10. Manual (2 slides) ──
  ;[manualSections.slice(0, 4), manualSections.slice(4)].forEach((chunk, idx) => {
    const slide = pptx.addSlide()
    slide.background = { color: BG }
    brandBar(slide)
    slideHeader(
      slide,
      'Quick Reference',
      idx === 0 ? 'STARBOOKS Teacher Manual (1/2)' : 'STARBOOKS Teacher Manual (2/2)',
      'Everything you need to start using STARBOOKS in your classroom',
    )
    chunk.forEach((section, i) => {
      const col = i % 2
      const row = Math.floor(i / 2)
      const x = 0.6 + col * 6.25
      const y = 2.15 + row * 2.15
      slide.addShape('roundRect', {
        x,
        y,
        w: 5.9,
        h: 1.95,
        fill: { color: WHITE },
        line: { color: 'CCE9F5', width: 1 },
        rectRadius: 0.06,
      })
      slide.addText(section.title, {
        x: x + 0.15,
        y: y + 0.12,
        w: 5.6,
        h: 0.35,
        fontSize: 11,
        bold: true,
        color: BLUE_DARK,
      })
      slide.addText(
        section.items.map((item) => ({ text: item, options: { bullet: true, breakLine: true } })),
        { x: x + 0.15, y: y + 0.48, w: 5.6, h: 1.35, fontSize: 9, color: GRAY, valign: 'top' },
      )
    })
  })

  // ── 11. Closing ──
  const end = pptx.addSlide()
  end.background = { color: BLUE }
  brandBar(end)
  if (logo) {
    end.addImage({ data: logo, x: 5.5, y: 1.5, w: 2, h: 0.95 })
  }
  end.addText('Thank You!', {
    x: 0.6,
    y: 2.65,
    w: 12,
    h: 0.85,
    fontSize: 40,
    bold: true,
    color: WHITE,
    align: 'center',
  })
  end.addText('STARBOOKS — Bringing Science & Technology Resources Closer to Learners', {
    x: 1,
    y: 3.55,
    w: 11.3,
    h: 0.55,
    fontSize: 16,
    color: WHITE,
    align: 'center',
  })
  closingPoints.forEach((item, i) => {
    const x = 0.85 + i * 3.05
    end.addShape('roundRect', {
      x,
      y: 4.35,
      w: 2.85,
      h: 1.1,
      fill: { color: '0090C8', transparency: 30 },
      line: { color: WHITE, width: 1 },
      rectRadius: 0.08,
    })
    end.addText(item.word, {
      x,
      y: 4.5,
      w: 2.85,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: WHITE,
      align: 'center',
    })
    end.addText(item.desc, {
      x: x + 0.1,
      y: 4.9,
      w: 2.65,
      h: 0.45,
      fontSize: 9,
      color: WHITE,
      align: 'center',
    })
  })
  end.addText('Department of Science and Technology · DOST-STII', {
    x: 0.6,
    y: 5.85,
    w: 12,
    h: 0.35,
    fontSize: 12,
    color: WHITE,
    align: 'center',
  })
  end.addText('stii.dost.gov.ph/starbooks  ·  www.starbooks.ph', {
    x: 0.6,
    y: 6.25,
    w: 12,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: YELLOW,
    align: 'center',
  })

  await pptx.writeFile({ fileName: 'STARBOOKS-Teacher-Orientation.pptx' })
}
