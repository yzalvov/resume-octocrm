import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// import 'firebase/storage'
import { COLLECTIONS } from '@yzalvov/octoshared-ts'
import config from './config'
import { endOfDay, startOfDay } from 'date-fns'

const env = process.env.NODE_ENV
const ENV_COLLECTIONS = COLLECTIONS[env] || COLLECTIONS.development

class Firebase {
  constructor() {
    this.app = app.initializeApp(config)
    this.auth = app.auth()
    // this.RecaptchaVerifier = app.auth.RecaptchaVerifier
    this.db = app.firestore()
    // this.GeoPoint = app.firestore.GeoPoint
    this.functions = this.app.functions('europe-west1')
    // this.storage = app.storage()
  }

  firestore = app.firestore

  signIn({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  operatorProfile() {
    return this.db.doc(
      `${ENV_COLLECTIONS.partner_operators}/${this.auth.currentUser.uid}`
    )
  }

  operatorPlaces({ operatorPlaceIds }) {
    return this.db
      .collection(`${COLLECTIONS[env].places}`)
      .where(this.firestore.FieldPath.documentId(), 'in', operatorPlaceIds)
  }

  placeCurrentVisits({ placeId }) {
    return this.db
      .collection(`${COLLECTIONS[env].visits}`)
      .where('placeId', '==', placeId)
  }

  finishVisit({ userId }) {
    return this.functions.httpsCallable('visit-finishByOperator')({
      env,
      userId
    })
  }

  placeVisitsHistory({ placeId, periodDates }) {
    return this.db
      .collection(`${COLLECTIONS[env].payment_records}`)
      .where('placeId', '==', placeId)
      .orderBy('visitEnded', 'desc')
      .where('visitEnded', '>=', startOfDay(periodDates[0]))
      .where('visitEnded', '<=', endOfDay(periodDates[1]))
  }
}

export const firebase = new Firebase()
export const firebaseApp = app
