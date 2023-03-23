import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../config";

export const updateDocument = <T extends { [key: string]: any }>(
  collectionName: string,
  documentId: string,
  document: T
) => {
  return updateDoc(doc(firestore, collectionName, documentId), document);
};
