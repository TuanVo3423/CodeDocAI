import { EyeIcon } from '@/icons';
import { AIText } from '@/ui-kit';
import { Flex, Icon, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};
const paths = [
  {
    title: 'Home',
    path: 'create-project',
  },
  {
    title: 'profile',
    path: 'result',
  },
  // {
  //     path : ''
  // },
  // {
  //     path : 'create-project'
  // },
];
export default function Layout({ children }: Props) {
  const router = useRouter();
  const handleRouting = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <Flex>
      {children}
      <Flex>
        <Flex p={2} bg="white" w="100vw" pos="absolute" bottom={0} left={0}>
          {paths.map((item, idx) => (
            <Stack
              _active={{
                color: 'pri.1',
              }}
              color="black"
              onClick={() => handleRouting(item.path)}
              justify="center"
              align="center"
              w="50%"
            >
              <Icon as={EyeIcon} />
              <AIText>{item.title}</AIText>
            </Stack>
          ))}

          {/* <Stack justify="center" align="center" w="25%">
            <Icon as={EyeIcon} />
            <AIText>Create Project</AIText>
          </Stack>
          <Stack justify="center" align="center" w="25%">
            <Icon as={EyeIcon} />
            <AIText>Create Project</AIText>
          </Stack>
          <Stack justify="center" align="center" w="25%">
            <Icon as={EyeIcon} />
            <AIText>Create Project</AIText>
          </Stack> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
