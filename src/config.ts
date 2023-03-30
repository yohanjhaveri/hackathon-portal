import { baseTheme } from "@chakra-ui/react";

type ColorTheme = keyof typeof baseTheme.colors;

export const unique = {
  eventName: "FutureHack",
  colorTheme: "teal" as ColorTheme,
  supportEmail: "yohanjhaveri@gmail.com",
};

export const copy = {
  errors: {
    authentication: {
      heading: {
        text: "Authentication Error",
      },
      body: {
        text: "There was an error with logging in to your account",
      },
    },
    authorization: {
      heading: {
        text: "Authorization Error",
      },
      body: {
        text: "There was an error with finding your data",
      },
    },
  },
  login: {
    title: {
      prefix: {
        text: "Welcome to",
      },
      text: unique.eventName,
    },
    subtitle: {
      text: "Please login using your Github account",
    },
    button: {
      text: "Login with Github",
    },
    contact: {
      prompt: {
        text: "Having trouble?",
      },
      link: {
        text: "Contact Us",
        href: `mailto:${unique.supportEmail}`,
      },
    },
    background: {
      image: {
        src: "https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
    },
  },
  userRegistrationForm: {
    title: {
      prefix: {
        text: "Welcome",
      },
    },
    subtitle: {
      text: `We are excited to have you participate in this year's hackathon. Please enter your details in the form below to get started with ${unique.eventName}.`,
    },
    submitButton: {
      text: "Complete Registration",
    },

    confirmationModal: {
      title: {
        text: "Confirm Submission",
      },
      body: {
        text: "Please ensure your details are accurate as you cannot make further changes once the form is submitted",
      },
      confirmButton: {
        text: "Continue",
      },
    },

    errors: {
      invalidFields: {
        title: {
          text: "Validation Error",
        },
        description: {
          text: "Please correct any invalid fields",
        },
      },
      requestFailed: {
        title: {
          text: "Request Failed",
        },
        description: {
          text: "There was an error with submitting your form. Please try again later.",
        },
      },
    },
  },
  userRegistrationDone: {
    heading: {
      text: "Registration Complete",
    },
    body: {
      text: `Thank you for registering for ${unique.eventName}. We will be in touch with you soon.`,
    },
  },
  userRegistrationClosed: {
    heading: {
      text: "Sorry, we have closed registration at this time :(",
    },
    body: {
      text: `Registration for ${unique.eventName} is now closed. Please contact us at ${unique.supportEmail} if you have any questions.`,
    },
  },
};

// OPTIONS
export type Location =
  | "Chicago, IL"
  | "New York, NY"
  | "San Francisco, CA"
  | "Los Angeles, CA"
  | "Boston, MA";
export type Timezone = "Pacific Time" | "Mountain Time" | "Central Time" | "Eastern Time";
export type Status = "Part of a Team" | "Not Part of a Team";

export const locations: Location[] = [
  "Chicago, IL",
  "New York, NY",
  "San Francisco, CA",
  "Los Angeles, CA",
  "Boston, MA",
];
export const timezones: Timezone[] = ["Pacific Time", "Mountain Time", "Central Time", "Eastern Time"];
export const status: Status[] = ["Part of a Team", "Not Part of a Team"];

// FUNCTIONS
export const emailToId = (email: string) => {
  return email.split("@")[0].split(".").join("-");
};

export const getTimezoneNameShort = (timezone: Timezone) => {
  return {
    "Pacific Time": "PT",
    "Mountain Time": "MT",
    "Central Time": "CT",
    "Eastern Time": "ET",
  }[timezone];
};
