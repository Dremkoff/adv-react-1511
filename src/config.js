import firebase from 'firebase/app';
import 'firebase/auth';

export const appName = 'advreact-15-11';

const firebaseConfig = {
	apiKey: 'AIzaSyC433lXLqKj8YXmXGY90rtZicZ3mVfwqoM',
	authDomain: `${appName}.firebaseapp.com`,
	databaseURL: `https://${appName}.firebaseio.com`,
	projectId: appName,
	storageBucket: `${appName}.appspot.com`,
	messagingSenderId: '502472678880',
};

firebase.initializeApp(firebaseConfig);
