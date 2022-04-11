import app from "../firebase/firebaseconfig";
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";

const db = getFirestore(app);

async function FiltarMentoria(stringBuscar){

    const docusFiltrados =[];

    const collectionRef = collection(db, "monitorias");
    const queryMateria = query(collectionRef, where("materia", "=",stringBuscar));
    const queryFecha = query(collectionRef, where("fecha", "=",stringBuscar));
    const querySalon = query(collectionRef, where("salon", "=",stringBuscar));

    const arraySnapshots = await Promise.all([
        getDocs(queryMateria), 
        getDocs(queryFecha), 
        getDocs(querySalon),
    ]);

    // arraySnapshots.forEach((snapshot)=>{
    //     snapshot.forEach((doc)=>{
    //         docusFiltrados.push(doc.data());
    //     })
    // })
    console.log(arraySnapshots);
    //return docusFiltrados;
}

export default FiltarMentoria;