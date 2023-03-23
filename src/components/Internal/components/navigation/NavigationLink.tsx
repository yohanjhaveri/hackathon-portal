import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type NavigationLinkProps = {
  icon: IconType;
  link: string;
  children: React.ReactNode;
};

export const NavigationLink = ({ icon, link, children }: NavigationLinkProps) => {
  return (
    <Box borderRadius="md" _hover={{ bg: "gray.100" }}>
      <Link to={link} style={{ display: "block", padding: "6px 8px" }}>
        <HStack justify="space-between">
          <HStack as="a" spacing="3">
            <Icon as={icon} color="brand.500" />
            <Text as="span" fontSize="sm" lineHeight="1.25rem" fontWeight="500">
              {children}
            </Text>
          </HStack>
        </HStack>
      </Link>
    </Box>
  );
};
