import { INavigationProps, NAVIGATIONS } from '@/layouts/MainLayout/data';
import { AIImage } from '@/ui-kit';
import { Flex, Icon, Skeleton, Stack } from '@chakra-ui/react';

const Nav = ({
  navigation,
  isActive,
}: {
  navigation: INavigationProps;
  isActive: boolean;
}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      gap={2}
      fontWeight="medium"
      p="7px"
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
      <Icon as={navigation.icon} w="11px" h="11px" />
      <Skeleton
        height="5.74px"
        w="100%"
        borderRadius="6"
        startColor={isActive ? 'text.400' : 'text.500'}
        endColor={isActive ? 'text.400' : 'text.500'}
      />
    </Flex>
  );
};

export const Sidebar = () => {
  return (
    <Stack h="100%" w="100%" bg="text.700" justify="space-between">
      <Stack w="100%" spacing="17px" align="flex-start">
        <AIImage url="/logo-no-bg.svg" h="21px" />

        <Stack spacing={2} w="100%">
          {NAVIGATIONS.map((navigation, idx) => (
            <Nav key={idx} navigation={navigation} isActive={idx === 0} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
