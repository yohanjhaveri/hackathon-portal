import type { Team } from "../types";

export const getTeamIdError = (value: string, teams: Team[]) => {
  if (!value) {
    return "Team ID is a required field";
  }

  if (!value.match(/^[0-9a-z-]+$/)) {
    return "Team ID must be only lowercase alphanumeric characters separated by a dash";
  }

  if (teams?.find((t) => t.id === value)) {
    return "Team ID is already taken";
  }

  return "";
};

export const getTeamNameError = (value: string) => {
  if (!value) {
    return "Team Name is a required field";
  }

  if (!value.match(/^[0-9A-Za-z ]+$/)) {
    return "Team Name must be only alphanumeric characters separated by spaces";
  }

  return "";
};

export const getTeamIdeaError = (value: string) => {
  if (!value) {
    return "Team Idea is a required field";
  }

  return "";
};
