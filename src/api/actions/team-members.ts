import { updateTeam } from "../mutators/update-team";
import { deleteTeam } from "../mutators/delete-team";
import type { Team } from "../../types";

// also used for "leave team"
export const removeMember = (team: Team, participantId: string) => {
  // if you are the last member, delete the team
  if (team.members.length === 1) {
    return deleteTeam(team);
  }

  return updateTeam({
    ...team,
    members: team.members.filter((m) => m.id !== participantId),
  });
};
