import { format, intervalToDuration } from 'date-fns'
// import {} from 'firebase/firestore'

//  interface FirestoreUserDoc {
// }

// export interface OpenVisitDetails {
//   uid: string
//   started: Date
//   personDetails: {
//     name: string
//     phone: string
//   }
//   visitDetails: {
//     startedDay: string
//     startedTime: string
//     sessionId: string
//   }
//   duration: {
//     hours: string
//     minutes: string
//     seconds: string
//   }
// }

export class OpenVisit {
  userDoc: any
  constructor(userDoc: any) {
    this.userDoc = userDoc
  }

  maskUserName() {
    const name = this.userDoc.name
    if (!name) return
    const [first, second] = name.split(' ')
    if (!second) return first
    return `${first} ${second.substring(0, 1)}.`
  }
  maskPhoneNumber() {
    const str = this.userDoc.phoneNumber
    const [leftStr, rightStr] = [
      str.substring(str.length - 4, str.length - 2),
      str.substring(str.length - 2)
    ]
    return `+7 ••• ••• ${leftStr} ${rightStr}`
  }
  maskVisitId() {
    const string = this.uid
    const [leftStr, rightStr] = [
      string.substring(0, 4),
      string.substring(string.length - 4)
    ]
    return `${leftStr}-${rightStr}`
  }

  get uid() {
    return this.userDoc.uid
  }
  get started() {
    return this.userDoc.session.started.toDate()
  }

  get personDetails() {
    return {
      name: this.maskUserName(),
      phone: this.maskPhoneNumber()
    }
  }

  get visitDetails() {
    const startedDT = this.userDoc.session.started.toDate()
    return {
      startedDay: format(startedDT, 'yyyy-MM-dd'),
      startedTime: format(startedDT, 'HH:mm'),
      sessionId: this.maskVisitId()
    }
  }

  get duration() {
    const startedDT = this.userDoc.session.started.toDate()
    // return [0, 42]
    const { days = 0, hours: h = 0, minutes, seconds } = intervalToDuration({
      start: startedDT,
      end: Date.now()
    })
    const hours = days * 24 + h

    return { hours, minutes, seconds }
  }

  get session() {
    return this.userDoc.session
  }
}
