import { collection, CollectionReference } from "firebase/firestore";
import { Participant } from "../../types";
import { firestore } from "../config";

export const queryParticipants = () => {
  return collection(firestore, "participants") as CollectionReference<Participant>;
};
