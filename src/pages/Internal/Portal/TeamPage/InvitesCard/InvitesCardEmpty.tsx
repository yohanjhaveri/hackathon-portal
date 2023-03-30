import { FaSearch } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import { EmptyList } from "../../../../../components/EmptyList";

export const InvitesCardEmpty = () => (
  <Box p="20px" pt="0">
    <EmptyList
      text="Your team has not sent any invites to participants"
      buttonText="Find Participants"
      buttonLink="/participants"
      buttonIcon={<FaSearch />}
    />
  </Box>
);
