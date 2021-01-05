import { useState, useEffect } from 'react'

const DUMMY_DATA = [
  {
    personDetails: {
      name: 'Elena A.',
      phone: '+7 ••• ••• 38 22',
    },
    visitDetails: {
      startedStr: '2020-10-14  14:40',
      sessionId: '2LDy-v2wE',
    },
    duration: [0, 42],
  },
  {
    personDetails: {
      name: 'Максим B.',
      phone: '+7 ••• ••• 14 21',
    },
    visitDetails: {
      startedStr: '2020-10-14 13:30',
      sessionId: 'v2wE-2LDy',
    },
    duration: [1, 25],
  },
  {
    personDetails: {
      name: 'Олег C.',
      phone: '+7 ••• ••• 55 78',
    },
    visitDetails: {
      startedStr: '2020-10-14  10:20',
      sessionId: 'M1Uu-y4iH',
    },
    duration: [2, 11],
  },
]

export function useOpenVisitsFacade() {
  const [state, setState] = useState(DUMMY_DATA)
  return state
}
