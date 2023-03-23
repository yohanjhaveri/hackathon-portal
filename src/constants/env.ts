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

/*

STAGES OF HACKATHON -- phase flag combination MUST be out of one of these for this app to work properly
=======================================================================================================


Participants can only register
------------------------------
- isUserRegistrationPhaseActive: true
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: false


Participants can register, find teams, and update their ideas
-------------------------------------------------------------
- isUserRegistrationPhaseActive: true
- isTeamRegistrationPhaseActive: true
- isIdeaRegistrationPhaseActive: true


Participants can no longer register, but they can find teams and update their ideas
-----------------------------------------------------------------------------------
- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: true
- isIdeaRegistrationPhaseActive: true


Participants can no longer register, teams are finalized [closed] (members can no longer be edited (auto-finalize all open teams) + no new teams can be created (hide the create team button)), however they can still update their ideas
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: true


Participants can no longer register, teams are finalized [closed] (members can no longer be edited), details are fixed (team details can no longer be edited -- update button is hidden) and ideas can now be shown
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: false


*/
