import { Button, ButtonProps } from '@chakra-ui/react';

interface IAIButtonProps extends ButtonProps {}

export const AIButton = ({ children, ...props }: IAIButtonProps) => {
  return (
    <Button size={{ base: 'sm' }} {...props}>
      {children}
    </Button>
  );
};
