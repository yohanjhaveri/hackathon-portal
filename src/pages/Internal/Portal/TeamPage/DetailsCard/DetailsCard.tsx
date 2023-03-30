import { Link } from "react-router-dom";
import { Box, Button, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";
import { MemberCount } from "../../../../../components/MemberCount";
import { Status } from "../../../../../components/Status";
import { CardWrapper } from "../../../../../components/wrappers/CardWrapper";
import { isIdeaRegistrationPhaseActive } from "../../../../../env";
import { Participant, Team } from "../../../../../types";
import { DetailsCardMembers } from "./DetailsCardMembers";

export type DetailsCardProps = {
  team: Team;
  members: Participant[];
  isUserMember: boolean;
  hasUserSentRequest: boolean;
  onOpen: () => void;
  onClickSendRequest: () => void;
  onClickRemoveMember: (participant: Participant) => void;
  onClickLeaveTeam: (participant: Participant) => void;
};

export const DetailsCard = ({
  team,
  members,
  isUserMember,
  hasUserSentRequest,
  onOpen,
  onClickSendRequest,
  onClickRemoveMember,
  onClickLeaveTeam,
}: DetailsCardProps) => (
  <CardWrapper overflow="hidden">
    <Box p="5">
      <HStack justify="space-between">
        <HStack align="center" spacing="2">
          <Heading size="xs" fontWeight="extrabold" letterSpacing="tight">
            {team.name}
          </Heading>
          <Text>
            {team.open ? <Status text="Open" color="green" /> : <Status text="Closed" color="red" />}
          </Text>
        </HStack>

        {isUserMember ? (
          <HStack>
            {isIdeaRegistrationPhaseActive && (
              <Link to="/update-team">
                <Button size="sm" colorScheme="blue">
                  Edit Team
                </Button>
              </Link>
            )}
            <Tooltip
              label={
                team.open
                  ? "Finalizing your team is an irreversible action and will lock your team members in place"
                  : "Your team has been finalized and no further member changes can be made"
              }
            >
              <Button size="sm" colorScheme="brand" onClick={onOpen} isDisabled={!team.open}>
                Finalize Team
              </Button>
            </Tooltip>
          </HStack>
        ) : (
          <Tooltip
            label={
              !team.open
                ? "The team is closed from new members"
                : hasUserSentRequest
                ? "You have already sent a request to this team"
                : ""
            }
          >
            <Button
              size="sm"
              colorScheme="brand"
              isDisabled={!team.open || hasUserSentRequest}
              onClick={onClickSendRequest}
            >
              Request to Join
            </Button>
          </Tooltip>
        )}
      </HStack>
      {(isUserMember || !isIdeaRegistrationPhaseActive) && (
        <Text color="gray.500" mt="4">
          {team.idea}
        </Text>
      )}
    </Box>
    <DetailsCardMembers
      members={members}
      isMember={isUserMember}
      isTeamOpen={team.open}
      onClickRemoveMember={onClickRemoveMember}
      onClickLeaveTeam={onClickLeaveTeam}
    />
    <Box px="6" py="4">
      <MemberCount count={members.length} />
    </Box>
  </CardWrapper>
);
