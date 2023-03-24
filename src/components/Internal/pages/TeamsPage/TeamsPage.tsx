import { Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeadWrapper } from "../../components/reusable/HeadWrapper";
import { useData } from "../../../../context/DataContext";
import { isTeamRegistrationPhaseActive } from "../../../../constants/env";
import { TeamCard } from "./TeamCard";

export const TeamsPage = () => {
  const data = useData();

  return (
    <HeadWrapper title="Team Directory" subtitle="Search and filter through all teams">
      <Grid gap="30px" templateColumns="1fr 1fr 1fr">
        {isTeamRegistrationPhaseActive && (
          <Link to="/create-team">
            <Flex
              justify="center"
              align="center"
              rounded="lg"
              paddingX="4"
              paddingY="8"
              bg="gray.200"
              borderWidth="1px"
              borderColor="gray.300"
              borderStyle="dashed"
              cursor="pointer"
              h="100%"
            >
              <Flex align="center" gap="6px" color="gray.500">
                <Icon as={FaPlus} />
                <Text fontSize="lg" fontWeight="semibold">
                  Create New Team
                </Text>
              </Flex>
            </Flex>
          </Link>
        )}
        {data?.teams?.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </Grid>
    </HeadWrapper>
  );
};
