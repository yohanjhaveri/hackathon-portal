import { Button, HStack } from "@chakra-ui/react";

export type TeamFormButtonsProps = {
  edit?: boolean;
  loading: boolean;
  onClickCancel: () => void;
  onClickCreate: () => void;
};

export const TeamFormButtons = ({ edit, loading, onClickCancel, onClickCreate }: TeamFormButtonsProps) => (
  <HStack p="4" justify="flex-end" spacing="2">
    <Button variant="ghost" isDisabled={loading} onClick={onClickCancel}>
      Cancel
    </Button>
    <Button variant="primary" isLoading={loading} onClick={onClickCreate}>
      {edit ? "Update" : "Create"}
    </Button>
  </HStack>
);
