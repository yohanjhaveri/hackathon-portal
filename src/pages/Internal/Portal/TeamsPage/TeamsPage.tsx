import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { GridWrapper } from "../../../../components/wrappers/GridWrapper";
import { HeadWrapper } from "../../../../components/wrappers/HeadWrapper";
import { NewWrapper } from "../../../../components/wrappers/NewWrapper";
import { useData } from "../../../../context";
import { isTeamRegistrationPhaseActive } from "../../../../env";
import { TeamCard } from "./TeamCard";

export const TeamsPage = () => {
  const data = useData();

  return (
    <HeadWrapper title="Team Directory" subtitle="Search and filter through all teams">
      <GridWrapper columns={3} spacing="8">
        {isTeamRegistrationPhaseActive && (
          <Link to="/create-team">
            <NewWrapper minH="165px">
              <HStack spacing="2" color="gray.500">
                <Icon as={FaPlus} />
                <Text fontSize="lg" fontWeight="semibold">
                  Create New Team
                </Text>
              </HStack>
            </NewWrapper>
          </Link>
        )}
        {data?.teams?.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </GridWrapper>
    </HeadWrapper>
  );
};
