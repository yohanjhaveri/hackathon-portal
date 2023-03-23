import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config";

export const createDocument = <T extends { [key: string]: any }>(
  collectionName: string,
  documentId: string,
  document: T
) => {
  return setDoc(doc(firestore, collectionName, documentId), document);
};
