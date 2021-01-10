import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// import 'firebase/storage'
import { COLLECTIONS } from 'frontback-shared'
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

  serverTimestamp = app.firestore.FieldValue.serverTimestamp
  serverDelete = app.firestore.FieldValue.delete
  serverFromDate = app.firestore.Timestamp.fromDate

  signIn({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  // isUserAdmin() {
  //   return this.db
  //     .doc(`${COLLECTIONS.admins}/${this.auth.currentUser.phoneNumber}`)
  //     .get()
  //     .then(snap => snap.exists)
  // }

  getPartnerCurrentVisitors() {
    // return this.db.collection(`${COLLECTIONS[env].places}`).get()
    return this.db
      .collection(`${COLLECTIONS[env].users}`)
      .where('session', '!=', false)
      .where('session.partnerId', '==', this.auth.currentUser.uid)
  }
  // firebase.functions.httpsCallable('visit-finishByPartner')({})
  endVisitByPartner(props) {
    // return this.db.collection(`${COLLECTIONS[env].places}`).get()
    return this.functions.httpsCallable('visit-endByPartner')({
      env,
      ...props
    })
  }
  // getPlacesRef() {
  //   // return this.db.collection(`${COLLECTIONS[env].places}`).get()
  //   return this.db.collection(`${COLLECTIONS[env].places}`)
  // }

  // Profile methods
  getProfileRef() {
    return this.db.doc(
      `${ENV_COLLECTIONS.partners}/${this.auth.currentUser.uid}`
    )
  }

  // // Place methods
  // getPlaceDetails(id) {
  //   return this.db.doc(`${ENV_COLLECTIONS.places}/${id}`).get()
  // }
  // getPlacesRef() {
  //   return this.db.collection(`${ENV_COLLECTIONS.places}`)
  // }
}

export const firebase = new Firebase()
