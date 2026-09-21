import {
  BookOpen,
  Search,
  Video,
  FileText,
  FlaskConical,
  GraduationCap,
  WifiOff,
  FolderTree,
} from 'lucide-react'

export const aboutStats = [
  { value: '8,000+', label: 'Sites nationwide' },
  { value: 'Free', label: 'Access for users' },
  { value: 'Offline & Online', label: 'Platforms' },
  { value: '2011', label: 'Launched by DOST-STII' },
]

export const aboutContentTypes = [
  {
    title: 'Research & Journals',
    desc: 'Research papers, journal articles, and technical reports from DOST and partners.',
  },
  {
    title: 'K–12 Materials',
    desc: 'Learning and teaching resources for Grades 1 to 12 students.',
  },
  {
    title: 'Videos & Livelihood',
    desc: 'Educational videos including Tamang DOSTkarte livelihood content.',
  },
  {
    title: 'S&T References',
    desc: 'Reference volumes in science and technology from DOST-STII Library.',
  },
  {
    title: 'Exam Readiness',
    desc: 'PISA and TIMSS readiness materials on the online portal.',
  },
  {
    title: 'Financial Literacy',
    desc: 'Practical learning materials that support life and skills education.',
  },
]

export const aboutHighlights = [
  'Hundreds of thousands of science and technology resources in text, audio, and video formats',
  'Works offline through a stand-alone school kiosk and online at starbooks.ph',
  'Multi-access feature allows several users to connect via local network (LAN) at school',
  'Free supplemental tool for research, teaching, and learning — not a replacement for the teacher',
  'Brings science, technology, and innovation information closer to Filipino learners',
  'Deployed in schools, LGUs, government agencies, and partner institutions nationwide',
]

export const benefits = [
  {
    title: 'Works Without Internet',
    desc: 'Access books, videos, and learning materials through the offline kiosk — ideal for schools with limited or no internet connection.',
  },
  {
    title: 'Enrich Your Lessons',
    desc: 'Use articles and videos to supplement your discussion and make abstract topics easier for students to understand.',
  },
  {
    title: 'Provide Quality References',
    desc: 'Give students credible DOST-sourced materials for reading, review, and deeper learning beyond the textbook.',
  },
  {
    title: 'Support Research & Projects',
    desc: 'Help students find reliable sources for reports, investigations, and classroom research assignments.',
  },
  {
    title: 'Promote Independent Learning',
    desc: 'Encourage students to explore topics on their own and develop self-directed study habits.',
  },
  {
    title: 'Access S&T Resources',
    desc: 'Bring science and technology content closer to learners — even in remote or underserved areas.',
  },
]

export const features = [
  {
    icon: BookOpen,
    title: 'Digital Library',
    desc: 'A collection of digitized science and technology resources organized for easy browsing.',
    action: 'Open books, journals, and modules aligned with your lesson.',
  },
  {
    icon: Search,
    title: 'Search',
    desc: 'Quickly find topics, articles, videos, and documents using keywords.',
    action: 'Example: Search "Climate Change" and pick a resource for class.',
  },
  {
    icon: Video,
    title: 'Videos & Multimedia',
    desc: 'Educational videos including Tamang DOSTkarte livelihood content.',
    action: 'Show a video during discussion to make the lesson more engaging.',
  },
  {
    icon: FileText,
    title: 'E-books & Documents',
    desc: 'Journals, theses, technical reports, and other reference materials.',
    action: 'Display or assign readings for research and class activities.',
  },
  {
    icon: FlaskConical,
    title: 'Science & Technology',
    desc: 'Research papers and S&T content from DOST and partner institutions.',
    action: 'Use for STEM lessons, research classes, and advanced topics.',
  },
  {
    icon: GraduationCap,
    title: 'K–12 & College Materials',
    desc: 'Grade-appropriate resources including GEC, PISA, and TIMSS readiness content.',
    action: 'Assign materials that match your students\' grade level.',
  },
  {
    icon: WifiOff,
    title: 'Offline Access',
    desc: 'The kiosk works as a stand-alone "Library in a Box" without internet.',
    action: 'Use STARBOOKS anytime at school — no Wi-Fi required.',
  },
  {
    icon: FolderTree,
    title: 'Organized Categories',
    desc: 'Resources sorted by subject, format, and grade level for easy navigation.',
    action: 'Browse by category when you want to discover new materials.',
  },
]

export const tutorialSteps = [
  {
    title: 'Start STARBOOKS',
    desc: 'Begin by opening the STARBOOKS system on your school kiosk or computer.',
    points: [
      'Turn on the STARBOOKS kiosk and wait for it to load completely.',
      'Or visit www.starbooks.ph and register to access resources for free.',
      'Make sure the home screen is ready before proceeding.',
    ],
  },
  {
    title: 'Explore the Home Screen',
    desc: 'Familiarize yourself with the main menus so you know where everything is.',
    points: [
      'Library — browse all available materials.',
      'Search — find a specific topic quickly.',
      'Categories — explore resources by subject.',
      'Videos — access multimedia content.',
    ],
  },
  {
    title: 'Search for a Topic',
    desc: 'Use Search when you already know what lesson or topic you need.',
    points: [
      'Click Search and type your topic (e.g. "Climate Change").',
      'Review the list of articles, videos, and documents.',
      'Select one resource and open it to read or watch.',
    ],
  },
  {
    title: 'Browse by Category',
    desc: 'Use Categories when you want to explore available materials without searching.',
    points: [
      'Open Categories from the home screen.',
      'Choose a subject such as Science, Technology, or K–12.',
      'Pick a resource that fits your lesson plan.',
    ],
  },
  {
    title: 'Use the Resource in Class',
    desc: 'Apply what you found to your actual teaching session.',
    points: [
      'Present the article or video during class discussion.',
      'Highlight key points and ask guide questions.',
      'Assign a follow-up activity or homework based on the resource.',
    ],
  },
]

export const useCases = [
  {
    phase: 'Before Class',
    emoji: '☀️',
    summary: 'Prepare your lesson with ready resources.',
    items: [
      {
        title: 'Find supplementary materials',
        desc: 'Search STARBOOKS for articles and videos related to your topic.',
      },
      {
        title: 'Research your lesson',
        desc: 'Review content ahead of time so you know what to highlight in class.',
      },
      {
        title: 'Prepare references',
        desc: 'Save or note specific resources you plan to show during the lesson.',
      },
    ],
  },
  {
    phase: 'During Class',
    emoji: '🎯',
    summary: 'Make your lesson interactive and visual.',
    items: [
      {
        title: 'Show educational videos',
        desc: 'Use multimedia to explain concepts clearly and keep students engaged.',
      },
      {
        title: 'Use articles in discussion',
        desc: 'Read key points together and ask students to share their thoughts.',
      },
      {
        title: 'Let students explore',
        desc: 'Allow them to browse related resources on the kiosk during activities.',
      },
    ],
  },
  {
    phase: 'After Class',
    emoji: '📝',
    summary: 'Extend learning beyond the classroom.',
    items: [
      {
        title: 'Assign research topics',
        desc: 'Give students specific STARBOOKS resources to read or watch at home.',
      },
      {
        title: 'Recommend resources',
        desc: 'Point students to credible materials for review and study.',
      },
      {
        title: 'Support projects & reports',
        desc: 'Use STARBOOKS as a reference library for assignments and group work.',
      },
    ],
  },
]

export const activitySteps = [
  {
    title: 'Introduce the Topic',
    desc: 'The teacher begins the lesson by explaining what Renewable Energy is and why it matters.',
  },
  {
    title: 'Open STARBOOKS',
    desc: 'Launch the kiosk or go to starbooks.ph and navigate to the Search menu.',
  },
  {
    title: 'Search "Solar Energy"',
    desc: 'Find articles and videos about solar power that match the lesson objective.',
  },
  {
    title: 'Present to the Class',
    desc: 'Show the selected resource on screen and discuss the main ideas with students.',
  },
  {
    title: 'Student Activity',
    desc: 'Students take notes and answer guide questions based on what they learned.',
  },
]

export const guideQuestions = [
  'What is renewable energy?',
  'How does solar energy work?',
  'Why is it important for our community?',
]

export const workshopTasks = [
  {
    task: 'Search for a topic related to your subject',
    hint: 'Example: "Photosynthesis" for Science or "Ecosystem" for Biology.',
  },
  {
    task: 'Open one resource and explore it',
    hint: 'Read an article or watch a short video from start to finish.',
  },
  {
    task: 'Plan how to use it in a lesson',
    hint: 'Will you show it in class, assign it as homework, or use it for discussion?',
  },
  {
    task: 'Share your idea with the group',
    hint: 'Tell others your topic, the resource you found, and your teaching plan.',
  },
]

export const reminderPoints = [
  {
    title: 'Information',
    desc: 'Facts and explanations to support your lessons.',
  },
  {
    title: 'References',
    desc: 'Credible DOST-sourced materials for research and reports.',
  },
  {
    title: 'Videos & Multimedia',
    desc: 'Visual content that makes difficult topics easier to understand.',
  },
  {
    title: 'Research Materials',
    desc: 'Articles, journals, and documents for deeper learning.',
  },
  {
    title: 'Learning Activities',
    desc: 'Ideas for homework, projects, and classroom exercises.',
  },
  {
    title: 'Teacher-Led Learning',
    desc: 'You still guide discussion, facilitate activities, and assess understanding.',
  },
]

export const closingPoints = [
  { word: 'Explore', desc: 'Discover science & technology resources' },
  { word: 'Learn', desc: 'Grow your knowledge alongside students' },
  { word: 'Teach', desc: 'Use STARBOOKS to enrich your lessons' },
  { word: 'Innovate', desc: 'Bring digital learning to your classroom' },
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
    title: '2. How to Open STARBOOKS',
    items: [
      'Offline kiosk: Turn on the STARBOOKS unit and wait for the home screen to load.',
      'Online: Go to www.starbooks.ph and register to access resources for free.',
      'LAN (if available): Multiple users at school may access STARBOOKS via local network.',
    ],
  },
  {
    title: '3. Main Menus to Know',
    items: [
      'Library — browse all available materials.',
      'Search — find a topic using keywords.',
      'Categories — explore resources by subject or grade level.',
      'Videos — watch educational and DOSTkarte content.',
    ],
  },
  {
    title: '4. How to Search a Topic',
    items: [
      'Click Search on the home screen.',
      'Type your topic (e.g. "Renewable Energy" or "Photosynthesis").',
      'Open an article, video, or document from the results.',
      'Use it in class discussion or assign it to students.',
    ],
  },
  {
    title: '5. How to Browse by Category',
    items: [
      'Open Categories from the home screen.',
      'Choose a subject such as Science, Technology, or K–12.',
      'Pick a resource that matches your lesson objective.',
      'Preview it before class so you know what to highlight.',
    ],
  },
  {
    title: '6. Using STARBOOKS in Class',
    items: [
      'Before class: Search and prepare materials for your lesson.',
      'During class: Show videos or articles and ask guide questions.',
      'After class: Assign readings, research tasks, or review materials.',
    ],
  },
  {
    title: '7. Teacher Tips',
    items: [
      'Always preview a resource before presenting it to students.',
      'Combine STARBOOKS content with your own explanation and activities.',
      'Encourage students to explore related topics on their own.',
      'Use credible DOST materials for research and project work.',
    ],
  },
  {
    title: '8. Need Help?',
    items: [
      'Website: www.starbooks.ph',
      'DOST-STII: stii.dost.gov.ph/starbooks',
      'Ask your school ICT coordinator or STARBOOKS focal person.',
    ],
  },
]
