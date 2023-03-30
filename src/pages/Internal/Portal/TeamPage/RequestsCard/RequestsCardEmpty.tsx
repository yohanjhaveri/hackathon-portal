import { FaSearch } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import { EmptyList } from "../../../../../components/EmptyList";

export const RequestsCardEmpty = () => (
  <Box p="20px" pt="0" w="100%">
    <EmptyList
      text="Your team has not recieved any requests from participants"
      buttonText="Find Participants"
      buttonLink="/participants"
      buttonIcon={<FaSearch />}
    />
  </Box>
);
