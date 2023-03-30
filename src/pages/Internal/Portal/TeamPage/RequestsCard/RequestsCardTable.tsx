import { Box, HStack } from "@chakra-ui/react";
import { ParticipantInfo } from "../../../../../components/ParticipantInfo";
import { ResponseButtons } from "../../../../../components/ResponseButtons";
import { Participant } from "../../../../../types";

type RequestsCardTableProps = {
  requests: Participant[];
  onClickAcceptRequest: (participant: Participant) => void;
  onClickRejectRequest: (participant: Participant) => void;
};

export const RequestsCardTable = ({
  requests,
  onClickAcceptRequest,
  onClickRejectRequest,
}: RequestsCardTableProps) => (
  <Box>
    {requests.map((participant) => (
      <HStack
        key={participant.id}
        px="6"
        py="4"
        borderTopWidth="1px"
        borderTopColor="gray.100"
        justify="space-between"
      >
        <ParticipantInfo participant={participant} />
        <ResponseButtons
          labelAccept="Accept request"
          labelReject="Reject request"
          onClickAccept={() => onClickAcceptRequest(participant)}
          onClickReject={() => onClickRejectRequest(participant)}
        />
      </HStack>
    ))}
  </Box>
);
