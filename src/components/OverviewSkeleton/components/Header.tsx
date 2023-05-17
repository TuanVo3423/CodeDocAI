import { NotificationOutlineIcon, SearchOutlineIcon } from '@/icons';
import { AIBoxIcon, AIButton } from '@/ui-kit';
import { Box, Flex, Icon, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

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

export const Header = ({
  size,
  project_name,
}: {
  size: string;
  project_name: string;
}) => {
  const { t } = useTranslation();

  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Flex position="relative" overflow="hidden">
        <Box
          fontSize={size === 'sm' ? 'lg' : '3xxl'}
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
          h={size === 'md' ? '37.5px' : '22px'}
          w={size === 'md' ? '365px' : '150px'}
          borderRadius="6"
          startColor={'text.400'}
          endColor={'text.400'}
          as={motion.li}
          animate={project_name ? 'closed' : 'open'}
          variants={variant}
          zIndex="normal"
          transform="rotate(180deg)"
          opacity="1"
        />
      </Flex>

      <Flex gap="11px">
        <Flex gap={size === 'md' ? '10px' : '3.5px'} align="center">
          <Skeleton
            h={size === 'md' ? '40px' : '16.5px'}
            w={size === 'md' ? '40px' : '16.5px'}
            borderRadius="full"
            startColor={'text.400'}
            endColor={'text.400'}
          />
          <Skeleton
            h={size === 'md' ? '21px' : '8.25px'}
            w={size === 'md' ? '76px' : '37.8px'}
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
