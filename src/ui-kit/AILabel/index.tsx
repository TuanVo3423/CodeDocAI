import { FormLabel, FormLabelProps, Badge } from '@chakra-ui/react';
import React from 'react';

type AILabelProps = {
  children: React.ReactNode;
  isRequired?: boolean;
} & FormLabelProps;

export const AILabel = ({
  children,
  isRequired = false,
  ...rest
}: AILabelProps) => {
  return (
    <FormLabel color="text.300" fontWeight="bold" fontSize="xs" {...rest}>
      {children}{' '}
      {isRequired && (
        <Badge bg="transparent" color="error.500" p="0">
          *
        </Badge>
      )}
    </FormLabel>
  );
};
