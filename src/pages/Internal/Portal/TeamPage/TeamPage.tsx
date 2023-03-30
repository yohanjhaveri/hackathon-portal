import { useNavigate, useParams } from "react-router-dom";
import { HStack, useToast, useDisclosure, Stack } from "@chakra-ui/react";
import { acceptRequest, finalizeTeam, rejectRequest, removeMember, sendRequest } from "../../../../api";
import { Loader } from "../../../../components/Loader";
import { ConfirmationModal } from "../../../../components/modals/ConfirmationModal";
import { ColorWrapper } from "../../../../components/wrappers/ColorWrapper";
import { useData } from "../../../../context";
import { isTeamRegistrationPhaseActive } from "../../../../env";
import { Participant } from "../../../../types";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils";
import { DetailsCard } from "./DetailsCard/DetailsCard";
import { InvitesCard } from "./InvitesCard/InvitesCard";
import { RequestsCard } from "./RequestsCard/RequestsCard";

type ObjectWithId = {
  id: string;
}[];

const mapJoin = <A extends ObjectWithId, B extends ObjectWithId>(outer?: A, inner?: B) => {
  return outer?.map((o) => inner?.find((i) => i.id === o.id));
};

export const TeamPage = () => {
  const { id } = useParams();

  const data = useData();
  const toast = useToast();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!data) {
    return <Loader />;
  }

  const { participant, participants } = data;

  const team = data.teams.find((team) => team.id === id);

  if (!team) {
    return <div>No Team Found</div>;
  }

  const members = mapJoin(team.members, participants) as Participant[];
  const invites = mapJoin(team.invites, participants) as Participant[];
  const requests = mapJoin(team.requests, participants) as Participant[];

  const isUserMember = team.id === data.team?.id;
  const hasUserSentRequest = Boolean(team.requests.find((r) => r.id === participant?.id));

  if (!isTeamRegistrationPhaseActive && team.open) {
    finalizeTeam(team);
  }

  const onClickAcceptRequest = (participant: Participant) => {
    acceptRequest(data.teams, team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully accepted the request from ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickRejectRequest = (participant: Participant) => {
    rejectRequest(team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully rejected the request from ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickSendRequest = () => {
    participant &&
      sendRequest(team, participant.id)
        .then(() =>
          triggerSuccessToast(toast, {
            title: "Request Sent",
            description: `You have successfully sent a join request to ${team.name}`,
          })
        )
        .catch(() =>
          triggerFailureToast(toast, {
            title: "Error",
            description: "Oh no! An error occured :(",
          })
        );
  };

  const onClickFinalizeTeam = () => {
    finalizeTeam(team)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Team Finalized",
          description: "You have successfully finalized your team",
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickRemoveMember = (participant: Participant) => {
    removeMember(team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Member Removed",
          description: `You have successfully removed team member with email ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickLeaveTeam = (participant: Participant) => {
    removeMember(team, participant.id)
      .then(() => {
        triggerSuccessToast(toast, {
          title: "Team Closed",
          description: `You have successfully left your team with name ${team.name}`,
        });

        navigate("/teams");
      })
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  return (
    <ColorWrapper>
      <Stack maxW="1000px" direction="column" position="relative" top="-24" spacing="5">
        <DetailsCard
          team={team}
          members={members}
          isUserMember={isUserMember}
          hasUserSentRequest={hasUserSentRequest}
          onOpen={onOpen}
          onClickSendRequest={onClickSendRequest}
          onClickLeaveTeam={onClickLeaveTeam}
          onClickRemoveMember={onClickRemoveMember}
        />
        {team.open && isUserMember && (
          <HStack spacing="5" align="flex-start">
            <RequestsCard
              requests={requests}
              onClickAcceptRequest={onClickAcceptRequest}
              onClickRejectRequest={onClickRejectRequest}
            />
            <InvitesCard invites={invites} />
          </HStack>
        )}
        {isOpen && (
          <ConfirmationModal
            title="Are you sure you want to continue?"
            body="Finalizing your team is an irreversible action and will lock your team in place. Please confirm with all your team members before proceeding to finalize your team. You will not be able to change your team members anymore once you finalize the team."
            action="Finalize"
            onClose={onClose}
            onClick={onClickFinalizeTeam}
          />
        )}
      </Stack>
    </ColorWrapper>
  );
};
