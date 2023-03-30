import { collection, doc, DocumentReference } from "firebase/firestore";
import { Participant } from "../../types";
import { firestore } from "../config";

export const queryParticipant = (id: string) => {
  return doc(collection(firestore, "participants"), id) as DocumentReference<Participant>;
};
