import app from "../firebase/firebaseconfig";
import { getFirestore, deleteDoc, collection, doc} from "firebase/firestore";

const db = getFirestore(app);

export default async function EliminarMonitorias(infoMoni){
    const coleccionRef = collection(db, "monitorias");
    const docuRef =doc(coleccionRef, infoMoni.id)
    const eliminado = await deleteDoc(docuRef)
    return eliminado;
}