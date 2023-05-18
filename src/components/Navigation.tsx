import { AttachmentIcon } from '@/icons';
import { AIImage } from '@/ui-kit';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const paths = [
  {
    // title: 'Home',
    icon: './home.svg',
    path: 'result',
  },
  {
    // iconComponent: AttachmentIcon,
    icon: './file-text.svg',
    path: 'create-project',
  },
  {
    // title: 'profile',
    icon: './user.svg',
    path: 'profile',
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
    <Box
      w="100vw"
      py={2}
      bg="white"
      borderTop={'2px solid'}
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
    >
      <Flex>
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
            {item?.icon && (
              <AIImage url={item.icon} alt="coin" w="20px" h="20px" />
            )}
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
    </Box>
  );
};

export default Navigation;
