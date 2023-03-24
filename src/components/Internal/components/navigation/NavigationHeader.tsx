import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type NavigationHeaderProps = {
  id: string;
  name: string;
};

export const NavigationHeader = ({ id, name }: NavigationHeaderProps) => (
  <Box w="100%" px="4" py="3" bg="white" borderBottomWidth="1px" borderBottomColor="gray.200">
    <Link to={`/participants/${id}`}>
      <Text color="gray.700" fontSize="md" fontWeight="700">
        {name}
      </Text>
    </Link>
  </Box>
);
