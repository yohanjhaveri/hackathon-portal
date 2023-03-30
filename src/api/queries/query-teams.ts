import { collection, CollectionReference } from "firebase/firestore";
import { Team } from "../../types";
import { firestore } from "../config";

export const queryTeams = () => {
  return collection(firestore, "teams") as CollectionReference<Team>;
};
