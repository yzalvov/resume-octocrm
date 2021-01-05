import { format } from 'date-fns'

// mo tu we th fr sa su
export const weekdayAcronym = timestamp =>
  format(timestamp, 'EEEEEE').toLowerCase()
