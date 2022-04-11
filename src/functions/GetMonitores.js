import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "../firebase/firebaseconfig";

const db = getFirestore(app);

export default async function getAllMonitores(){
    const monitores = [];
    const collectionRef = collection(db, "monitores");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc)=>{
        monitores.push(doc.data());
    });
    return monitores;
}