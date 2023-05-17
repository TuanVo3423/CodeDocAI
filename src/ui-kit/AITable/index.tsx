import {
  Flex,
  FlexProps,
  TableCellProps,
  TableColumnHeaderProps,
  Td,
  Text,
  Th,
} from '@chakra-ui/react';

interface IAITableThProps extends FlexProps {
  thProps?: TableColumnHeaderProps;
}

export const AITableTh = ({ children, thProps, ...rest }: IAITableThProps) => {
  return (
    <Th color="text.100" {...thProps}>
      <Flex w="100%" maxW="350px" {...rest}>
        {children}
      </Flex>
    </Th>
  );
};

interface IAITableTdProps extends FlexProps {
  value?: string;
  tdProps?: TableCellProps;
}

export const AITableTd = ({
  children,
  value,
  tdProps,
  ...rest
}: IAITableTdProps) => {
  return (
    <Td {...tdProps}>
      <Flex gap="10px" w="100%" maxW="350px" {...rest}>
        {children}
        {value && (
          <Text
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            w="100%"
          >
            {value}
          </Text>
        )}
      </Flex>
    </Td>
  );
};
