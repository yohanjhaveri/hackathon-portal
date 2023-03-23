import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config";

export const retrieveCollection = async <T>(collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const response: T[] = [];

  snapshot.forEach((doc) => {
    response.push(doc.data() as T);
  });

  return response;
};
