import { FiCheck, FiX } from "react-icons/fi";
import { HStack } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";

export type InvitesCardResponseButtonsProps = {
  labelAccept: string;
  labelReject: string;
  onClickAccept: () => void;
  onClickReject: () => void;
};

export const ResponseButtons = ({
  labelAccept,
  labelReject,
  onClickAccept,
  onClickReject,
}: InvitesCardResponseButtonsProps) => (
  <HStack spacing="1">
    <ActionButton
      size="sm"
      icon={<FiCheck fontSize="1rem" />}
      colorScheme="green"
      label={labelAccept}
      onClick={onClickAccept}
    />
    <ActionButton
      size="sm"
      icon={<FiX fontSize="1rem" />}
      colorScheme="red"
      label={labelReject}
      onClick={onClickReject}
    />
  </HStack>
);
