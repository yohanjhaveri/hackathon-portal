import { useNavigate, useParams } from "react-router-dom";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Button,
  Tooltip,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { HiUsers } from "react-icons/hi";
import { useData } from "../../../../context/DataContext";
import { Participant } from "../../../../types";
import { TeamMembers } from "./TeamMembers";
import {
  acceptRequest,
  finalizeTeam,
  rejectRequest,
  removeMember,
  sendRequest,
} from "../../../../api/actions";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils/toasts";
import { isIdeaRegistrationPhaseActive, isTeamRegistrationPhaseActive } from "../../../../constants/env";
import { ConfirmationModal } from "../../components/reusable/ConfirmationModal";
import { Loader } from "../../../Loader";

type ObjectWithId = {
  id: string;
}[];

const mapJoin = <A extends ObjectWithId, B extends ObjectWithId>(outer?: A, inner?: B) => {
  return outer?.map((o) => inner?.find((i) => i.id === o.id));
};

export const TeamPage = () => {
  const { id } = useParams();

  const data = useData();
  const toast = useToast();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!data) {
    return <Loader />;
  }

  const { participant, participants } = data;

  const team = data.teams.find((team) => team.id === id);

  if (!team) {
    return <div>No Team Found</div>;
  }

  const members = mapJoin(team.members, participants) as Participant[];
  const invites = mapJoin(team.invites, participants) as Participant[];
  const requests = mapJoin(team.requests, participants) as Participant[];

  const isUserMember = team.id === data.team?.id;
  const hasUserRequested = Boolean(team.requests.find((r) => r.id === participant?.id));

  if (!isTeamRegistrationPhaseActive && team.open) {
    finalizeTeam(team);
  }

  // TODO: need to implement this based on if we get gender from microsoft user
  const teamMeetsRequirements = false;

  const onClickAcceptRequest = (participant: Participant) => {
    acceptRequest(data.teams, team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully accepted the request from ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickRejectRequest = (participant: Participant) => {
    rejectRequest(team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Invite Sent",
          description: `You have successfully rejected the request from ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickSendRequest = () => {
    participant &&
      sendRequest(team, participant.id)
        .then(() =>
          triggerSuccessToast(toast, {
            title: "Request Sent",
            description: `You have successfully sent a join request to ${team.name}`,
          })
        )
        .catch(() =>
          triggerFailureToast(toast, {
            title: "Error",
            description: "Oh no! An error occured :(",
          })
        );
  };

  const onClickFinalizeTeam = () => {
    finalizeTeam(team)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Team Finalized",
          description: "You have successfully finalized your team",
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickRemoveMember = (participant: Participant) => {
    removeMember(team, participant.id)
      .then(() =>
        triggerSuccessToast(toast, {
          title: "Member Removed",
          description: `You have successfully removed team member with email ${participant.email}`,
        })
      )
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  const onClickLeaveTeam = (participant: Participant) => {
    removeMember(team, participant.id)
      .then(() => {
        triggerSuccessToast(toast, {
          title: "Team Closed",
          description: `You have successfully left your team with name ${team.name}`,
        });

        navigate("/teams");
      })
      .catch(() =>
        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        })
      );
  };

  return (
    <Box width="100%">
      <Box inset="0" height="48" bg="brand.600" />
      <Flex justify="center" align="center">
        <Flex w="100%" maxW="1200px" direction="column" position="relative" top="-64px" gap="20px">
          <Flex w="100%" bg="white" shadow="base" rounded="lg" display="inline-block" overflow="hidden">
            <Box px="20px" py="20px">
              <Flex justify="space-between" align="center">
                <HStack align="center" spacing="2">
                  <Heading size="xs" fontWeight="extrabold" letterSpacing="tight">
                    {team.name}
                  </Heading>
                  <Text>
                    {team.open ? (
                      <Badge colorScheme="green">Open</Badge>
                    ) : (
                      <Badge colorScheme="red">Closed</Badge>
                    )}
                  </Text>
                </HStack>

                {isUserMember ? (
                  <HStack>
                    {isIdeaRegistrationPhaseActive && (
                      <Button size="sm" colorScheme="blue" onClick={() => navigate("/update-team")}>
                        Edit Team
                      </Button>
                    )}
                    <Tooltip
                      label={
                        team.open
                          ? "Finalizing your team is an irreversible action and will lock your team in place"
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
                      team.open
                        ? hasUserRequested
                          ? "You have already sent a request to this team"
                          : ""
                        : "The team is closed from new members"
                    }
                  >
                    <Button
                      size="sm"
                      colorScheme="brand"
                      isDisabled={!team.open || hasUserRequested}
                      onClick={onClickSendRequest}
                    >
                      Request to Join
                    </Button>
                  </Tooltip>
                )}
              </Flex>
              {(isUserMember || !isIdeaRegistrationPhaseActive) && (
                <Text color="gray.500" mt="10px">
                  {team.idea}
                </Text>
              )}
            </Box>
            <Box>
              <TeamMembers
                members={members}
                isMember={isUserMember}
                isTeamOpen={team.open}
                onClickRemoveMember={onClickRemoveMember}
                onClickLeaveTeam={onClickLeaveTeam}
              />
            </Box>
            <Box px="6" py="4">
              <HStack spacing="1" fontSize="sm" color="gray.500">
                <Icon as={HiUsers} />
                <Text>
                  {members.length} member{members.length !== 1 && "s"}
                </Text>
              </HStack>
            </Box>
          </Flex>
          {team.open && isUserMember && (
            <Flex gap="20px" align="flex-start">
              <Flex flex="1" bg="white" shadow="base" rounded="lg">
                <Box w="100%" rounded="lg" display="inline-block" overflow="hidden">
                  <Box px="20px" py="20px">
                    <Text fontSize="1.2rem" fontWeight="bold">
                      Requests
                    </Text>
                    <Text color="gray.500">
                      This is the list of participants requesting to join your team
                    </Text>
                  </Box>
                  <Box>
                    <TeamMembers
                      members={requests}
                      isRequest={isUserMember}
                      onClickAcceptRequest={onClickAcceptRequest}
                      onClickRejectRequest={onClickRejectRequest}
                    />
                  </Box>
                </Box>
              </Flex>
              <Flex flex="1" bg="white" shadow="base" rounded="lg">
                <Box w="100%" rounded="lg" display="inline-block" overflow="hidden">
                  <Box px="20px" py="20px">
                    <Text fontSize="1.2rem" fontWeight="bold">
                      Invites
                    </Text>
                    <Text color="gray.500">This is the list of participants invited to join your team</Text>
                  </Box>
                  <Box>
                    <TeamMembers members={invites} isInvite={isUserMember} />
                  </Box>
                </Box>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      {isOpen && (
        <ConfirmationModal
          title={
            teamMeetsRequirements
              ? "Are you sure you want to continue?"
              : "You do not meet the team requirements to be able to finalize your team"
          }
          body={
            teamMeetsRequirements
              ? "Finalizing your team is an irreversible action and will lock your team in place. Please confirm with all your team members before proceeding to finalize your team. You will not be able to change your team members anymore once you finalize the team."
              : "Finalizing your team requires you to have 3-6 team members with at least one person of a different gender and at least one person from a different location. You must meet these requirements being able to finalize your team."
          }
          action={teamMeetsRequirements ? "Finalize" : "Review Team"}
          onClose={onClose}
          onClick={teamMeetsRequirements ? onClickFinalizeTeam : onClose}
        />
      )}
    </Box>
  );
};
