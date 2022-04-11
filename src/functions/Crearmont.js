import app from "../firebase/firebaseconfig";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

function Crearmont(infoMoni) {

    const collectionRef = collection(db, "monitorias");
    const docRef = doc(collectionRef);
    setDoc(docRef, infoMoni)
}

export default Crearmont;