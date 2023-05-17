import { ChevronRight } from '@/icons';
import { AIHeading2, AILink, AIText } from '@/ui-kit';
import { Flex, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const BoxHeading = ({
  title,
  href,
  isBeta = false,
}: {
  title: string;
  href?: string;
  isBeta?: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <Flex align="center" justify="space-between">
      <AIHeading2>{t(title)}</AIHeading2>
      {href && (
        <AILink href={href} color="pri.1" fontSize="sm">
          {t('view')}
          <Icon as={ChevronRight} w="20px" h="20px" />
        </AILink>
      )}
      {isBeta && (
        <Flex
          bg="sec.4"
          borderRadius="4"
          w="42px"
          h="23px"
          justify="center"
          align="center"
        >
          <AIText color="text.0" fontSize="xxs" textTransform="uppercase">
            {t('beta')}
          </AIText>
        </Flex>
      )}
    </Flex>
  );
};
