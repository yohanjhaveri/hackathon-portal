import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";

export type HeadWrapperProps = BoxProps & {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const HeadWrapper = ({ title, subtitle, children, ...rest }: HeadWrapperProps) => (
  <Box padding="50px" {...rest}>
    <Box mb="30px">
      <Heading size="xs">{title}</Heading>
      <Text color="muted">{subtitle}</Text>
    </Box>
    {children}
  </Box>
);
