import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBHarfC8EhJzzMnw6Mvk6dP-PSe4FwfRUE',
  authDomain: 'food-store-f9ff0.firebaseapp.com',
  projectId: 'food-store-f9ff0',
  storageBucket: 'food-store-f9ff0.appspot.com',
  messagingSenderId: '633970929345',
  appId: '1:633970929345:web:9fbc3b957c5c35d405ae40',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account ',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        ...additionalInfo,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}

export const createAuthUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signinUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  const userDocRef = doc(db, 'users', user.uid)
  const userSnapshot = await getDoc(userDocRef)
  const userData = userSnapshot.data()
  return userData
}

export const Logout = async () => {
  signOut(auth)
    .then(() => {
      console.log('Signed Out')
    })
    .catch((e) => {
      console.error('Sign Out Error', e)
    })
}

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
