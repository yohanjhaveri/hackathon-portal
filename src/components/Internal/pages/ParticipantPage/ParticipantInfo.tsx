import { Avatar, Flex, Heading, HStack, Icon, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
import { FaAt, FaMap } from "react-icons/fa";
import { Participant } from "../../../../types";

export type ParticipantInfoProps = {
  participant: Participant;
};

export const ParticipantInfo = ({ participant }: ParticipantInfoProps) => (
  <Flex direction="column" align="center" p="30px" mb="30px">
    <Avatar
      mt="-72px"
      mb="16px"
      borderWidth="6px"
      borderColor="white"
      size="xl"
      name={participant.name}
      color="gray.500"
      bg="gray.300"
      fontWeight="700"
    />
    <Flex direction="column" align="center" mb="30px">
      <Heading size="md" fontWeight="extrabold" letterSpacing="tight">
        {participant.name}
      </Heading>
      <Text color="gray.600">{participant.position}</Text>
    </Flex>
    <Flex direction="column" align="center" px="50px">
      <Stack direction="row" spacing="6" mt="4" fontSize="sm" fontWeight="medium" color="brand.500">
        <HStack>
          <Icon color="brand.500" as={FaAt} />
          <Text color="muted" fontWeight="500">
            <a href={`mailto:${participant.email}`} target="_blank" rel="noreferrer">
              <Text color="blue.500" fontSize="sm" fontWeight="500">
                {participant.email}
              </Text>
            </a>
          </Text>
        </HStack>
        <HStack>
          <Icon color="brand.500" as={FaMap} />
          <Text color="muted" fontWeight="500">
            {participant.location} ({participant.timezone})
          </Text>
        </HStack>
      </Stack>

      <Text color="gray.500" textAlign="center" mt="20px">
        {participant.summary}
      </Text>

      <Stack spacing="1" mt="20px">
        <Wrap shouldWrapChildren>
          {participant.skills.map((skill) => (
            <Tag size="md" key={skill}>
              {skill}
            </Tag>
          ))}
        </Wrap>
      </Stack>
    </Flex>
  </Flex>
);
