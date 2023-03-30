import { Team } from "../../types";
import { deleteDocument } from "../helpers/delete-document";

export const deleteTeam = (team: Team) => {
  return deleteDocument("teams", team.id);
};
