import app from "../firebase/firebaseconfig";
import { getFirestore, deleteDoc, collection, doc} from "firebase/firestore";

const db = getFirestore(app);

export default async function EliminarMonitorias(monitoreos){
    const coleccionRef = collection(db, "monitorias");
    const docuRef =doc(coleccionRef, monitoreos.fecha)
    const eliminado = await deleteDoc(docuRef)
    return eliminado;
}