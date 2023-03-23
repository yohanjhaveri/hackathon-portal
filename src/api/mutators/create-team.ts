import { createDocument } from "../helpers/create-document";
import type { Team } from "../../types";

export const createTeam = (team: Team) => {
  return createDocument("teams", team.id, team);
};
