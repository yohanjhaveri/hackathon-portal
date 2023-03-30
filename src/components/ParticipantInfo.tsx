import { Link } from "react-router-dom";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { Participant } from "../types";

export type ParticipantInfoProps = {
  participant: Participant;
};

export const ParticipantInfo = ({ participant }: ParticipantInfoProps) => (
  <Link key={participant.id} to={`/participants/${participant.id}`} style={{ display: "block" }}>
    <HStack spacing="3">
      <Avatar boxSize="10" name={participant.name} color="gray.500" bg="gray.300" fontWeight="semibold" />
      <Box>
        <Text fontSize="sm" fontWeight="semibold">
          {participant.name}
        </Text>
        <Text fontSize="sm" color="muted">
          {participant.position}
        </Text>
      </Box>
    </HStack>
  </Link>
);
