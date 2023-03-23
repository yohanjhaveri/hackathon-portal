import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { HiUsers } from "react-icons/hi";
import { FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Team } from "../../../../types";

export type ParticipantInvitesProps = {
  teams: Team[];
  onClickAcceptInvite: (team: Team) => void;
  onClickRejectInvite: (team: Team) => void;
};

export const ParticipantInvites = ({
  teams,
  onClickAcceptInvite,
  onClickRejectInvite,
}: ParticipantInvitesProps) => (
  <Flex
    w="100%"
    direction="column"
    justify="space-between"
    align="center"
    bg="white"
    shadow="base"
    rounded="lg"
    overflow="hidden"
  >
    <Box px="20px" py="20px" w="100%">
      <Text fontSize="1.2rem" fontWeight="bold">
        Invites
      </Text>
      <Text color="gray.500">This is the list of teams you have been invited to</Text>
    </Box>
    {teams && teams.length !== 0 && (
      <Box w="100%">
        <Table>
          <Tbody borderTopWidth="1px" borderTopColor="gray.100">
            {teams.map((team) => (
              <Tr key={team.id}>
                <Td>
                  <Link key={team.id} to={`/teams/${team.id}`} style={{ display: "block" }}>
                    <HStack spacing="3">
                      <Avatar boxSize="10" name={team.name} color="gray.500" bg="gray.300" />
                      <Box>
                        <Text fontWeight="600">{team.name}</Text>
                        <HStack spacing="1" fontSize="sm" color="gray.600">
                          <Icon as={HiUsers} />
                          <Text>
                            {team.members.length} member{team.members.length !== 1 && "s"}
                          </Text>
                        </HStack>
                      </Box>
                    </HStack>
                  </Link>
                </Td>
                <Td>
                  <HStack spacing="1" justify="flex-end">
                    <Tooltip label="Accept Invite">
                      <IconButton
                        size="sm"
                        icon={<FiCheck fontSize="1rem" />}
                        variant="ghost"
                        color="green.500"
                        bg="green.50"
                        borderWidth="1px"
                        borderColor="green.100"
                        _hover={{ bg: "green.100" }}
                        _focus={{ bg: "green.100" }}
                        _active={{ bg: "green.100" }}
                        aria-label="Accept Invite"
                        onClick={() => onClickAcceptInvite(team)}
                      />
                    </Tooltip>
                    <Tooltip label="Reject Invite">
                      <IconButton
                        size="sm"
                        icon={<FiX fontSize="1rem" />}
                        variant="ghost"
                        color="red.500"
                        bg="red.50"
                        borderWidth="1px"
                        borderColor="red.100"
                        _hover={{ bg: "red.100" }}
                        _focus={{ bg: "red.100" }}
                        _active={{ bg: "red.100" }}
                        aria-label="Reject Invite"
                        onClick={() => onClickAcceptInvite(team)}
                      />
                    </Tooltip>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    )}
  </Flex>
);
