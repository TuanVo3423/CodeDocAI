import { AuthLayout } from '@/layouts';
import { Box, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SignInForm } from './components';
import {
  DEFAULT_VALUE_SIGN_IN,
  IDefaultValueSignIn,
  schema_sign_in,
} from './data';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { ISignIn, signIn } from '@/api/auth';
import { LocalStorage } from '@/services/localStorage';
import { PROJECT_AUTH_TOKEN } from '@/constants';
import { useAuth } from '@/store';

export const SignIn = () => {
  const router = useRouter();
  const toast = useToast();
  const setProfile = useAuth((state) => state.setProfile);

  const { mutateAsync: handleSignIn, isLoading } = useMutation(
    async (data: ISignIn) => {
      const rest = await signIn(data);
      return rest;
      // return {};
    },
    {
      onSuccess: (data) => {
        // LocalStorage.set(
        //   PROJECT_AUTH_TOKEN,
        //   data
        //   //    {
        //   //   // @ts-ignore
        //   //   id: 21,
        //   //   name: 'Quy Tan',
        //   //   email: 'tanquyluong@gmail.com',
        //   //   password:
        //   //     '$2b$10$SZIvE7JmyZtVecdqFtg6ougBINp1Dqxuhfn9YZbZKwcYdXgh1/99S',
        //   //   createdAt: '2023-04-17T07:56:12.648Z',
        //   // }
        // );
        LocalStorage.set(PROJECT_AUTH_TOKEN, data);
        // LocalStorage.set('welcome', true);
        setProfile(data);
        // LocalStorage.set('welcome', true);
        // setProfile({
        //   data: {
        //     // @ts-ignore
        //     id: 21,
        //     name: 'Quy Tan',
        //     email: 'tanquyluong@gmail.com',
        //     password:
        //       '$2b$10$SZIvE7JmyZtVecdqFtg6ougBINp1Dqxuhfn9YZbZKwcYdXgh1/99S',
        //     createdAt: '2023-04-17T07:56:12.648Z',
        //   },
        //   message: 'login',
        // });
        // console.log('ok');
        router.push('/result');
      },
      onError: (error: any) => {
        console.log(error);
        toast({
          description: error?.message,
          status: 'error',
        });
      },
    }
  );

  const form = useForm({
    resolver: yupResolver(schema_sign_in),
    defaultValues: DEFAULT_VALUE_SIGN_IN,
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = async (values: IDefaultValueSignIn) => {
    handleSignIn(values);
  };

  return (
    <AuthLayout>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        id="form-sign-in"
        h="100%"
      >
        <SignInForm form={form} isLoading={isLoading} />
      </Box>
    </AuthLayout>
  );
};
