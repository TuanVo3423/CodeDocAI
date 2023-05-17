import { AIBox, AIText } from '@/ui-kit';
import { BoxHeading } from '../../components';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const CalendarTracking = () => {
  const { t } = useTranslation();
  return (
    <AIBox h="100%">
      <BoxHeading title="calendar_tracking" isBeta />

      <Flex
        w="100%"
        h="100%"
        bg="url(/coming-soon-bg.png) center no-repeat"
        bgSize="contain"
        justify="center"
        align="center"
        position="relative"
      >
        <Box
          w="100%"
          h="100%"
          bg="linear-gradient(180deg, rgba(33, 32, 40, 0) 0%, #212028 100%)"
          position="absolute"
          top="0"
        />
        <AIText
          color="text.400"
          fontSize="lg"
          fontWeight="bold"
          zIndex="1"
          pt="100px"
        >
          {t('coming_soon')}
        </AIText>
      </Flex>
    </AIBox>
  );
};
