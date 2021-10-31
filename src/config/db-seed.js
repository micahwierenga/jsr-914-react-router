const { initializeApp } = require('firebase/app');
const { getFirestore, writeBatch, doc } = require('firebase/firestore');
const seedData = require('./dog-data');

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

// Get a new write batch
const batch = writeBatch(db);

seedData.puppies.forEach(puppy => {
    const docRef = doc(db, 'puppies'); //automatically generate unique id
    console.log(puppy, docRef)
    // batch.set(docRef, doc);
});

// batch.commit()


// Commit the batch
// await batch.commit();