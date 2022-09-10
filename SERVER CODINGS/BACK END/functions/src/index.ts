import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";


exports.createUser = functions.auth.user().onCreate((user) => {
    firestore().collection('petrolstation').doc(user.uid).set({
        Name: user.displayName,
        Email: user.email,
        PetrolTankIOT:firestore().collection('petrolstation').doc().id,
        PetrolWaterflowIOT:firestore().collection('petrolstation').doc().id

    });
});
