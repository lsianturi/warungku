import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB5kwiAglLGRbPoGyRtWPUh9a3c-I8ut8E',
  authDomain: 'cropchat-b05ba.firebaseapp.com',
  databaseURL: 'https://cropchat-b05ba.firebaseio.com',
  projectId: 'cropchat-b05ba',
  storageBucket: 'cropchat-b05ba.appspot.com',
  messagingSenderId: '594074202582'
}
firebase.initializeApp(config)

const storage = firebase.storage()
const database = firebase.database()

export {
  database,
  storage
}
