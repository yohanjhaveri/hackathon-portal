import { FiHelpCircle } from "react-icons/fi";
import { Box, HStack, Icon, Tooltip } from "@chakra-ui/react";
import { ParticipantInfo } from "../../../../../components/ParticipantInfo";
import { Participant } from "../../../../../types";

type InvitesCardTableProps = {
  invites: Participant[];
};

export const InvitesCardTable = ({ invites }: InvitesCardTableProps) => (
  <Box>
    {invites.map((participant) => (
      <HStack
        key={participant.id}
        px="6"
        py="4"
        borderTopWidth="1px"
        borderTopColor="gray.100"
        justify="space-between"
      >
        <ParticipantInfo participant={participant} />

        <HStack spacing="1" justify="flex-end">
          <Box w="40px" h="40px" />
          <Tooltip label="Waiting for the user to respond to the invite">
            <Box>
              <Icon as={FiHelpCircle} color="gray.400" fontSize="1.25rem" />
            </Box>
          </Tooltip>
        </HStack>
      </HStack>
    ))}
  </Box>
);
