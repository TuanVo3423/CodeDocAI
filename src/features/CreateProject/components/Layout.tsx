import { movePage } from '@/motion';
import { Grid, GridProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ILayoutProps extends GridProps {}

export const Layout = ({ children, ...rest }: ILayoutProps) => {
  return (
    <Grid
      as={motion.div}
      {...movePage}
      // templateColumns={{ base: '1fr 1fr' }}
      p="16px"
      bg="url(/bg-gradient.png) top left no-repeat"
      bgSize="contain"
      w="100%"
      h="100%"
      minH="100vh"
      {...rest}
    >
      {children}
    </Grid>
  );
};
