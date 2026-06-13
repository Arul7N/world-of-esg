export interface NavItem {
  name: string
  href: string
}

export interface SolutionCard {
  id: string
  index: number
  title: string
  subtitle: string
  description: string
  features: string[]
  color: string
}

export interface TeamMember {
  name: string
  role: string
  initials: string
  linkedIn: string
  background: string
}

export interface IndustryCard {
  title: string
  description: string
  icon: string
  color: string
  badges: string[]
}

export interface Framework {
  id: string
  abbreviation: string
  fullName: string
  description: string
  category: 'india' | 'eu' | 'global'
  badge: string
  status: 'active' | 'upcoming' | 'ongoing'
}

export interface PartnerCard {
  title: string
  description: string
  icon: string
  borderColor: string
}

export interface WhyUsItem {
  title: string
  description: string
  icon: string
  color: string
  backgroundColor: string
}

export interface BookingForm {
  name: string
  email: string
  company: string
  topic: string
  date: string
  time: string
  note: string
}