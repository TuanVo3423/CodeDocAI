import { Flex, FlexProps, Stack, StackProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface AIBoxProps extends FlexProps {
  children: React.ReactNode;
}

export const AIBoxIcon = ({ children, ...rest }: AIBoxProps) => {
  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      justify="center"
      align="center"
      minW={{ base: '32px' }}
      h={{ base: '32px' }}
      bg="text.500"
      border="1px solid"
      borderColor="rgba(95, 93, 105, 0.4)"
      borderRadius="6"
      cursor="pointer"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export const AIBox = ({ children, ...rest }: StackProps) => {
  return (
    <Stack
      spacing={4}
      p={{ base: '18px' }}
      bg="text.700"
      border="1px solid"
      borderColor="text.600"
      borderRadius="6"
      {...rest}
    >
      {children}
    </Stack>
  );
};
