import { GridItem } from '@chakra-ui/react';

export const RightWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <GridItem
      borderRadius="20px 20px 20px 80px"
      bg="text.0"
      p="34px"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: '37%',
        right: '-37%',
        w: '100%',
        h: '250px',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%)',
        zIndex: '2',
        transform: 'rotate(270deg)',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        w: '100%',
        h: '150px',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%)',
        zIndex: '2',
      }}
    >
      {/* <Flex gap="4px" justify="flex-end">
        <Box w="50px" h="5px" bg="pri.1" borderRadius="30px" />
        <Box w="50px" h="5px" bg="text.50" borderRadius="30px" />
        <Box w="50px" h="5px" bg="text.50" borderRadius="30px" />
        <Box w="50px" h="5px" bg="text.50" borderRadius="30px" />
        <Box w="50px" h="5px" bg="text.50" borderRadius="30px" />
      </Flex> */}

      {children}
    </GridItem>
  );
};
