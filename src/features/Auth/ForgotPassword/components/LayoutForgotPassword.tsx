import { AIImage } from '@/ui-kit';
import { Flex, FlexProps } from '@chakra-ui/react';

interface ILayoutForgotPasswordProps extends FlexProps {}

export const LayoutForgotPassword = ({
  children,
  ...rest
}: ILayoutForgotPasswordProps) => {
  return (
    <Flex
      position="relative"
      minH="100vh"
      flexDir="column"
      align="center"
      gap={{ base: '24px', xxxl: '40px' }}
      bg="white"
      p={{ base: '24px', xxxl: '50px' }}
      {...rest}
    >
      <Flex align="center" gap={2}>
        <AIImage url="/logo_with_span_text.png" w="184px" h="45px" />
      </Flex>

      <Flex flex="1" align='center'>
        <Flex
          p={{ base: '20px 40px', xxxl: '40px 60px' }}
          w="512px"
          h="100%"
          justify="center"
          borderRadius="10"
          boxShadow="0px 20px 80px rgba(0, 0, 0, 0.1)"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
