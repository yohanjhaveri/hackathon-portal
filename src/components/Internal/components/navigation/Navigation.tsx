import { Stack, VStack } from "@chakra-ui/react";
import { NavigationHeader } from "./NavigationHeader";
import { NavigationBody } from "./NavigationBody";
import { NavigationFooter } from "./NavigationFooter";
import { useData } from "../../../../context/DataContext";

export const Navigation = () => {
  const data = useData();

  return (
    <VStack
      w="260px"
      h="100%"
      pos="fixed"
      justify="space-between"
      align="stretch"
      bg="gray.50"
      borderRightWidth="1px"
      borderRightColor="gray.200"
    >
      <Stack w="100%" spacing="3">
        <NavigationHeader id={data?.participant.id || ""} name={data?.participant.name || ""} />
        <NavigationBody />
      </Stack>
      <NavigationFooter />
    </VStack>
  );
};
