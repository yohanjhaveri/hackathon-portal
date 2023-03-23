import { baseTheme } from "@chakra-ui/react";
import { Location, Status, Timezone } from "./types";

type ColorTheme = keyof typeof baseTheme.colors;

type Unique = {
  colorTheme: ColorTheme;
  eventName: string;
  companyName: string;
  supportEmail: string;
};

export const unique: Unique = {
  colorTheme: "teal",
  eventName: "Hack2TheFuture",
  companyName: "",
  supportEmail: "",
};

export const pages = {
  login: {},
  teamRegistrationForm: {},
  userRegistrationForm: {},
  userRegistrationDone: {},
  userRegistrationClosed: {},
};

// FUNCTIONS
export const emailToId = (email: string) => {
  return email.split("@")[0].split(".").join("-");
};

// OPTIONS
export const readonlyLocations = [
  "Chicago, IL",
  "New York, NY",
  "San Francisco, CA",
  "Los Angeles, CA",
  "Boston, MA",
] as const;
export const readonlyTimezones = ["Pacific Time", "Mountain Time", "Cental Time", "Eastern Time"] as const;
export const readonlyStatus = ["Part of a Team", "Not Part of a Team"] as const;

export const locations: Location[] = [
  "Chicago, IL",
  "New York, NY",
  "San Francisco, CA",
  "Los Angeles, CA",
  "Boston, MA",
];
export const timezones: Timezone[] = ["Pacific Time", "Mountain Time", "Cental Time", "Eastern Time"];
export const status: Status[] = ["Part of a Team", "Not Part of a Team"];
