import { Participant } from "../../types";
import { createDocument } from "../helpers/create-document";

export const createParticipant = (participant: Participant) => {
  return createDocument("participants", participant.id, participant);
};
