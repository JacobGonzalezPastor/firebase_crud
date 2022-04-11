import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "../firebase/firebaseconfig";

const db = getFirestore(app);

export default async function getAllMonitoreos(){
    const monitoreos = [];
    const collectionRef = collection(db, "monitorias");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc)=>{
        monitoreos.push(doc.data());
    });
    return monitoreos;
}