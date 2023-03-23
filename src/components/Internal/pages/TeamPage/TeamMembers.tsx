import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { FiCheck, FiHelpCircle, FiTrash2, FiUserX, FiX } from "react-icons/fi";
import { Participant } from "../../../../types";
import { useData } from "../../../../context/DataContext";

type TeamMembersProps = {
  members: Participant[];
  isMember?: boolean;
  isRequest?: boolean;
  isInvite?: boolean;
  isTeamOpen?: boolean;
  onClickAcceptRequest?: (participant: Participant) => void;
  onClickRejectRequest?: (participant: Participant) => void;
  onClickRemoveMember?: (participant: Participant) => void;
  onClickLeaveTeam?: (participant: Participant) => void;
};

export const TeamMembers = ({
  members,
  isMember,
  isRequest,
  isInvite,
  isTeamOpen,
  onClickAcceptRequest,
  onClickRejectRequest,
  onClickRemoveMember,
  onClickLeaveTeam,
}: TeamMembersProps) => {
  const data = useData();

  return (
    <Table>
      {isRequest || isInvite || (
        <Thead>
          <Tr>
            {isRequest || isInvite || (
              <Th>
                <HStack spacing="3">
                  <HStack spacing="1">
                    <Text>Name</Text>
                  </HStack>
                </HStack>
              </Th>
            )}
            {isRequest || isInvite || (
              <>
                <Th>Email</Th>
                <Th>Location</Th>
              </>
            )}
            {((isTeamOpen && isMember) || isRequest || isInvite) && <Th></Th>}
          </Tr>
        </Thead>
      )}
      <Tbody borderTopWidth="1px" borderTopColor="gray.100">
        {members.map((member) => (
          <Tr key={member.id}>
            <Td>
              <Link key={member.id} to={`/participants/${member.id}`} style={{ display: "block" }}>
                <HStack spacing="3">
                  <Avatar boxSize="10" name={member.name} color="gray.500" bg="gray.300" />
                  <Box>
                    <Text fontWeight="600">{member.name}</Text>
                    <Text color="muted">{member.position}</Text>
                  </Box>
                </HStack>
              </Link>
            </Td>
            {isRequest || isInvite || (
              <>
                <Td>
                  <Text color="muted">{member.email}</Text>
                </Td>
                <Td>
                  <Text color="muted">
                    {member.location} ({member.timezone})
                  </Text>
                </Td>
              </>
            )}
            {isTeamOpen && isMember && (
              <Td>
                <HStack spacing="1" justify="flex-end">
                  <Box w="40px" h="40px" />
                  <Tooltip label={data?.participant?.id === member.id ? "Leave Team" : "Remove Member"}>
                    <IconButton
                      icon={
                        data?.participant?.id === member.id ? (
                          <FiUserX fontSize="1.25rem" />
                        ) : (
                          <FiTrash2 fontSize="1.25rem" />
                        )
                      }
                      variant="ghost"
                      _hover={{ color: "red.500", bg: "red.100" }}
                      _focus={{ color: "red.500", bg: "red.100" }}
                      _active={{ color: "red.500", bg: "red.100" }}
                      aria-label="Remove member"
                      onClick={
                        data?.participant?.id === member.id
                          ? () => onClickLeaveTeam && onClickLeaveTeam(member)
                          : () => onClickRemoveMember && onClickRemoveMember(member)
                      }
                    />
                  </Tooltip>
                </HStack>
              </Td>
            )}
            {isRequest && (
              <Td>
                <HStack spacing="1" justify="flex-end">
                  {onClickAcceptRequest && (
                    <Tooltip label="Accept Request">
                      <IconButton
                        size="sm"
                        icon={<FiCheck fontSize="1rem" />}
                        variant="ghost"
                        color="green.500"
                        bg="green.50"
                        borderWidth="1px"
                        borderColor="green.100"
                        _hover={{ bg: "green.100" }}
                        _active={{ bg: "green.200" }}
                        aria-label="Accept request"
                        onClick={() => onClickAcceptRequest(member)}
                      />
                    </Tooltip>
                  )}
                  {onClickRejectRequest && (
                    <Tooltip label="Reject Request">
                      <IconButton
                        size="sm"
                        icon={<FiX fontSize="1rem" />}
                        variant="ghost"
                        color="red.500"
                        bg="red.50"
                        borderWidth="1px"
                        borderColor="red.100"
                        _hover={{ bg: "red.100" }}
                        _active={{ bg: "red.200" }}
                        aria-label="Reject request"
                        onClick={() => onClickRejectRequest(member)}
                      />
                    </Tooltip>
                  )}
                </HStack>
              </Td>
            )}
            {isInvite && (
              <Td>
                <HStack spacing="1" justify="flex-end">
                  <Box w="40px" h="40px" />
                  <Tooltip label="Waiting for the user to respond to the invite">
                    <Box>
                      <Icon as={FiHelpCircle} color="gray.400" fontSize="1.25rem" />
                    </Box>
                  </Tooltip>
                </HStack>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
