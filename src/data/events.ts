export type EventCategory = 'Everyone' | 'Families' | 'Youth' | 'Groups' | 'Serve'

export type EventTag =
  | 'Drop-in'
  | 'Register'
  | 'Childcare'
  | 'Newcomers'
  | 'Weekly'
  | 'Monthly'
  | 'Serving'
  | 'Community'
  | 'Families'
  | 'Support'

export type Event = {
  title: string
  start: string // ISO datetime with timezone offset
  end?: string // ISO datetime with timezone offset
  location?: string
  category: EventCategory
  summary: string
  url: string // Church Center or internal page
  tags?: EventTag[]
  featured?: boolean
}

export const events: Event[] = [
  {
    title: 'Sunday Gathering',
    start: '2026-01-11T10:00:00-08:00',
    category: 'Everyone',
    summary: 'Worship, teaching, and programs for kids and youth.',
    url: '/plan-a-visit/',
    tags: ['Weekly', 'Newcomers'],
    featured: true,
  },
  {
    title: 'Pine Lake Youth',
    start: '2026-01-13T18:00:00-08:00',
    category: 'Youth',
    summary: 'Our weekly gathering for middle and high school students.',
    url: 'https://plcc.churchcenter.com/groups/youth',
    tags: ['Weekly', 'Community'],
  },

  {
    title: 'Tuesdays Together',
    start: '2026-01-06T18:00:00-08:00',
    category: 'Everyone',
    summary: 'A relaxed evening with food and community. A great way to connect.',
    url: 'https://plcc.churchcenter.com/events/XXXXXXX',
    tags: ['Drop-in', 'Community'],
    featured: true,
  },

  {
    title: 'Tuesdays Together',
    start: '2026-01-20T18:00:00-08:00',
    category: 'Everyone',
    summary: 'A relaxed evening with food and community. A great way to connect.',
    url: 'https://plcc.churchcenter.com/events/XXXXXXX',
    tags: ['Drop-in', 'Community'],
  },

  {
    title: 'Tuesdays Together',
    start: '2026-02-02T18:00:00-08:00',
    category: 'Everyone',
    summary: 'A relaxed evening with food and community. A great way to connect.',
    url: 'https://plcc.churchcenter.com/events/XXXXXXX',
    tags: ['Drop-in', 'Community'],
  },

  {
    title: 'Alzheimer’s Support Group',
    start: '2026-01-14T14:30:00-08:00',
    category: 'Serve',
    summary: 'A supportive space for caregivers and families affected by Alzheimer’s.',
    url: 'https://plcc.churchcenter.com/groups/alzheimers-support',
    tags: ['Community', 'Support'],
  },

  {
    title: 'MomCo',
    start: '2026-01-12T09:45:00-08:00',
    category: 'Families',
    summary: 'A gathering for moms of young children to connect and encourage one another.',
    url: 'https://plcc.churchcenter.com/groups/momco',
    tags: ['Families', 'Community'],
  },

  {
    title: 'MomCo',
    start: '2026-01-26T09:45:00-08:00',
    category: 'Families',
    summary: 'A gathering for moms of young children to connect and encourage one another.',
    url: 'https://plcc.churchcenter.com/groups/momco',
    tags: ['Families', 'Community'],
  },
  // Add real Church Center event links here as you curate:
  // {
  //   title: "Newcomers Coffee",
  //   start: "2026-01-18T11:30:00-08:00",
  //   category: "Everyone",
  //   summary: "A casual, low-pressure way to meet people after service.",
  //   url: "https://plcc.churchcenter.com/registrations/events/XXXXXXX",
  //   tags: ["Newcomers", "Drop-in"],
  //   featured: true,
  // },
]
