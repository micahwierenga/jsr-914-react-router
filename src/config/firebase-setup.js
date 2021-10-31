import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyCzCkObmFEowYQcKVqzqBVbQvGqLKHZ12M",
	authDomain: "jsr-crud-a728f.firebaseapp.com",
	projectId: "jsr-crud-a728f",
	storageBucket: "jsr-crud-a728f.appspot.com",
	messagingSenderId: "591454829991",
	appId: "1:591454829991:web:9bd3bb3e35f1c4ede88a82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;