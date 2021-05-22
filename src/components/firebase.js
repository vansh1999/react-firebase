import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDNRwmTRDfNrWSwdP68ktscm51RWGdJN40',
	authDomain: 'react-firebase-63d38.firebaseapp.com',
	projectId: 'react-firebase-63d38',
	storageBucket: 'react-firebase-63d38.appspot.com',
	messagingSenderId: '220434168784',
	appId: '1:220434168784:web:b6b8a4330de776eff717d5'
};

const firebase = app.initializeApp(firebaseConfig);

export default firebase;
