import { IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";

export type ActionButtonProps = Omit<IconButtonProps, "aria-label"> & {
  icon: React.ReactElement;
  colorScheme: string;
  label: string;
  onClick: () => void;
};

export const ActionButton = ({ icon, colorScheme, onClick, label, ...rest }: ActionButtonProps) => (
  <Tooltip label={label}>
    <IconButton
      icon={icon}
      variant="ghost"
      color={`${colorScheme}.500`}
      bg={`${colorScheme}.50`}
      borderWidth="1px"
      borderColor={`${colorScheme}.100`}
      _hover={{ bg: `${colorScheme}.100` }}
      _focus={{ bg: `${colorScheme}.100` }}
      _active={{ bg: `${colorScheme}.100` }}
      onClick={onClick}
      aria-label={label}
      {...rest}
    />
  </Tooltip>
);
