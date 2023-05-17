import { INavigationProps, NAVIGATIONS } from '@/layouts/MainLayout/data';
import { AIImage } from '@/ui-kit';
import { Flex, Icon, Skeleton, Stack } from '@chakra-ui/react';
import { variantsItem } from '..';
import { motion } from 'framer-motion';

const Nav = ({
  navigation,
  isActive,
  size,
}: {
  navigation: INavigationProps;
  isActive: boolean;
  size: string;
}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      gap={2}
      fontWeight="medium"
      p={size === 'md' ? '10px' : '6px'}
      borderRadius="6"
      color={isActive ? 'text.50' : 'text.200'}
      bg={isActive ? 'text.600' : 'transparent'}
      outline={isActive ? '1px solid' : 'none'}
      outlineColor={isActive ? 'text.500' : 'none'}
      outlineOffset="0"
      _hover={{
        bg: 'text.600',
        outline: '1px solid',
        outlineColor: 'text.500',
        color: 'text.50',
      }}
    >
      <Icon
        as={navigation.icon}
        w={size === 'md' ? '20px' : '9px'}
        h={size === 'md' ? '20px' : '9px'}
      />
      <Skeleton
        height={size === 'md' ? '9px' : '4.5px'}
        w="100%"
        borderRadius="6"
        startColor={isActive ? 'text.400' : 'text.500'}
        endColor={isActive ? 'text.400' : 'text.500'}
      />
    </Flex>
  );
};

export const Sidebar = ({ size }: { size: string }) => {
  return (
    <Stack h="100%" w="100%" bg="text.700" justify="space-between">
      <Stack
        w="100%"
        spacing={size === 'md' ? 8 : 3.5}
        align="flex-start"
        as={motion.div}
        variants={variantsItem}
      >
        <AIImage url="/logo-no-bg.svg" h={size === 'md' ? '40px' : '16px'} />

        <Stack spacing={2} w="100%">
          {NAVIGATIONS.map((navigation, idx) => (
            <Nav
              key={idx}
              navigation={navigation}
              isActive={idx === 0}
              size={size}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
