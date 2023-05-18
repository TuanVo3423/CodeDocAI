import { useGetAuth } from '@/api/auth';
import Navigation from '@/components/Navigation';
import { PROJECT_AUTH_TOKEN } from '@/constants';
import { UserIcon } from '@/icons';
import { LocalStorage } from '@/services/localStorage';
import { useAuth } from '@/store';
import { AIButton, AIImage } from '@/ui-kit';
import { Box, Center, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
  const router = useRouter();

  const { data: auth, isLoading } = useGetAuth();
  const clearProfile = useAuth((state) => state.clearProfile);

  const handleLogout = () => {
    LocalStorage.remove(PROJECT_AUTH_TOKEN);
    clearProfile();
  };

  useEffect(() => {
    console.log({ auth });
  }, [auth]);

  return (
    <>
      <Box px={2} py={8}>
        <VStack spacing={4}>
          <Center flexDirection={'column'}>
            <Image
              src={'/avatar-user.png'}
              width={75}
              height={75}
              alt={'avatar-user'}
            />
            <Text mt={1}>{auth.data?.name}</Text>
          </Center>

          <HStack width="100%" justifyContent={'center'}>
            <AIButton
              width="50%"
              variant={'primary-fill-while'}
              onClick={handleLogout}
            >
              Log out
            </AIButton>
          </HStack>
        </VStack>
      </Box>
      <Navigation />
    </>
  );
};

export default Profile;
