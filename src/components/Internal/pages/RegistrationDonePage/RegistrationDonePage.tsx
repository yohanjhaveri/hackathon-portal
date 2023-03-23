import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { unique } from "../../../../config";
import { FlowWrapper } from "../../components/reusable/FlowWrapper";

export const RegistrationDonePage = () => (
  <FlowWrapper>
    <Flex h="100vh" justify="center" align="center">
      <Box w="600px" p="30px">
        <Heading size="sm" color="brand.500" fontWeight="extrabold" mb="12px">
          Thank you for registering!
        </Heading>
        <Text fontSize="lg" color="muted">
          You have successfully submitted your registration form for {unique.eventName}.
        </Text>
      </Box>
    </Flex>
  </FlowWrapper>
);
