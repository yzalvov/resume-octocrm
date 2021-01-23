import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// import 'firebase/storage'
import { COLLECTIONS } from 'octoshared-ts'
import config from './config'

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

  // firestore = app.firestore

  signIn({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  getPartnerCurrentVisits() {
    // return this.db.collection(`${COLLECTIONS[env].places}`).get()
    return this.db
      .collection(`${COLLECTIONS[env].visits}`)
      .where('partnerId', '==', this.auth.currentUser.uid)
  }
  // firebase.functions.httpsCallable('visit-finishByPartner')({})
  finishVisit({ userId }) {
    // return this.db.collection(`${COLLECTIONS[env].places}`).get()
    return this.functions.httpsCallable('visit-finishByPartner')({
      env,
      userId
    })
  }

  getProfileRef() {
    return this.db.doc(
      `${ENV_COLLECTIONS.partners}/${this.auth.currentUser.uid}`
    )
  }
}

export const firebase = new Firebase()
