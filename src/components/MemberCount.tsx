import { HiUsers } from "react-icons/hi";
import { HStack, Icon, Text } from "@chakra-ui/react";

export type MemberCountProps = {
  count: number;
};

export const MemberCount = ({ count }: MemberCountProps) => (
  <HStack spacing="1" fontSize="sm" color="gray.600">
    <Icon as={HiUsers} />
    <Text>
      {count} member{count !== 1 && "s"}
    </Text>
  </HStack>
);
