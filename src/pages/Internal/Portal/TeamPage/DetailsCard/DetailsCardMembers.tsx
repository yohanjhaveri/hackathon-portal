import { FiTrash2, FiUserX } from "react-icons/fi";
import { HStack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { ActionButton } from "../../../../../components/ActionButton";
import { ParticipantInfo } from "../../../../../components/ParticipantInfo";
import { useData } from "../../../../../context";
import { Participant } from "../../../../../types";

type DetailsCardMembersProps = {
  members: Participant[];
  isTeamOpen: boolean;
  isMember: boolean;
  onClickRemoveMember?: (participant: Participant) => void;
  onClickLeaveTeam?: (participant: Participant) => void;
};

export const DetailsCardMembers = ({
  members,
  isTeamOpen,
  isMember,
  onClickRemoveMember,
  onClickLeaveTeam,
}: DetailsCardMembersProps) => {
  const data = useData();

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Location</Th>
          {isTeamOpen && isMember && <Th></Th>}
        </Tr>
      </Thead>
      <Tbody borderTopWidth="1px" borderTopColor="gray.100">
        {members.map((member) => (
          <Tr key={member.id}>
            <Td>
              <ParticipantInfo participant={member} />
            </Td>
            <Td>
              <Text color="muted">{member.email}</Text>
            </Td>
            <Td>
              <Text color="muted">
                {member.location} ({member.timezone})
              </Text>
            </Td>
            {isTeamOpen && isMember && (
              <Td>
                <HStack spacing="1" justify="flex-end">
                  <ActionButton
                    icon={data?.participant?.id === member.id ? <FiUserX /> : <FiTrash2 />}
                    label={data?.participant?.id === member.id ? "Leave Team" : "Remove Member"}
                    colorScheme="red"
                    onClick={
                      data?.participant?.id === member.id
                        ? () => onClickLeaveTeam && onClickLeaveTeam(member)
                        : () => onClickRemoveMember && onClickRemoveMember(member)
                    }
                  />
                </HStack>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
