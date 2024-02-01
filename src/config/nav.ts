import { NavItem } from '@/types/nav'

interface NavConfig {
  mainNav: NavItem[]
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'News',
      href: '/topics/news',
    },
    {
      title: 'Business',
      href: '/topics/business',
    },
    {
      title: 'Entertainment',
      href: '/topics/entertainment',
    },
    {
      title: 'Sports',
      href: '/topics/sport',
    },
    {
      title: 'Politics',
      href: '/topics/politics',
    },
    {
      title: 'Gaming',
      href: '/topics/gaming',
    },
    {
      title: 'Science',
      href: '/topics/science',
    },
    {
      title: 'Technology',
      href: '/topics/tech',
    },
    {
      title: 'Music',
      href: '/topics/music',
    },
    {
      title: 'Food',
      href: '/topics/food',
    },
    {
      title: 'Travel',
      href: '/topics/travel',
    },
    {
      title: 'Energy',
      href: '/topics/energy',
    },
    {
      title: 'Beauty',
      href: '/topics/beauty',
    },
    {
      title: 'Finance',
      href: '/topics/finance',
    },
    {
      title: 'Economics',
      href: '/topics/economics',
    },
    {
      title: 'World',
      href: '/topics/world',
    },
  ],
}
