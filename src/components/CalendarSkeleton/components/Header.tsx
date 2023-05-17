import { NotificationOutlineIcon, SearchOutlineIcon } from '@/icons';
import { AIBoxIcon, AIButton } from '@/ui-kit';
import { Box, Flex, Icon, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

const variant = {
  open: { x: '0' },
  closed: {
    x: '500px',
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

export const Header = ({ project_name }: { project_name: string }) => {
  const { t } = useTranslation();

  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Flex position="relative" overflow="hidden">
        <Box
          fontSize={'lg'}
          color="text.0"
          fontWeight="bold"
          flex="1"
          position="absolute"
          left="0"
          // zIndex="-1"
        >
          {project_name}
        </Box>
        <Skeleton
          h="28px"
          w="200px"
          borderRadius="6"
          startColor={'text.50'}
          endColor={'text.50'}
          as={motion.li}
          animate={project_name ? 'closed' : 'open'}
          variants={variant}
        />
      </Flex>

      <Flex gap="11px">
        <Flex gap="5px" align="center">
          <Skeleton
            h="20px"
            w="20px"
            borderRadius="full"
            startColor={'text.400'}
            endColor={'text.400'}
          />
          <Skeleton
            h="10px"
            w="40px"
            borderRadius="6"
            startColor={'text.50'}
            endColor={'text.50'}
          />
        </Flex>

        <Flex gap="5.25px" align="center">
          <AIButton w="44px" h="16px" fontSize="6px" borderRadius="4px">
            {t('upgrade')}
          </AIButton>
          <AIBoxIcon minW="18.75px" h="18.75px">
            <Icon as={SearchOutlineIcon} w="9px" h="9px" />
          </AIBoxIcon>
          <AIBoxIcon minW="18.75px" h="18.75px">
            <Icon as={NotificationOutlineIcon} w="9px" h="9px" />
          </AIBoxIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};
