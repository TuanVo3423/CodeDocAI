import { OverviewSkeleton } from '@/components';
import { Box } from '@chakra-ui/react';
import { RightWrapper } from '../../components';
import { motion } from 'framer-motion';
import { fadeIn } from '@/motion';
import useIntro from '@/hook/useIntro';

export const Right = ({ projectName }: { projectName: string }) => {
  const showAnimation = useIntro();

  return (
    <RightWrapper>
      <Box
        w="1440px"
        h="810px"
        position="absolute"
        top={{ base: '150px', xxxl: '271px' }}
        left={{ base: '50px', xxxl: '80px' }}
        borderRadius="20px"
        zIndex="normal"
      >
        <OverviewSkeleton
          as={motion.div}
          variants={fadeIn({
            hidden: {
              opacity: 1,
              y: 900,
            },
            show: { y: 0 },
            transition: {
              type: 'spring',
              stiffness: 50,
              bounce: 0.25,
              staggerChildren: 0.4,
              delayChildren: 0.8,
            },
          })}
          initial={showAnimation ? 'hidden' : ''}
          animate="show"
          project_name={projectName}
        />

        <Box
          as={motion.div}
          variants={fadeIn({
            hidden: {
              opacity: 1,
              y: 900,
            },
            show: { y: 0 },
            transition: {
              type: 'spring',
              delay: 0.5,
              duration: 0.2,
              stiffness: 50,
              bounce: 0.25,
            },
          })}
          initial={showAnimation ? 'hidden' : ''}
          animate="show"
          borderRadius="20px"
          w="506px"
          h="679px"
          bg="linear-gradient(180deg, #A898FF 0%, #5781FF 100%)"
          position="absolute"
          top={{ base: '20px' }}
          left={{ base: '-22px' }}
        />
      </Box>
    </RightWrapper>
  );
};
