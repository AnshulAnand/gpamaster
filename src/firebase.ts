import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBQtLFcHob68bgb4Caqeuk5IC5weZDBaVc',
  authDomain: 'kirayedaar-2a081.firebaseapp.com',
  projectId: 'kirayedaar-2a081',
  storageBucket: 'kirayedaar-2a081.appspot.com',
  messagingSenderId: '682995065494',
  appId: '1:682995065494:web:e78a7e2a3d2f65ca6b58b7',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
