import { createDocument } from "../helpers/create-document";
import type { Participant } from "../../types";

export const createParticipant = (participant: Participant) => {
  return createDocument("participants", participant.id, participant);
};
