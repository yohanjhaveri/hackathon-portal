import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@chakra-ui/react";

export type DetailsCardLinkedInProps = {
  link: string;
};

export const DetailsCardLinkedIn = ({ link }: DetailsCardLinkedInProps) => (
  <Tooltip label="View participant's linkedin profile">
    <Link to={link} target="_blank">
      <IconButton
        h="auto"
        p="0"
        mb="1"
        minW="0"
        borderRadius="0"
        fontSize="xl"
        icon={<FaLinkedin />}
        variant="ghost"
        aria-label="LinkedIn Link"
        color="blue.500"
      />
    </Link>
  </Tooltip>
);
