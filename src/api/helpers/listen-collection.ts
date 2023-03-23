import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../config";

export const listenCollection = <T>(collectionName: string, callback: (value: T[]) => void) => {
  onSnapshot(collection(firestore, collectionName), (snapshot) => {
    const response: T[] = [];

    snapshot.forEach((doc) => {
      response.push(doc.data() as T);
    });

    callback(response);
  });
};
