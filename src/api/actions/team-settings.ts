import { Values } from "../../pages/Internal/Portal/TeamFormPage/TeamFormPage";
import { Team } from "../../types";
import { createTeam } from "../mutators/create-team";
import { updateTeam } from "../mutators/update-team";
import { removeUserMembershipFromAllTeams, removeUserRequestsFromAllTeams } from "./team-helpers";

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
