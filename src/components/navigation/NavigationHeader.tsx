import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

type NavigationHeaderProps = {
  participantId: string;
  participantName: string;
};

export const NavigationHeader = ({ participantId, participantName }: NavigationHeaderProps) => (
  <Box px="4" py="3" bg="white" borderBottomWidth="1px" borderBottomColor="gray.200">
    <Link to={`/participants/${participantId}`}>
      <Text fontWeight="bold">{participantName}</Text>
    </Link>
  </Box>
);
