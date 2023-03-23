import { Button, Flex, Grid, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { Participant, Team } from "../../../../types";

export type ParticipantDetailsProps = {
  team?: Team;
  participant: Participant;
  inviteAvailabilityMessage: string;
  onClickSendInvite: () => void;
};

export const ParticipantDetails = ({
  team,
  participant,
  inviteAvailabilityMessage,
  onClickSendInvite,
}: ParticipantDetailsProps) => (
  <Flex w="100%" p="20px" justify="space-between" align="center">
    <Grid>
      {team ? (
        <Link to={`/teams/${team.id}`}>
          <Text fontWeight="bold">Member of {team.name}</Text>
          <HStack spacing="1" fontSize="sm" color="gray.600">
            <Icon as={HiUsers} />
            <Text>
              {team.members.length} member{team.members.length !== 1 && "s"}
            </Text>
          </HStack>
        </Link>
      ) : (
        <>
          <Text fontWeight="bold">No Team</Text>
          <HStack spacing="1" fontSize="sm" color="gray.600">
            <Text>Currently not a member of any team</Text>
          </HStack>
        </>
      )}
    </Grid>

    <Flex gap="8px">
      {participant.linkedin && (
        <Tooltip label="View participant's linkedin profile">
          <Link to={participant.linkedin} target="_blank">
            <Button colorScheme="blue" leftIcon={<FaLinkedinIn />}>
              LinkedIn
            </Button>
          </Link>
        </Tooltip>
      )}
      <Tooltip label={inviteAvailabilityMessage}>
        <Button
          colorScheme="teal"
          leftIcon={<FaPaperPlane />}
          isDisabled={Boolean(inviteAvailabilityMessage)}
          onClick={onClickSendInvite}
        >
          Invite to team
        </Button>
      </Tooltip>
    </Flex>
  </Flex>
);
