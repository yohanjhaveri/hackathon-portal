import { updateDocument } from "../helpers/update-document";
import type { Team } from "../../types";

export const updateTeam = (team: Team) => {
  return updateDocument("teams", team.id, team);
};
