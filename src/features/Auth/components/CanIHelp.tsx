import { WaveFormIcon } from '@/icons';
import { AIImage, AIText } from '@/ui-kit';
import { Flex, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const CanIHelp = () => {
  const { t } = useTranslation();

  return (
    <Flex
      bg="text.500"
      w="100%"
      p="6px 24px 6px 6px"
      borderRadius="6"
      color="text.200"
      align="center"
      justify="space-between"
      gap="10px"
    >
      <AIImage
        url="/logo-bg-green.png"
        w={{ base: '20px', xxxl: '40px' }}
        h={{ base: '20px', xxxl: '40px' }}
      />
      <AIText flex="1">{t('how_can_i_help_you')}</AIText>
      <Icon
        as={WaveFormIcon}
        color="pri.1"
        w={{ base: '16px', xxxl: '24px' }}
        h={{ base: '16px', xxxl: '24px' }}
      />
    </Flex>
  );
};
