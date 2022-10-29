import {firestore} from "firebase-admin";
import * as functions from "firebase-functions";


exports.createUser = functions.auth.user().onCreate((user) => {
  firestore().collection("petrolstation").doc(user.uid).set({
    uid: user.uid,
    Email: user.email,
  });
});
