import { Box, Flex, HStack, Icon, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAt, FaMap } from "react-icons/fa";
import { Participant } from "../../../../types";

type ParticipantCardProps = {
  participant: Participant;
};

export const ParticipantCard = ({ participant }: ParticipantCardProps) => (
  <Link to={`/participants/${participant.id}`}>
    <Box bg="white" p="6" rounded="lg" borderWidth="1px" borderColor="gray.200" cursor="pointer" h="100%">
      <Box width="full">
        <Flex direction="column" justifyContent="space-between">
          <Flex gap="5px" align="flex-end">
            <Text fontSize="md" fontWeight="bold">
              {participant.name}
            </Text>
          </Flex>
          <Text fontSize="sm" color="muted" fontWeight="medium">
            {participant.position}
          </Text>
        </Flex>

        <Stack spacing="1" mt="2">
          <HStack fontSize="sm">
            <Icon color="brand.500" as={FaAt} />
            <a href={`mailto:${participant.email}`} target="_blank" rel="noreferrer">
              <Text color="blue.500" fontWeight="500">
                {participant.email}
              </Text>
            </a>
          </HStack>
          <HStack fontSize="sm">
            <Icon color="brand.500" as={FaMap} />
            <Text>
              {participant.location} ({participant.timezone})
            </Text>
          </HStack>
        </Stack>

        <Stack spacing="1" mt="4">
          <Wrap shouldWrapChildren>
            {participant.skills.map((skill) => (
              <Tag size="sm" key={skill}>
                {skill}
              </Tag>
            ))}
          </Wrap>
        </Stack>
      </Box>
    </Box>
  </Link>
);
