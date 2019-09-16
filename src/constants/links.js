import React from 'react'
import {
  Treatment,
  Team,
  Process,
  Docs,
  Location,
  Contacts,
  Imprint,
  Data,
} from './icons'

export default [
  {
    icon: <Treatment />,
    path: '/treatment',
    text: 'behandlungen',
  },
  {
    icon: <Team />,
    path: '/team',
    text: 'das team',
  },
  {
    icon: <Process />,
    path: '/process',
    text: 'ablauf',
  },
  {
    icon: <Docs />,
    path: '/docs',
    text: 'dokumente',
  },
  {
    icon: <Location />,
    path: '/location',
    text: 'anfahrt',
  },
  {
    icon: <Contacts />,
    path: '/contacts',
    text: 'kontakt',
  },
]

export const legalLinks = [
  {
    icon: <Imprint />,
    path: '/imprint',
    text: 'impressum',
  },
  {
    icon: <Data />,
    path: '/data-protection',
    text: 'datenschutz',
  },
]
