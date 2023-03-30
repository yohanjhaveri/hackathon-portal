import { HStack, Icon, Text } from "@chakra-ui/react";

export type AttributeProps = {
  icon: React.FunctionComponent;
  value: string;
};

export const Attribute = ({ icon, value }: AttributeProps) => (
  <HStack fontSize="sm">
    <Icon color="brand.500" as={icon} />
    <Text color="gray.600" fontWeight="medium">
      {value}
    </Text>
  </HStack>
);
