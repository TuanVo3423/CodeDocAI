import { AIText } from '@/ui-kit';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

type Props = {
  children: React.ReactNode;
};

const RightElement = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: '#141318 url(/bg-auth-gradient.png) no-repeat left top',
        backgroundSize: 'cover',
      }}
      borderRadius="20px 20px 20px 80px"
      w="100%"
      p="44px"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          w: '100%',
          h: '100%',
          background: 'url(/bg-auth-element.png) no-repeat center',
          backgroundSize: 'contain',
          zIndex: 0,
        }}
        w="100%"
        h="100%"
        textAlign="center"
        gap={{ base: 5 }}
      >
        <AIText
          color="text.0"
          fontSize={{ base: '4xxl' }}
          maxW="520px"
          sx={{
            '& > strong': {
              color: 'sec.4',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: t('redefining_it_management_with_native_ai'),
          }}
          zIndex="1"
          lineHeight="120%"
          fontWeight="bold"
        />

        <AIText
          color="text.300"
          fontSize={{ base: 'lg' }}
          zIndex="1"
          maxW="430px"
          dangerouslySetInnerHTML={{
            __html: t(
              'accelerate_your_project_management_from_months_to_minutes'
            ),
          }}
        />

        <Flex
          p="12px 22px"
          background="rgba(255, 255, 255, 0.15)"
          backdropFilter="blur(9.10086px)"
          borderRadius="91.0086px"
          fontSize={{ base: 'sm', xxxl: 'lg' }}
          color="sec.3"
          gap="5px"
          align="center"
        >
          🔥 Generate <AIText color="text.0">output ...</AIText>
        </Flex>
      </Flex>
    </Box>
  );
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <Grid
      minH="100vh"
      p={{ base: '16px' }}
      templateColumns={{ base: '1fr' }}
      bg="text.0"
    >
      <Box
        w="100%"
        // p={{ base: '20px 100px', xxxl: '40px 168px' }}
      >
        {children}
        
      </Box>

      {/* <RightElement /> */}
    </Grid>
  );
};
