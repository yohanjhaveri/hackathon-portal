# Hackathon Portal

A web portal to support participant registration and team formation for remote hackathons

# STAGES OF HACKATHON -- phase flag combination MUST be out of one of these for this app to work properly

## Participants can only register

- isUserRegistrationPhaseActive: true
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: false

## Participants can register, find teams, and update their ideas

- isUserRegistrationPhaseActive: true
- isTeamRegistrationPhaseActive: true
- isIdeaRegistrationPhaseActive: true

## Participants can no longer register, but they can find teams and update their ideas

- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: true
- isIdeaRegistrationPhaseActive: true

## Participants can no longer register, teams are finalized [closed] (members can no longer be edited (auto-finalize all open teams) + no new teams can be created (hide the create team button)), however they can still update their ideas

- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: true

## Participants can no longer register, teams are finalized [closed] (members can no longer be edited), details are fixed (team details can no longer be edited -- update button is hidden) and ideas can now be shown

- isUserRegistrationPhaseActive: false
- isTeamRegistrationPhaseActive: false
- isIdeaRegistrationPhaseActive: false
