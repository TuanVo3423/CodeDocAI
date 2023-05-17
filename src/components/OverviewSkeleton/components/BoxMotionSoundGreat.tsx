import { AIAvatar, AIButton, AIImage } from '@/ui-kit';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const transition = {
  type: 'spring',
  stiffness: 50,
  bounce: 0.25,
  delay: 1,
  duration: 0.6,
};

const variant = {
  open: {
    x: '0',
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  closed: {
    x: '200px',
    opacity: 0,
  },
};

const variantButton = {
  open: {
    x: '0',
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  closed: {
    x: '500px',
    opacity: 0,
  },
};

const variantAvatar = {
  open: {
    // display: 'block',
    width: '100%',
    height: '100%',
    opacity: 1,
    transition: {
      ...transition,
      delay: 2,
    },
  },
  closed: {
    // display: 'none',
    width: '0%',
    height: '0%',
    opacity: 0,
  },
};

export const BoxMotionSoundGreat = ({
  project_name,
}: {
  project_name: string;
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      w="fit-content"
      h="75px"
      position="absolute"
      top={{ base: '-80px', xxxl: '-100px' }}
      left="220px"
      gap="11px"
    >
      <Box
        as={motion.div}
        variants={variant}
        animate={project_name ? 'open' : 'closed'}
        initial="closed"
      >
        <AIImage
          url="/arrow-sound-great.svg"
          w={{ base: '100px', xxxl: '118px' }}
          h={{ base: '95px', xxxl: '127px' }}
          mt="25px"
        />
      </Box>

      <Box
        as={motion.div}
        variants={variantButton}
        animate={project_name ? 'open' : 'closed'}
        initial="closed"
      >
        <AIButton
          bg="sec.4"
          borderRadius="100px"
          color="text.0"
          h={{ base: '50px', xxxl: '64px' }}
          w="fit-content"
          minW="185px"
          fontSize="xl"
        >
          <Flex align="center" gap="10px">
            <Box
              as={motion.div}
              variants={variantAvatar}
              animate={project_name ? 'open' : 'closed'}
              initial="closed"
            >
              <AIAvatar
                url="/default-avatar.svg"
                avatarProps={{
                  bg: '#FFE17C url(/default-avatar.svg)',
                  objectFit: 'contain',
                }}
                wAvatar={{ base: '30px', xxxl: '40px' }}
                hAvatar={{ base: '30px', xxxl: '40px' }}
              />
            </Box>
            {t('sound_great')}
          </Flex>
        </AIButton>
      </Box>
    </Flex>
  );
};
