# Pizza Man Project

This is an E-Commerce website for ordering Pizza Online

### Libraries used

React: To create the Single Page App
Redux: For State Management
Firebase: As a DataBase

### Firebase Setup

You need to create a firebase configeration file holding the firebase settings in the path `/src/firebase/config.js`. The required format is:

```javascript
const firebaseConfig = {
	apiKey: "API-KEY",
	authDomain: "AUTH-DOMAIN.firebaseapp.com",
	databaseURL: "DATABASE-URL.firebaseio.com",
	projectId: "PROJECT-ID",
	storageBucket: "STORAGE-BUCKET.appspot.com",
	messagingSenderId: "MESSAGING-SENDER-ID",
	appId: "APP-ID",
	measurementId: "MEASUREMENT-ID",
};

export default firebaseConfig;
```

### How to Use

To use the project follow the steps given below:

1. Install the necessary modules (`npm install`). If there is any issues, delete `package-lock.json` and try again.
2. Setup Firebase Project and configeration
3. Use `npm start` to run the react app
