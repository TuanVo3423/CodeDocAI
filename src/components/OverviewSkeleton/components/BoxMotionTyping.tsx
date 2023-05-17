import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import lottieFile from '../../../../public/typing.json';
import { variantsItemFadeIn } from '..';

export const BoxMotionTyping = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Box
      w={{ base: '80px', xxxl: '118px' }}
      h={{ base: '50px', xxxl: '75px' }}
      bg="#D9D9D9"
      borderRadius="90px"
      position="absolute"
      top={{ base: '-85px', xxxl: '-130px' }}
      left="100px"
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-11px',
        w: '30px',
        h: '30px',
        background: 'url(/triangle-2.svg) center no-repeat',
        bgSize: 'contain',
        transform: 'rotate(-15deg)',
      }}
      as={motion.div}
      variants={variantsItemFadeIn}
    >
      <Lottie options={defaultOptions} />
    </Box>
  );
};
