import { Team } from "../types";

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

export const getParticipantLocationError = (value: string) => {
  if (!value) {
    return "Location is a required field";
  }

  return "";
};

export const getParticipantTimezoneError = (value: string) => {
  if (!value) {
    return "Timezone is a required field";
  }

  return "";
};

export const getParticipantPositionError = (value: string) => {
  if (!value) {
    return "Role is a required field";
  }

  if (!value.match(/^[0-9A-Za-z ]+$/)) {
    return "Role must be only alphanumeric characters separated by spaces";
  }

  if (value.length > 50) {
    return "Role must be less than 50 characters";
  }

  return "";
};

export const getParticipantLinkedinURLError = (value: string) => {
  if (value && !value.match(/^(http(s)?:\/\/)?((w){3}.)?linkedin.com\/in\/.+/)) {
    return "LinkedIn URL must be a valid LinkedIn profile URL";
  }

  return "";
};

export const getParticipantSkillsError = (value: string[]) => {
  if (!value.every((v) => v.match(/^[0-9A-Za-z, ]+$/))) {
    return "Technical Skills must be only alphanumeric characters";
  }

  return "";
};
