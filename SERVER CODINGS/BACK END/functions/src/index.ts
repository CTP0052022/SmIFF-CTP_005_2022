import * as functions from "firebase-functions";
let uno=0;
exports.createUser = functions.firestore.document("Admin/AP").onCreate(()=>{
  console.log('Made it to the trigger!');
  uno= uno+1;
});
