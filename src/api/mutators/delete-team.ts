import { deleteDocument } from "../helpers/delete-document";
import type { Team } from "../../types";

export const deleteTeam = (team: Team) => {
  return deleteDocument("teams", team.id);
};
