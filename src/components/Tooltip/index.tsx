import { OpenFolderIcon, QuestionIcon } from '@/icons';
import { AIImage, AIText } from '@/ui-kit';
import { Flex, Icon, IconProps, Stack, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export const TooltipWhatIsCoin = ({ iconProps }: { iconProps?: IconProps }) => {
  const { t } = useTranslation();

  return (
    <Tooltip
      hasArrow
      closeDelay={700}
      label={
        <Stack
          p="18px"
          spacing={5}
          borderRadius="6px"
          align="center"
          maxW="260px"
        >
          <AIImage url="/coin.svg" alt="coin" w="50px" h="50px" />

          <Stack spacing={2.5} textAlign="center">
            <AIText color="text.900" fontSize="md" fontWeight="bold">
              {t('what_is_coin')}
            </AIText>
            <AIText color="text.300" fontSize="xs">
              {t(
                'to_edit_and_export_the_document_youll_need_coins_beginning_you_have3_coins_for3_uses_if_you_need_more_lets_subscribe'
              )}
            </AIText>
          </Stack>

          <Flex align="center" justify="space-between" fontSize="sm" w="100%">
            <AIText color="sec.4">{t('subscribe')}</AIText>
            <AIText color="text.300">{t('got_it')}</AIText>
          </Flex>
        </Stack>
      }
      bg="text.0"
      color="black"
      filter="drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.15))"
    >
      <Icon
        as={QuestionIcon}
        w="20px"
        h="20px"
        color="text.900"
        {...iconProps}
      />
    </Tooltip>
  );
};

export const TooltipDocumentRecently = () => {
  const { t } = useTranslation();

  return (
    <Tooltip
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
        },
      }}
      label={
        <Stack
          spacing={3}
          textAlign="center"
          w="100%"
          p="18px"
          maxW="170px"
          alignItems="center"
        >
          <Icon as={OpenFolderIcon} w="40px" h="40px" />
          <AIText w="100%" color="text.50" lineHeight="160%">
            {t('view_your_recently_created_document')}
          </AIText>
        </Stack>
      }
      isOpen
      placement="right"
      hasArrow
      bg="text.400"
      borderRadius="6"
    >
      <Flex
        justify="center"
        align="center"
        position="relative"
        w="30px"
        h="10px"
      >
        <DotNew />
      </Flex>
    </Tooltip>
  );
};

export const DotNew = () => {
  return (
    <Flex justify="center" align="center" position="relative" w="30px" h="10px">
      <Flex
        bg="rgba(87, 203, 37, .15)"
        minW="33px"
        h="33px"
        borderRadius="full"
        justify="center"
        align="center"
        as={motion.div}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 0.6,
            opacity: { delay: 1 },
          },
        }}
      />
      <Flex
        bg="rgba(87, 203, 37, .3)"
        minW="21px"
        h="21px"
        borderRadius="full"
        justify="center"
        align="center"
        position="absolute"
        top="-5.5px"
        left="4.5px"
        as={motion.div}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 0.6,
            opacity: { delay: 1 },
          },
        }}
      />
      <Flex
        bg="rgba(87, 203, 37, 1)"
        minW="9px"
        h="9px"
        borderRadius="full"
        position="absolute"
        top="0.5px"
        left="10.5px"
        as={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 0.6,
            opacity: { delay: 1 },
          },
        }}
      />
    </Flex>
  );
};
