# Hackathon Portal

A web portal to support participant registration, team formation, and ideation for remote hackathons.

## Configuration

There is a configuration file at `src/config.js` directory for convenient personalization of this portal.

## Hackathon Stages

The phase flag combination MUST be out of one of these for the portal to work properly. You can set these flags in a `.env` file in the root of the project.

### Registration Phase

- Participants can only register for the hackathon

```
REACT_APP_USER_REGISTRATION_PHASE=active
REACT_APP_TEAM_REGISTRATION_PHASE=inactive
REACT_APP_IDEA_REGISTRATION_PHASE=inactive
```

### Registration + Team Formation Phase

- Participants can still register for the hackathon.
- Participants can also access the portal to:
  - Find teams
  - Create a team
  - Request to join teams
  - Invite members to join their team
  - Update their team details

```
REACT_APP_USER_REGISTRATION_PHASE=active
REACT_APP_TEAM_REGISTRATION_PHASE=active
REACT_APP_IDEA_REGISTRATION_PHASE=active
```

### Team Formation Phase

- Participants can no longer register for the hackathon
- Participants can however still access the portal to:
  - Find teams
  - Create a team
  - Request to join teams
  - Invite members to join their team
  - Update their team details

```
REACT_APP_USER_REGISTRATION_PHASE=inactive
REACT_APP_TEAM_REGISTRATION_PHASE=active
REACT_APP_IDEA_REGISTRATION_PHASE=active
```

### Ideation Phase

- Participants can no longer register for the hackathon
- Participants can no longer create/join teams
- Participants can however still:
  - Find teams
  - Update their team details (including ideas)
- When this `REACT_APP_TEAM_REGISTRATION_PHASE` flag is set to `inactive`, teams will be auto-finalized which means:
  - Team members can no longer leave the team
  - Team members can no longer be removed from the team
  - Team members can no longer be invited to join the team
  - Team members can no longer request to join the team
  - All pending invites/requests will be automatically rejected

```
REACT_APP_USER_REGISTRATION_PHASE=inactive
REACT_APP_TEAM_REGISTRATION_PHASE=inactive
REACT_APP_IDEA_REGISTRATION_PHASE=active
```

### Final Phase

- Participants can no longer register for the hackathon
- Participants can no longer create/join teams
- Participants can no longer update their team details (including ideas)
- Participants can see other team's ideas
- Portal becomes read-only

```
REACT_APP_USER_REGISTRATION_PHASE=inactive
REACT_APP_TEAM_REGISTRATION_PHASE=inactive
REACT_APP_IDEA_REGISTRATION_PHASE=inactive
```
