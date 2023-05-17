import { AIImage } from '@/ui-kit';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { RightWrapper } from '../../components';

// export const variantsItem = {
//   hidden: { y: 300 },
//   show: {
//     y: 0,
//     opacity: [1, 0],
//   },
// };

export const Right = () => {
  return (
    <RightWrapper>
      <Flex
        justify="center"
        align="center"
        w="100%"
        h="100%"
        borderRadius="20px"
        zIndex="normal"
      >
        <Flex
          justify="center"
          align="center"
          as={motion.div}
          w="240px"
          h="240px"
          bg="pri.2"
          borderRadius="full"
          // variants={fadeIn({
          //   hidden: {
          //     scale: 0.1,
          //   },
          //   show: { scale: 1 },
          //   transition: {
          //     staggerChildren: 0.6,
          //     delayChildren: 0.8,
          //   },
          // })}
          // initial="hidden"
          // animate="show"
          // position="relative"
          // overflow="hidden"
        >
          {/* <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-1.svg" h="140px" />
          </Box>
          <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-2.svg" h="140px" />
          </Box>
          <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-3.svg" h="140px" />
          </Box>
          <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-4.svg" h="140px" />
          </Box>
          <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-5.svg" h="140px" />
          </Box>
          <Box as={motion.div} variants={variantsItem} position="absolute">
            <AIImage url="/emoji-welcome/Emoji-6.svg" h="140px" />
          </Box> */}
          <Box
            as={motion.div}
            // variants={variantsItem}
            position="absolute"
            opacity="1 !important"
          >
            <AIImage url="/emoji-welcome/Emoji-7.svg" h="140px" />
          </Box>
        </Flex>
      </Flex>
    </RightWrapper>
  );
};
