import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";

type NavigationLinkProps = {
  icon: IconType;
  link: string;
  children: React.ReactNode;
};

export const NavigationLink = ({ icon, link, children }: NavigationLinkProps) => (
  <Box borderRadius="md" _hover={{ bg: "gray.100" }}>
    <Link to={link}>
      <HStack justify="space-between" px="2" py="1.5">
        <HStack spacing="3">
          <Icon as={icon} color="brand.500" />
          <Text fontSize="sm" lineHeight="5" fontWeight="medium">
            {children}
          </Text>
        </HStack>
      </HStack>
    </Link>
  </Box>
);
