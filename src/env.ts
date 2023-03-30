// FIREBASE
export const apiKey = process.env.REACT_APP_API_KEY;
export const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
export const projectId = process.env.REACT_APP_PROJECT_ID;
export const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
export const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
export const appId = process.env.REACT_APP_APP_ID;

// FLAGS
export const isUserRegistrationPhaseActive = process.env.REACT_APP_USER_REGISTRATION_PHASE === "active";
export const isTeamRegistrationPhaseActive = process.env.REACT_APP_TEAM_REGISTRATION_PHASE === "active";
export const isIdeaRegistrationPhaseActive = process.env.REACT_APP_IDEA_REGISTRATION_PHASE === "active";
