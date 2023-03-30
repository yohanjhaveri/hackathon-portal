import { Link } from "react-router-dom";
import { Button, Text, VStack } from "@chakra-ui/react";

export type EmptyListProps = {
  text: string;
  buttonLink?: string;
  buttonText?: string;
  buttonIcon?: React.ReactElement;
};

export const EmptyList = ({ text, buttonText, buttonLink, buttonIcon }: EmptyListProps) => (
  <VStack
    borderRadius="md"
    borderWidth="1px"
    borderColor="gray.200"
    bg="gray.50"
    py="50px"
    w="100%"
    spacing="4"
  >
    <Text color="muted" fontWeight="medium" maxW="300px" textAlign="center">
      {text}
    </Text>
    {buttonText && buttonLink && (
      <Link to={buttonLink}>
        <Button leftIcon={buttonIcon} colorScheme="brand" size="sm">
          {buttonText}
        </Button>
      </Link>
    )}
  </VStack>
);
