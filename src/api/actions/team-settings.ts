import { createTeam } from "../mutators/create-team";
import { updateTeam } from "../mutators/update-team";
import { removeUserMembershipFromAllTeams, removeUserRequestsFromAllTeams } from "./team-helpers";
import type { Team } from "../../types";
import type { Values } from "../../components/Internal/pages/TeamFormPage/TeamFormPage";

export const makeTeam = async (teams: Team[], participantId: string, values: Values) => {
  await removeUserMembershipFromAllTeams(teams, participantId);
  await removeUserRequestsFromAllTeams(teams, participantId);

  return createTeam({
    ...values,
    open: true,
    members: [{ id: participantId }],
    invites: [],
    requests: [],
  });
};

export const editTeam = async (team: Team, values: Values) => {
  return updateTeam({
    ...team,
    ...values,
  });
};

export const finalizeTeam = (team: Team) => {
  return updateTeam({
    ...team,
    open: false,
    // remove all team invites/requests when a team is finalized
    invites: [],
    requests: [],
  });
};
