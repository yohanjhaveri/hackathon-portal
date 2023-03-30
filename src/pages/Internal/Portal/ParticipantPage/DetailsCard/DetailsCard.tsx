import { FaMap, FaMapMarkerAlt } from "react-icons/fa";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Attribute } from "../../../../../components/Attribute";
import { Skills } from "../../../../../components/Skills";
import { CardWrapper } from "../../../../../components/wrappers/CardWrapper";
import { Participant } from "../../../../../types";
import { DetailsCardEmail } from "./DetailsCardEmail";
import { DetailsCardLinkedIn } from "./DetailsCardLinkedIn";

export type DetailsCardProps = {
  participant: Participant;
};

export const DetailsCard = ({ participant }: DetailsCardProps) => (
  <CardWrapper>
    <Stack p="6" spacing="4">
      <Box>
        <HStack>
          <Text fontSize="xl" fontWeight="extrabold">
            {participant.name}
          </Text>
          {participant.linkedin && <DetailsCardLinkedIn link={participant.linkedin} />}
        </HStack>

        <Text fontWeight="semibold" color="muted">
          {participant.position}
        </Text>

        <DetailsCardEmail email={participant.email} />
      </Box>

      <Stack spacing="1">
        <Attribute icon={FaMapMarkerAlt} value={participant.location} />
        <Attribute icon={FaMap} value={participant.timezone} />
      </Stack>

      <Text fontSize="sm" color="gray.500">
        {participant.summary}
      </Text>

      <Skills skills={participant.skills} />
    </Stack>
  </CardWrapper>
);
