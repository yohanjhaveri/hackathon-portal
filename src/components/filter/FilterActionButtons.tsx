import { Button, HStack } from "@chakra-ui/react";

export type FilterActionButtonsProps = {
  isResetDisabled?: boolean;
  onClickReset?: VoidFunction;
  onClickApply?: VoidFunction;
};

export const FilterActionButtons = ({
  isResetDisabled,
  onClickReset,
  onClickApply,
}: FilterActionButtonsProps) => (
  <HStack spacing="2" justify="space-between">
    <Button size="sm" variant="ghost" onClick={onClickReset} isDisabled={isResetDisabled}>
      Reset
    </Button>
    <Button size="sm" colorScheme="brand" onClick={onClickApply}>
      Save
    </Button>
  </HStack>
);
