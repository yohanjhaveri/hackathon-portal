import { Divider, Flex } from "@chakra-ui/react";
import { Participant, Team } from "../../../../types";
import { ParticipantInfo } from "./ParticipantInfo";
import { ParticipantDetails } from "./ParticipantDetails";

export type ParticipantDataProps = {
  team?: Team;
  participant: Participant;
  inviteAvailabilityMessage: string;
  onClickSendInvite: () => void;
};

export const ParticipantData = ({
  team,
  participant,
  inviteAvailabilityMessage,
  onClickSendInvite,
}: ParticipantDataProps) => (
  <Flex direction="column" bg="white" shadow="base" rounded="lg" align="center">
    <ParticipantInfo participant={participant} />
    <Divider />
    <ParticipantDetails
      team={team}
      participant={participant}
      inviteAvailabilityMessage={inviteAvailabilityMessage}
      onClickSendInvite={onClickSendInvite}
    />
  </Flex>
);
