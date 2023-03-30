import { Badge } from "@chakra-ui/react";

export type StatusProps = {
  text: string;
  color: "green" | "red";
};

export const Status = ({ text, color }: StatusProps) => (
  <Badge colorScheme={color} color={`${color}.500`} borderWidth="1px" borderColor={`${color}.300`}>
    {text}
  </Badge>
);
