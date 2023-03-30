import { Location, Status, Timezone } from "../config";

export type Member = {
  id: string;
};

export type Participant = {
  id: string;
  name: string;
  email: string;
  position: string;
  summary: string;
  location: Location;
  timezone: Timezone;
  skills: string[];
  linkedin: string;
};

export type Team = {
  id: string;
  name: string;
  idea: string;
  open: boolean;
  members: Member[];
  invites: Member[];
  requests: Member[];
};

export type FiltersSchema = {
  location: {
    title: "Location";
    options: Location[];
  };
  timezone: {
    title: "Timezone";
    options: Timezone[];
  };
  status: {
    title: "Status";
    options: Status[];
  };
};
