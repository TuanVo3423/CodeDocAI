import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Children, Header, Sidebar } from './components';
import { BoxMotionSoundGreat } from './components/BoxMotionSoundGreat';
import { BoxMotionTyping } from './components/BoxMotionTyping';

interface IOverviewSkeletonProps extends GridProps {
  size?: string;
  variants?: any;
  initial?: string;
  animate?: string;
  project_name: string;
}

export const variantsItem = {
  hidden: { opacity: 0, y: -200, x: 200, z: 200 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    z: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      bounce: 0.25,
    },
  },
};

export const variantsItemFadeIn = {
  hidden: { opacity: 0, scale: 0.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      bounce: 0.25,
    },
  },
};

export const OverviewSkeleton = ({
  size = 'md',
  project_name,
  ...rest
}: IOverviewSkeletonProps) => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"`}
      gridTemplateRows={size === 'md' ? '77px 1fr' : '40px 1fr'}
      gridTemplateColumns={size === 'md' ? '240px 1fr' : '120px 1fr'}
      h="100%"
      w="100%"
      bg="text.800"
      borderRadius="20px"
      zIndex="1"
      position="inherit"
      // overflow="hidden"
      {...rest}
    >
      <GridItem
        area={'nav'}
        w={size === 'md' ? '240px' : '120px'}
        p={size === 'md' ? '24px' : '10px'}
        bg="text.700"
        border="0.75px solid"
        borderColor="text.600"
        borderRadius="20px 0px 0px 20px"
      >
        <Sidebar size={size} />
      </GridItem>

      <GridItem
        area={'header'}
        p={size === 'md' ? '0px 40px' : '0px 15px'}
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="text.600"
        as={motion.div}
        variants={variantsItem}
      >
        <Header size={size} project_name={project_name} />
      </GridItem>

      <GridItem w="100%" h="100%" area={'main'}>
        <Children size={size} />
      </GridItem>

      {!project_name && <BoxMotionTyping />}

      {size !== 'sm' && <BoxMotionSoundGreat project_name={project_name} />}
    </Grid>
  );
};
