import {
  Gift,
  Globe,
  Monitor,
  Package,
  Smartphone,
  Users,
  WifiOff,
} from 'lucide-react'

export const starbooksAcronym =
  'Science and Technology Academic and Research-Based Openly Operated Kiosks'

export const teacherBenefits = [
  {
    title: 'Supplement classroom lessons',
    desc: 'Add credible S&T materials that support your existing lesson plans.',
  },
  {
    title: 'Find additional learning resources',
    desc: 'Discover articles, modules, and references beyond the textbook.',
  },
  {
    title: 'Support student research',
    desc: 'Give students reliable sources for reports and investigatory projects.',
  },
  {
    title: 'Provide multimedia learning materials',
    desc: 'Use videos, simulations, and interactive content to explain difficult topics.',
  },
  {
    title: 'Give students activities and quizzes',
    desc: 'Reinforce learning with built-in assessments and classroom activities.',
  },
  {
    title: 'Encourage independent learning',
    desc: 'Let students explore topics on their own and develop study habits.',
  },
  {
    title: 'Reach learners with limited internet',
    desc: 'Use the offline kiosk where connectivity is unreliable or unavailable.',
  },
]

export const insideResources = [
  'K–12 Materials',
  'Science',
  'Mathematics',
  'Energy',
  'Agriculture',
  'Food and Nutrition',
  'Environmental Resources',
  'Philippine Science',
  'Philippine Journal of Science',
  'DOSTv',
  'Investigatory Projects',
  'Theses / Dissertations',
  'SAT Encyclopedia',
  'Math & Science Simulations',
  'Videos',
  'Storybooks',
  'Research Projects',
  'TIMSS',
  'PISA',
]

export const gradeLevelResources = [
  {
    level: 'Elementary',
    resources: 'Science, Mathematics, English, Filipino, Health, Arts',
  },
  {
    level: 'Junior High School',
    resources: 'Science, Mathematics, Social Studies, Health, Technology',
  },
  {
    level: 'Senior High School',
    resources:
      'General Mathematics, Earth Science, Biology, Chemistry, Physics, Media & Information Literacy',
  },
  {
    level: 'College',
    resources: 'General Education subjects, Science & Technology, research resources',
  },
]

export const mainFeatures = [
  {
    icon: WifiOff,
    title: 'OFFLINE',
    desc: 'Access resources without an internet connection through the STARBOOKS kiosk.',
  },
  {
    icon: Users,
    title: 'MULTI-ACCESS',
    desc: 'Available through different platforms so more learners can connect.',
  },
  {
    icon: Package,
    title: 'TRANSPORTABLE',
    desc: 'Bring digital learning resources to different locations and communities.',
  },
  {
    icon: Gift,
    title: 'FREE',
    desc: 'Free access for users, with free installation for qualified institutions.',
  },
]

export const platforms = [
  {
    icon: Monitor,
    emoji: '🖥️',
    title: 'STARBOOKS Offline',
    subtitle: 'For the STARBOOKS kiosk or computer',
    bestFor: [
      'Schools with limited or no internet',
      'Classroom and library use',
      'Accessing the full offline collection',
    ],
  },
  {
    icon: Globe,
    emoji: '🌐',
    title: 'STARBOOKS Online',
    subtitle: 'For accessing STARBOOKS content online at starbooks.ph',
    bestFor: [
      'Requires internet access',
      'More than 8,000 K–12 lessons, quizzes, and activities',
      'Remote access from any connected device',
    ],
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Mobile Apps',
    subtitle: 'For portable access through mobile devices',
    bestFor: [
      'Portable learning on phones and tablets',
      'Concise, mobile-friendly content',
      'Gamified and interactive materials',
    ],
  },
]

export const offlineAccessSteps = [
  {
    step: 1,
    title: 'Open This PC / My Computer',
    detail: 'From the desktop or File Explorer, open This PC (Windows) or My Computer.',
    image: '/images/offline-step-1-this-pc.png',
    alt: 'Windows File Explorer showing This PC',
  },
  {
    step: 2,
    title: 'Select the external drive',
    detail: 'Choose the drive where STARBOOKS is installed — usually an external USB drive.',
    image: '/images/offline-step-2-external-drive.png',
    alt: 'File Explorer showing the STARBOOKS external drive',
  },
  {
    step: 3,
    title: 'Open the STARBOOKS-offline folder',
    detail: 'Double-click the STARBOOKS-offline folder to open it.',
    image: '/images/offline-step-3-folder.png',
    alt: 'STARBOOKS-offline folder in File Explorer',
  },
  {
    step: 4,
    title: 'Run sb_controller_2024.exe',
    detail: 'Double-click sb_controller_2024.exe to launch STARBOOKS on the kiosk.',
    image: '/images/offline-step-4-exe.png',
    alt: 'sb_controller_2024.exe in File Explorer',
  },
]

export const searchExample = 'Photosynthesis'

export const searchSteps = [
  {
    title: 'Select Search or a relevant category',
    desc: 'Use Search for a specific topic, or browse Science / K–12 categories.',
  },
  {
    title: 'Enter "Photosynthesis"',
    desc: 'Type your keyword and review the list of matching resources.',
  },
  {
    title: 'Browse and open a resource',
    desc: 'Preview lessons, videos, or activities — pick what fits your learning objective.',
  },
  {
    title: 'Use it in your lesson',
    desc: 'Present in class, assign for homework, or use for discussion.',
  },
]

export const classUsePhases = [
  {
    phase: 'Before Class',
    emoji: '🔎',
    items: [
      { emoji: '🔎', text: 'Search for supplementary materials' },
      { emoji: '📚', text: 'Review references' },
      { emoji: '🎥', text: 'Find videos' },
      { emoji: '📝', text: 'Prepare activities' },
    ],
  },
  {
    phase: 'During Class',
    emoji: '📺',
    items: [
      { emoji: '📺', text: 'Show multimedia resources' },
      { emoji: '📖', text: 'Use digital references' },
      { emoji: '🧪', text: 'Demonstrate science concepts' },
      { emoji: '💡', text: 'Facilitate discussion' },
    ],
  },
  {
    phase: 'After Class',
    emoji: '📚',
    items: [
      { emoji: '📚', text: 'Assign research' },
      { emoji: '📝', text: 'Give activities' },
      { emoji: '🔎', text: 'Let students explore topics' },
      { emoji: '📊', text: 'Use quizzes and resources for reinforcement' },
    ],
  },
]

export const classroomScenario = {
  topic: 'The Respiratory and Circulatory Systems',
  subject: 'Science 9',
  steps: [
    {
      title: 'Teacher introduces the topic',
      desc: 'Begin with a brief overview of how the respiratory and circulatory systems work together.',
    },
    {
      title: 'Open STARBOOKS',
      desc: 'Launch the kiosk or open starbooks.ph on your classroom computer.',
    },
    {
      title: 'Search or locate Science 9 material',
      desc: 'Find the lesson on the Respiratory and Circulatory Systems in the Science 9 collection.',
    },
    {
      title: 'Open the lesson',
      desc: 'Review the content and identify key points to highlight with your class.',
    },
    {
      title: 'Show the illustration or video',
      desc: 'Use multimedia to help students visualize how the systems function.',
    },
    {
      title: 'Let students answer the activity or quiz',
      desc: 'Use the built-in multiple-choice activity to check understanding.',
    },
    {
      title: 'Discuss the answers',
      desc: 'Facilitate a class discussion to clarify misconceptions and reinforce learning.',
    },
  ],
}

export const interactiveMaterials = [
  {
    emoji: '📖',
    title: 'Storybooks',
    desc: 'Science and Mathematics storybooks for engaging early learning.',
  },
  {
    emoji: '🎥',
    title: 'Short Videos',
    desc: 'Short educational videos that explain concepts visually.',
  },
  {
    emoji: '🧮',
    title: 'Simulations',
    desc: 'Math and science simulations for hands-on virtual exploration.',
  },
  {
    emoji: '📝',
    title: 'Quizzes',
    desc: 'Interactive assessment materials to check student understanding.',
  },
  {
    emoji: '🔬',
    title: 'Investigatory Projects',
    desc: 'Research and project references for student investigations.',
  },
]

export const lessonFlow = [
  { emoji: '📖', label: 'LESSON', desc: 'Read the learning material' },
  { emoji: '🎥', label: 'MULTIMEDIA', desc: 'Watch the related video' },
  { emoji: '🧮', label: 'INTERACTIVE', desc: 'Try the simulation' },
  { emoji: '📝', label: 'ACTIVITY', desc: 'Answer the questions' },
  { emoji: '🔎', label: 'RESEARCH', desc: 'Explore related resources' },
]

export const platformComparison = {
  headers: ['', 'Offline', 'Online', 'Mobile'],
  rows: [
    {
      label: 'Internet',
      offline: '❌ Not required',
      online: '✅ Required',
      mobile: '✅ Required',
    },
    {
      label: 'Device',
      offline: 'STARBOOKS kiosk / computer',
      online: 'Computer or device',
      mobile: 'Phone / tablet',
    },
    {
      label: 'Access',
      offline: 'School / site',
      online: 'Anywhere with internet',
      mobile: 'Anywhere with internet',
    },
    {
      label: 'Content',
      offline: 'Full offline collection',
      online: 'Online collection',
      mobile: 'Concise mobile content',
    },
    {
      label: 'Best Use',
      offline: 'Schools / classrooms',
      online: 'Remote access',
      mobile: 'Individual learning',
    },
  ],
}

export const teacherTips = [
  {
    num: 1,
    title: 'Search before your lesson',
    desc: 'Find relevant materials ahead of time so you are prepared.',
  },
  {
    num: 2,
    title: 'Match resources with your learning objective',
    desc: "Don't use a resource just because it's available — choose what fits your goal.",
  },
  {
    num: 3,
    title: 'Use multimedia strategically',
    desc: 'Videos and simulations can reinforce difficult concepts when used at the right moment.',
  },
  {
    num: 4,
    title: 'Encourage student exploration',
    desc: 'Let students search for related information and discover topics on their own.',
  },
  {
    num: 5,
    title: 'Combine STARBOOKS with your existing materials',
    desc: 'Use it as a supplementary resource alongside your textbook and lesson plans.',
  },
]

export const workshopTasks = [
  {
    task: 'Choose one topic from your subject',
    hint: 'Pick something you will teach in the next week or two.',
  },
  {
    task: 'Search STARBOOKS',
    hint: 'Use Search or browse by category to find related materials.',
  },
  {
    task: 'Find one useful resource',
    hint: 'Look for a lesson, video, activity, or reference that fits your topic.',
  },
  {
    task: 'Open and explore the resource',
    hint: 'Preview the content so you know what to highlight in class.',
  },
  {
    task: 'Identify how you can use it in your lesson',
    hint: 'Will you show it in class, assign it, or use it for a quiz?',
  },
]

export const workshopQuestion =
  'What STARBOOKS resource can you use in your next class?'

export const recapPoints = [
  { emoji: '📚', word: 'LEARN', desc: 'Access educational resources.' },
  { emoji: '🔎', word: 'SEARCH', desc: 'Find materials related to your lessons.' },
  {
    emoji: '🎥',
    word: 'EXPLORE',
    desc: 'Use videos, activities, simulations, and other multimedia.',
  },
  { emoji: '👨‍🏫', word: 'TEACH', desc: 'Integrate resources into classroom instruction.' },
  {
    emoji: '🧑‍🎓',
    word: 'ENGAGE',
    desc: 'Encourage students to explore and learn independently.',
  },
]

export const manualSections = [
  {
    title: '1. What is STARBOOKS?',
    items: [
      'STARBOOKS is a free digital library from DOST-STII with science, technology, and education resources.',
      'It works offline through a school kiosk and online at starbooks.ph.',
      'Use it to supplement lessons — not to replace the teacher.',
    ],
  },
  {
    title: '2. How to Open STARBOOKS Offline',
    items: [
      'Open This PC / My Computer.',
      'Select the external drive where STARBOOKS is installed.',
      'Open the STARBOOKS-offline folder.',
      'Run sb_controller_2024.exe.',
    ],
  },
  {
    title: '3. How to Search a Topic',
    items: [
      'Open STARBOOKS (offline kiosk or starbooks.ph).',
      'Click Search or browse a relevant category.',
      'Type your topic (e.g. "Photosynthesis").',
      'Open a lesson, video, or activity from the results.',
    ],
  },
  {
    title: '4. Using STARBOOKS in Class',
    items: [
      'Before class: Search and prepare materials for your lesson.',
      'During class: Show videos or articles and ask guide questions.',
      'After class: Assign readings, research tasks, or review materials.',
    ],
  },
  {
    title: '5. Teacher Tips',
    items: [
      'Search before your lesson and match resources to your objective.',
      'Use multimedia strategically to reinforce difficult concepts.',
      'Encourage students to explore related topics on their own.',
      'Combine STARBOOKS with your existing teaching materials.',
    ],
  },
  {
    title: '6. Need Help?',
    items: [
      'Website: www.starbooks.ph',
      'DOST-STII: stii.dost.gov.ph/starbooks',
      'Ask your school ICT coordinator or STARBOOKS focal person.',
    ],
  },
]
