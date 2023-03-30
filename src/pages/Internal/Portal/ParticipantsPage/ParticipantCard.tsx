import { FaMap, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Attribute } from "../../../../components/Attribute";
import { Skills } from "../../../../components/Skills";
import { Participant } from "../../../../types";

type ParticipantCardProps = {
  participant: Participant;
};

export const ParticipantCard = ({ participant }: ParticipantCardProps) => (
  <Link to={`/participants/${participant.id}`}>
    <Box bg="white" p="6" rounded="lg" borderWidth="1px" borderColor="gray.200" cursor="pointer" h="100%">
      <Stack spacing="0">
        <Text fontSize="lg" fontWeight="bold">
          {participant.name}
        </Text>
        <Text fontSize="sm" fontWeight="medium" color="gray.600">
          {participant.position}
        </Text>
      </Stack>

      <Stack spacing="1" mt="2">
        <Attribute icon={FaMapMarkerAlt} value={participant.location} />
        <Attribute icon={FaMap} value={participant.timezone} />
      </Stack>

      <Stack spacing="1" mt="4">
        <Skills size="sm" skills={participant.skills} />
      </Stack>
    </Box>
  </Link>
);
