import { useParams } from "react-router-dom";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useData } from "../../../../context/DataContext";
import { Participant, Team } from "../../../../types";
import { acceptInvite, rejectInvite, sendInvite } from "../../../../api/actions";
import { ParticipantData } from "./ParticipantData";
import { ParticipantInvites } from "./ParticipantInvites";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils/toasts";
import { Loader } from "../../../Loader";

const findParticipantData = (participants: Participant[], id: string) => {
  return participants.find((p) => p.id === id);
};

const findParticipantTeam = (teams: Team[], id: string) => {
  return teams.find((t) => t.members.find((m) => m.id === id));
};

const getInviteAvailability = (
  data: {
    participants: Participant[];
    participant?: Participant;
    teams: Team[];
    team?: Team;
  },
  participantId: string,
  team?: Team
) => {
  // check if this is user's own page
  if (participantId === data.participant?.id) {
    return "You cannot send an invite to yourself";
  }

  // check if user is part of a team
  if (!data.team) {
    return "You cannot send an invite since you are not part of a team";
  }

  // check if this user is your own teammate
  if (team?.id === data.team?.id) {
    return "This participant is already your teammate";
  }

  // check if this user already has an invite
  if (data.team?.invites.find((i) => i.id === participantId)) {
    return "This participant already has an invite to your team";
  }

  // check if this user is part of a team that is already finalized
  if (!team?.open) {
    return "This participant is part of a team that has already been finalized";
  }

  // check if you are part of a team that is already finalized
  if (!data.team?.open) {
    return "You are part of a team that has already been finalized";
  }

  return "";
};

export const ParticipantPage = () => {
  const { id } = useParams();
  const data = useData();
  const toast = useToast();

  if (!id) {
    return <div>No Participant Found</div>;
  }

  if (!data) {
    return <Loader />;
  }

  const participant = findParticipantData(data.participants, id);
  const team = findParticipantTeam(data.teams, id);

  if (!participant) {
    return <div>No Participant Found</div>;
  }

  const inviteAvailabilityMessage = getInviteAvailability(data, id, team);

  const isMe = id === data.participant?.id;
  const invitedTeams = isMe && data.teams.filter((t) => t.invites.find((i) => i.id === id));

  const onClickSendInvite = () => {
    if (data.team) {
      sendInvite(data.team, participant.id)
        .then(() =>
          triggerSuccessToast(toast, {
            title: "Invite Sent",
            description: `You have successfully sent an invite to ${participant.email}`,
          })
        )
        .catch(() =>
          triggerFailureToast(toast, {
            title: "Error",
            description: "Oh no! An error occured :(",
          })
        );
    }
  };

  const onClickAcceptInvite = (team: Team) => {
    acceptInvite(data.teams, team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully sent an invite to ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickRejectInvite = (team: Team) => {
    rejectInvite(team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully sent an invite to ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const shouldSeeInvites = !data.team || data.team.open;

  return (
    <Box width="100%">
      <Box inset="0" height="48" bg="brand.600" />
      <Flex justify="center" align="center">
        <Flex maxW="600px" w="100%" direction="column" position="relative" top="-64px" gap="20px">
          <ParticipantData
            team={team}
            participant={participant}
            inviteAvailabilityMessage={inviteAvailabilityMessage}
            onClickSendInvite={onClickSendInvite}
          />
          {shouldSeeInvites && invitedTeams && (
            <ParticipantInvites
              teams={invitedTeams}
              onClickAcceptInvite={onClickAcceptInvite}
              onClickRejectInvite={onClickRejectInvite}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

// () => sendInvite(data.team as Team, participant.id)
