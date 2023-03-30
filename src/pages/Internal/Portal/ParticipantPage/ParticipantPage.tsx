import { useParams } from "react-router-dom";
import { Stack, useToast } from "@chakra-ui/react";
import { acceptInvite, rejectInvite, sendInvite } from "../../../../api";
import { Loader } from "../../../../components/Loader";
import { ColorWrapper } from "../../../../components/wrappers/ColorWrapper";
import { useData } from "../../../../context";
import { Participant, Team } from "../../../../types";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils";
import { DetailsCard } from "./DetailsCard/DetailsCard";
import { InvitesCard } from "./InvitesCard/InvitesCard";
import { MembershipCard } from "./MembershipCard/MembershipCard";

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
  if (team && !team?.open) {
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
  const shouldSeeInvites = !data.team || data.team.open;

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

  return (
    <ColorWrapper>
      <Stack position="relative" maxW="xl" spacing="5" top="-24">
        <DetailsCard participant={participant} />
        {shouldSeeInvites && invitedTeams ? (
          <InvitesCard
            teams={invitedTeams}
            onClickAcceptInvite={onClickAcceptInvite}
            onClickRejectInvite={onClickRejectInvite}
          />
        ) : (
          <MembershipCard
            team={team}
            inviteAvailabilityMessage={inviteAvailabilityMessage}
            onClickSendInvite={onClickSendInvite}
          />
        )}
      </Stack>
    </ColorWrapper>
  );
};
