import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const firstFunc = functions.https.onCall((data, context) => {
    return { text: 'Hello from Firebase!' };
});
  
  
