import { Box, Stack, Text } from "@chakra-ui/react";
import { CardWrapper } from "../../../../../components/wrappers/CardWrapper";
import { Participant } from "../../../../../types";
import { RequestsCardEmpty } from "./RequestsCardEmpty";
import { RequestsCardTable } from "./RequestsCardTable";

export type RequestsCardProps = {
  requests: Participant[];
  onClickAcceptRequest: (participant: Participant) => void;
  onClickRejectRequest: (participant: Participant) => void;
};

export const RequestsCard = ({ requests, onClickAcceptRequest, onClickRejectRequest }: RequestsCardProps) => (
  <CardWrapper flex="1">
    <Stack spacing="3">
      <Box p="5" pb="0">
        <Text fontSize="lg" fontWeight="bold">
          Invites
        </Text>
      </Box>
      {requests.length !== 0 ? (
        <RequestsCardTable
          requests={requests}
          onClickAcceptRequest={onClickAcceptRequest}
          onClickRejectRequest={onClickRejectRequest}
        />
      ) : (
        <RequestsCardEmpty />
      )}
    </Stack>
  </CardWrapper>
);
