import app from "../firebase/firebaseconfig";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

function Registarmonitor(infoMonitor) {

    const collectionRef = collection(db, "monitores");
    const docRef = doc(collectionRef);
    setDoc(docRef, infoMonitor)
}

export default Registarmonitor;