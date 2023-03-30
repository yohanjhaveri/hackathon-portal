import { Team } from "../../types";
import { updateDocument } from "../helpers/update-document";

export const updateTeam = (team: Team) => {
  return updateDocument("teams", team.id, team);
};
