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

const BLUE = '00AEEF'
const BLUE_DARK = '0090C8'
const YELLOW = 'FFC220'
const BLACK = '1A1A1A'
const GRAY = '4A5568'
const WHITE = 'FFFFFF'
const BG = 'F5FBFE'

async function loadImage(path) {
  try {
    const res = await fetch(path)
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

async function loadLogo() {
  return loadImage('/starbooks-logo.png')
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
    fontSize: 26,
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
      fontSize: 13,
      color: GRAY,
    })
  }
}

function bulletBlock(slide, items, y, h = 4) {
  slide.addText(
    items.map((text) => ({ text, options: { bullet: true, breakLine: true } })),
    { x: 0.75, y, w: 12, h, fontSize: 11, color: BLACK, valign: 'top', lineSpacing: 16 },
  )
}

export async function exportStarbooksPptx() {
  const { default: pptxgen } = await import('pptxgenjs')
  const pptx = new pptxgen()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.author = 'DOST-STII'
  pptx.title = 'STARBOOKS Teacher Orientation'
  pptx.subject = 'Using STARBOOKS as a Digital Learning and Research Resource'

  const logo = await loadLogo()
  const offlineImages = await Promise.all(
    offlineAccessSteps.map((step) => loadImage(step.image)),
  )

  // 1. Title
  const titleSlide = pptx.addSlide()
  titleSlide.background = { color: BG }
  brandBar(titleSlide)
  if (logo) titleSlide.addImage({ data: logo, x: 5.35, y: 0.95, w: 2.3, h: 1.1 })
  titleSlide.addText(
    'Department of Science and Technology – Science and Technology Information Institute',
    { x: 0.6, y: 2.2, w: 12, h: 0.5, fontSize: 12, color: GRAY, align: 'center' },
  )
  titleSlide.addText('STARBOOKS Teacher Orientation', {
    x: 0.6,
    y: 2.75,
    w: 12,
    h: 0.9,
    fontSize: 36,
    bold: true,
    color: BLUE,
    align: 'center',
  })
  titleSlide.addText('Using STARBOOKS as a Digital Learning and Research Resource', {
    x: 1,
    y: 3.65,
    w: 11.3,
    h: 0.55,
    fontSize: 16,
    bold: true,
    color: BLACK,
    align: 'center',
  })
  titleSlide.addText('Library in a Box  ·  Free for Schools', {
    x: 3.5,
    y: 4.45,
    w: 6.3,
    h: 0.45,
    fontSize: 12,
    bold: true,
    color: BLACK,
    fill: { color: YELLOW },
    align: 'center',
    shape: pptx.ShapeType.roundRect,
  })

  // 2. What is STARBOOKS?
  const whatIs = pptx.addSlide()
  whatIs.background = { color: BG }
  brandBar(whatIs)
  slideHeader(whatIs, 'What is STARBOOKS?', 'STARBOOKS', starbooksAcronym)
  whatIs.addShape('roundRect', {
    x: 0.6,
    y: 2.15,
    w: 12.1,
    h: 0.75,
    fill: { color: 'E6F7FD' },
    line: { color: BLUE, width: 1 },
    rectRadius: 0.06,
  })
  whatIs.addText(
    'STARBOOKS is a digital library that provides access to Science, Technology, and educational resources through different platforms.',
    { x: 0.85, y: 2.25, w: 11.6, h: 0.6, fontSize: 12, color: BLACK },
  )
  whatIs.addText(
    "Described as the Philippines' first S&T digital library in a box — bringing science and technology information closer to Filipino learners.",
    { x: 0.85, y: 3.05, w: 11.6, h: 0.55, fontSize: 11, bold: true, color: BLACK, fill: { color: 'FFF8E1' } },
  )
  bulletBlock(whatIs, [
    'Free digital library from DOST-STII, launched in 2011',
    'Works offline through a stand-alone school kiosk and online at starbooks.ph',
    'Supplemental tool for research, teaching, and learning',
  ], 3.75, 2.5)

  // 3. Why for Teachers
  const why = pptx.addSlide()
  why.background = { color: BG }
  brandBar(why)
  slideHeader(
    why,
    'Why STARBOOKS for Teachers?',
    'How STARBOOKS Supports Your Teaching',
    'Practical ways teachers can use STARBOOKS in everyday classroom instruction',
  )
  teacherBenefits.forEach((b, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 0.6 + col * 6.25
    const y = 2.15 + row * 1.05
    why.addShape('roundRect', {
      x,
      y,
      w: 5.9,
      h: 0.9,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.06,
    })
    why.addText(b.title, {
      x: x + 0.15,
      y: y + 0.1,
      w: 5.6,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: BLUE_DARK,
    })
    why.addText(b.desc, {
      x: x + 0.15,
      y: y + 0.4,
      w: 5.6,
      h: 0.45,
      fontSize: 9,
      color: GRAY,
    })
  })

  // 4. What's Inside
  const inside = pptx.addSlide()
  inside.background = { color: BG }
  brandBar(inside)
  slideHeader(
    inside,
    'What Can You Find Inside STARBOOKS?',
    'A Rich Collection of Learning Resources',
    'Science, technology, and education materials organized for teachers and students',
  )
  insideResources.forEach((item, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    const x = 0.6 + col * 3.08
    const y = 2.2 + row * 0.55
    inside.addText(item, {
      x,
      y,
      w: 2.85,
      h: 0.4,
      fontSize: 9,
      bold: true,
      color: BLUE_DARK,
      fill: { color: WHITE },
      align: 'center',
      shape: pptx.ShapeType.roundRect,
    })
  })

  // 5. Grade Levels
  const grades = pptx.addSlide()
  grades.background = { color: BG }
  brandBar(grades)
  slideHeader(
    grades,
    'STARBOOKS for Different Grade Levels',
    'Resources by Education Level',
    "Match STARBOOKS materials to your students' grade or program",
  )
  gradeLevelResources.forEach((row, i) => {
    const y = 2.25 + i * 0.95
    grades.addShape('rect', {
      x: 0.6,
      y,
      w: 12.1,
      h: 0.85,
      fill: { color: i % 2 ? 'E6F7FD' : WHITE },
      line: { color: 'CCE9F5', width: 1 },
    })
    grades.addText(row.level, {
      x: 0.75,
      y: y + 0.15,
      w: 2.5,
      h: 0.55,
      fontSize: 12,
      bold: true,
      color: BLUE_DARK,
    })
    grades.addText(row.resources, {
      x: 3.4,
      y: y + 0.15,
      w: 9.1,
      h: 0.55,
      fontSize: 11,
      color: GRAY,
    })
  })

  // 6. Platforms & Features
  const plat = pptx.addSlide()
  plat.background = { color: BG }
  brandBar(plat)
  slideHeader(
    plat,
    'Platforms & Features',
    'Access STARBOOKS Your Way',
    'Offline, online, and mobile — free for schools and communities',
  )
  mainFeatures.forEach((f, i) => {
    const x = 0.6 + i * 3.08
    plat.addText(f.title, {
      x,
      y: 2.05,
      w: 2.85,
      h: 0.4,
      fontSize: 11,
      bold: true,
      color: BLACK,
      fill: { color: i % 2 ? YELLOW : 'E6F7FD' },
      align: 'center',
      shape: pptx.ShapeType.roundRect,
    })
  })
  platforms.forEach((p, i) => {
    const x = 0.6 + i * 4.1
    plat.addShape('roundRect', {
      x,
      y: 2.55,
      w: 3.85,
      h: 4.5,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    plat.addText(`${p.emoji} ${p.title}`, {
      x: x + 0.15,
      y: 2.7,
      w: 3.55,
      h: 0.45,
      fontSize: 13,
      bold: true,
      color: BLUE_DARK,
    })
    plat.addText(p.subtitle, {
      x: x + 0.15,
      y: 3.2,
      w: 3.55,
      h: 0.5,
      fontSize: 9,
      color: GRAY,
    })
    plat.addText(
      p.bestFor.map((item) => ({ text: item, options: { bullet: true, breakLine: true } })),
      { x: x + 0.15, y: 3.8, w: 3.55, h: 2.8, fontSize: 9, color: BLACK, valign: 'top' },
    )
  })

  // 7. Offline Access
  const offline = pptx.addSlide()
  offline.background = { color: BG }
  brandBar(offline)
  slideHeader(
    offline,
    'How to Access STARBOOKS Offline',
    'Launch STARBOOKS on the Kiosk',
    'Follow these four steps to open STARBOOKS from the external drive',
  )
  offlineAccessSteps.forEach((step, i) => {
    const x = 0.6 + i * 3.08
    offline.addShape('roundRect', {
      x,
      y: 2.2,
      w: 2.85,
      h: 3.5,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.06,
    })
    offline.addText(`Step ${step.step}`, {
      x,
      y: 2.3,
      w: 2.85,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: BLUE,
      align: 'center',
    })
    offline.addText(step.title, {
      x: x + 0.1,
      y: 2.65,
      w: 2.65,
      h: 0.55,
      fontSize: 10,
      bold: true,
      color: BLACK,
      align: 'center',
    })
    if (offlineImages[i]) {
      offline.addImage({
        data: offlineImages[i],
        x: x + 0.12,
        y: 3.25,
        w: 2.6,
        h: 1.55,
      })
    }
    offline.addText(step.detail, {
      x: x + 0.1,
      y: 4.95,
      w: 2.65,
      h: 0.85,
      fontSize: 8,
      color: GRAY,
      valign: 'top',
    })
  })

  // 8. Search Guide
  const search = pptx.addSlide()
  search.background = { color: BG }
  brandBar(search)
  slideHeader(
    search,
    'How to Search for a Lesson',
    `Search Example: "${searchExample}"`,
    'Step-by-step guide to finding and using a lesson in STARBOOKS',
  )
  searchSteps.forEach((step, i) => {
    const y = 2.15 + i * 0.72
    search.addText(String(i + 1), {
      x: 0.6,
      y,
      w: 0.4,
      h: 0.4,
      fontSize: 12,
      bold: true,
      color: WHITE,
      fill: { color: BLUE },
      align: 'center',
      shape: pptx.ShapeType.ellipse,
    })
    search.addText(step.title, {
      x: 1.15,
      y,
      w: 4,
      h: 0.55,
      fontSize: 12,
      bold: true,
      color: BLACK,
    })
    search.addText(step.desc, {
      x: 5.2,
      y,
      w: 7.5,
      h: 0.55,
      fontSize: 11,
      color: GRAY,
    })
  })

  // 9. Class Use
  const classUse = pptx.addSlide()
  classUse.background = { color: BG }
  brandBar(classUse)
  slideHeader(
    classUse,
    'How Teachers Can Use STARBOOKS in Class',
    'Before · During · After Class',
    'Integrate STARBOOKS at every stage of your lesson planning and delivery',
  )
  classUsePhases.forEach((uc, i) => {
    const x = 0.6 + i * 4.1
    classUse.addShape('roundRect', {
      x,
      y: 2.2,
      w: 3.85,
      h: 4.5,
      fill: { color: WHITE },
      line: { color: 'CCE9F5', width: 1 },
      rectRadius: 0.08,
    })
    classUse.addText(`${uc.emoji} ${uc.phase}`, {
      x: x + 0.15,
      y: 2.35,
      w: 3.55,
      h: 0.45,
      fontSize: 14,
      bold: true,
      color: BLUE_DARK,
    })
    classUse.addText(
      uc.items.map((item) => ({ text: `${item.emoji} ${item.text}`, options: { bullet: true, breakLine: true } })),
      { x: x + 0.15, y: 2.95, w: 3.55, h: 3.5, fontSize: 10, color: BLACK, valign: 'top' },
    )
  })

  // 10. Lesson Flow
  const flow = pptx.addSlide()
  flow.background = { color: BG }
  brandBar(flow)
  slideHeader(
    flow,
    'Example: From Lesson → Activity',
    'A Complete Learning Experience',
    'STARBOOKS is not just for browsing — it supports a full lesson flow',
  )
  flow.addText('One topic → read → watch → interact → assess → explore', {
    x: 2.2,
    y: 2.05,
    w: 8.9,
    h: 0.4,
    fontSize: 11,
    bold: true,
    color: BLUE_DARK,
    fill: { color: 'FFF8E1' },
    align: 'center',
    shape: pptx.ShapeType.roundRect,
  })
  lessonFlow.forEach((step, i) => {
    const x = 0.55 + i * 2.48
    flow.addShape('roundRect', {
      x,
      y: 2.65,
      w: 2.2,
      h: 3.35,
      fill: { color: WHITE },
      line: { color: BLUE, width: 1 },
      rectRadius: 0.08,
    })
    flow.addText(String(i + 1), {
      x: x + 1.75,
      y: 2.75,
      w: 0.35,
      h: 0.35,
      fontSize: 10,
      bold: true,
      color: WHITE,
      fill: { color: BLUE },
      align: 'center',
      shape: pptx.ShapeType.ellipse,
    })
    flow.addText(step.emoji, {
      x,
      y: 3.15,
      w: 2.2,
      h: 0.55,
      fontSize: 22,
      align: 'center',
    })
    flow.addText(step.label, {
      x: x + 0.1,
      y: 3.75,
      w: 2,
      h: 0.4,
      fontSize: 11,
      bold: true,
      color: BLUE_DARK,
      align: 'center',
    })
    flow.addText(step.desc, {
      x: x + 0.1,
      y: 4.2,
      w: 2,
      h: 1.6,
      fontSize: 9,
      color: GRAY,
      align: 'center',
      valign: 'top',
    })
    if (i < lessonFlow.length - 1) {
      flow.addText('→', {
        x: x + 2.15,
        y: 4.05,
        w: 0.35,
        h: 0.45,
        fontSize: 18,
        bold: true,
        color: YELLOW,
        align: 'center',
      })
    }
  })

  // 11. Workshop
  const workshop = pptx.addSlide()
  workshop.background = { color: BG }
  brandBar(workshop)
  slideHeader(
    workshop,
    'Hands-On Activity',
    'Explore STARBOOKS',
    'Give each teacher 5–10 minutes to try these steps',
  )
  workshopTasks.forEach((item, i) => {
    const y = 2.15 + i * 0.85
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
      fontSize: 13,
      bold: true,
      color: BLACK,
    })
    workshop.addText(item.hint, {
      x: 1.2,
      y: y + 0.38,
      w: 11,
      h: 0.4,
      fontSize: 11,
      color: GRAY,
    })
  })
  workshop.addText(`Then ask: ${workshopQuestion}`, {
    x: 0.6,
    y: 6.4,
    w: 12,
    h: 0.45,
    fontSize: 12,
    bold: true,
    color: BLUE_DARK,
    fill: { color: 'FFF8E1' },
  })

  // 12. Recap
  const recap = pptx.addSlide()
  recap.background = { color: BG }
  brandBar(recap)
  slideHeader(
    recap,
    'Quick Recap',
    'Remember These 5 Things',
    "Key takeaways from today's STARBOOKS teacher orientation",
  )
  recapPoints.forEach((item, i) => {
    const x = 0.6 + i * 2.45
    recap.addShape('roundRect', {
      x,
      y: 2.3,
      w: 2.25,
      h: 3.5,
      fill: { color: WHITE },
      line: { color: BLUE, width: 1 },
      rectRadius: 0.08,
    })
    recap.addText(item.emoji, {
      x,
      y: 2.5,
      w: 2.25,
      h: 0.5,
      fontSize: 22,
      align: 'center',
    })
    recap.addText(item.word, {
      x,
      y: 3.15,
      w: 2.25,
      h: 0.4,
      fontSize: 13,
      bold: true,
      color: BLUE_DARK,
      align: 'center',
    })
    recap.addText(item.desc, {
      x: x + 0.1,
      y: 3.6,
      w: 2.05,
      h: 2,
      fontSize: 9,
      color: GRAY,
      align: 'center',
      valign: 'top',
    })
  })

  // 18. Thank You
  const end = pptx.addSlide()
  end.background = { color: BLUE }
  brandBar(end)
  if (logo) end.addImage({ data: logo, x: 5.5, y: 1.5, w: 2, h: 0.95 })
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
  end.addText(
    'Department of Science and Technology – Science and Technology Information Institute',
    { x: 0.6, y: 5.85, w: 12, h: 0.35, fontSize: 12, color: WHITE, align: 'center' },
  )
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
