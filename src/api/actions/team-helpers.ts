import { removeMember } from "./team-members";
import { rejectRequest } from "./team-requests";
import type { Team } from "../../types";

export const removeUserMembershipFromAllTeams = (teams: Team[], participantId: string) => {
  const memberships = teams.filter((team) => team.members.find((m) => m.id === participantId));
  const promises = memberships.map((team) => removeMember(team, participantId));

  return Promise.all(promises);
};

export const removeUserRequestsFromAllTeams = (teams: Team[], participantId: string) => {
  const requests = teams.filter((team) => team.requests.find((m) => m.id === participantId));
  const promises = requests.map((team) => rejectRequest(team, participantId));

  return Promise.all(promises);
};
