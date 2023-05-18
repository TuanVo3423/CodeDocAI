import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Box, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Welcome = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Box position="relative" bg="text.800">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        w="100%"
        h="100%"
        bg="url(/bg-welcome-gradient.png) center no-repeat"
        bgSize="cover"
        zIndex={0}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        w="100%"
        h="100%"
        bg="url(/bg-welcome-line.png) center no-repeat"
        bgSize="cover"
        zIndex={0}
      />

      <Stack
        justify="center"
        align="center"
        textAlign="center"
        spacing={10}
        w="100%"
        h="100%"
        minH="100vh"
        position="inherit"
      >
        {/* <AIImage url="/logo-bg-gradient.svg" h={{ base: '140px' }} /> */}

        <Stack spacing={5}>
          <AIText fontSize="4xl" color="text.0" fontWeight="bold">
            {t('welcome_to_sparkplan_ai')}
          </AIText>
          <AIText
            color="text.300"
            zIndex="1"
            dangerouslySetInnerHTML={{
              __html: t(
                'accelerate_your_project_management_from_months_to_minutes'
              ),
            }}
          />
        </Stack>

        <AIButton
          maxW="200px"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
          onClick={() => router.push('/create-project')}
        >
          {t('continue')}
        </AIButton>
      </Stack>
    </Box>
  );
};
