import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@chakra-ui/react";

export type ExternalLinkProps = ButtonProps & {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({ href, children, ...rest }: ExternalLinkProps) => (
  <Link to={href} target="_blank" rel="noreferrer">
    <Button variant="link" size="sm" colorScheme="brand" {...rest}>
      {children}
    </Button>
  </Link>
);
