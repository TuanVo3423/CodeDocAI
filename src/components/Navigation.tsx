import { AIImage } from '@/ui-kit';
import { Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const paths = [
  {
    // title: 'Home',
    icon: './home.svg',
    path: 'create-project',
  },
  {
    // title: 'profile',
    icon: './user.svg',
    path: 'result',
  },
  // {
  //     path : ''
  // },
  // {
  //     path : 'create-project'
  // },
];

const Navigation = () => {
  const router = useRouter();
  const handleRouting = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <Flex>
      <Flex h="40px" p={2} bg="white" w="100vw" pos="fixed" bottom={0} left={0}>
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
            <AIImage url={item.icon} alt="coin" w="20px" h="20px" />
            {/* <Icon as={ArrowIcon} /> */}
            {/* <AIText>{item.title}</AIText> */}
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
  );
};

export default Navigation;
