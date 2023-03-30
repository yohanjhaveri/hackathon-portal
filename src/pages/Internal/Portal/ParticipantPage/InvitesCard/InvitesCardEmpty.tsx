import { FaSearch } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import { EmptyList } from "../../../../../components/EmptyList";

export const InvitesCardEmpty = () => (
  <Box p="5" pt="0">
    <EmptyList
      text="You do not have invites from any teams"
      buttonText="Find Teams"
      buttonLink="/teams"
      buttonIcon={<FaSearch />}
    />
  </Box>
);
