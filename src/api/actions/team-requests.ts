import { Team } from "../../types";
import { updateTeam } from "../mutators/update-team";
import { removeUserMembershipFromAllTeams, removeUserRequestsFromAllTeams } from "./team-helpers";

export const sendRequest = (team: Team, participantId: string) => {
  return updateTeam({
    ...team,
    requests: team.requests.concat({ id: participantId }),
  });
};

export const acceptRequest = async (teams: Team[], team: Team, participantId: string) => {
  await removeUserMembershipFromAllTeams(teams, participantId);
  await removeUserRequestsFromAllTeams(teams, participantId);

  return updateTeam({
    ...team,
    requests: team.requests.filter((r) => r.id !== participantId),
    invites: team.invites.filter((i) => i.id !== participantId),
    members: team.members.concat({ id: participantId }),
  });
};

export const rejectRequest = (team: Team, participantId: string) => {
  return updateTeam({
    ...team,
    requests: team.requests.filter((r) => r.id !== participantId),
  });
};
