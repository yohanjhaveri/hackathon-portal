import { Team } from "../../types";
import { createDocument } from "../helpers/create-document";

export const createTeam = (team: Team) => {
  return createDocument("teams", team.id, team);
};
