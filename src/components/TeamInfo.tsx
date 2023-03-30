import { Link } from "react-router-dom";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { Team } from "../types";
import { MemberCount } from "./MemberCount";

export type TeamInfoProps = {
  team: Team;
};

export const TeamInfo = ({ team }: TeamInfoProps) => (
  <Link key={team.id} to={`/teams/${team.id}`} style={{ display: "block" }}>
    <HStack spacing="3">
      <Avatar boxSize="10" name={team.name} color="gray.500" bg="gray.300" />
      <Box>
        <Text fontSize="sm" fontWeight="semibold">
          {team.name}
        </Text>
        <MemberCount count={team.members.length} />
      </Box>
    </HStack>
  </Link>
);
