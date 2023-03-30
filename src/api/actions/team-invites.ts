import { Team } from "../../types";
import { updateTeam } from "../mutators/update-team";
import { removeUserMembershipFromAllTeams, removeUserRequestsFromAllTeams } from "./team-helpers";

export const sendInvite = (team: Team, participantId: string) => {
  return updateTeam({
    ...team,
    invites: team.invites.concat({ id: participantId }),
  });
};

export const acceptInvite = async (teams: Team[], team: Team, participantId: string) => {
  await removeUserMembershipFromAllTeams(teams, participantId);
  await removeUserRequestsFromAllTeams(teams, participantId);

  return updateTeam({
    ...team,
    requests: team.requests.filter((r) => r.id !== participantId),
    invites: team.invites.filter((i) => i.id !== participantId),
    members: team.members.concat({ id: participantId }),
  });
};

export const rejectInvite = (team: Team, participantId: string) => {
  return updateTeam({
    ...team,
    invites: team.invites.filter((i) => i.id !== participantId),
  });
};
