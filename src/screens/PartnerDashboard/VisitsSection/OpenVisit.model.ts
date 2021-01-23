import { format, intervalToDuration } from 'date-fns'

export class OpenVisit {
  doc: any
  constructor(doc: any) {
    this.doc = doc
  }

  maskVisitId() {
    const string = this.doc.userId
    const [leftStr, rightStr] = [
      string.substring(0, 4),
      string.substring(string.length - 4)
    ]
    return `${leftStr}-${rightStr}`
  }

  get userId() {
    return this.doc.userId
  }
  get started() {
    return this.doc.visitStarted.toDate()
  }

  get personDetails() {
    return {
      name: this.doc.maskedUserName,
      phone: this.doc.maskedUserPhone
    }
  }

  get visitDetails() {
    const startedDT = this.doc.visitStarted.toDate()
    return {
      startedDay: format(startedDT, 'yyyy-MM-dd'),
      startedTime: format(startedDT, 'HH:mm'),
      maskedVisitId: this.maskVisitId()
    }
  }

  get duration() {
    const startedDT = this.doc.visitStarted.toDate()
    const { days = 0, hours: h = 0, minutes, seconds } = intervalToDuration({
      start: startedDT,
      end: Date.now()
    })
    const hours = days * 24 + h
    return { hours, minutes, seconds }
  }

  // get visit() {
  //   return this.doc
  // }
}
