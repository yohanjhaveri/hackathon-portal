import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../config";

export const deleteDocument = (collectionName: string, documentId: string) => {
  return deleteDoc(doc(firestore, collectionName, documentId));
};
