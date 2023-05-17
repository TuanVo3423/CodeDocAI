import { AuthLayout } from '@/layouts';
import { Box, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import {
  SignUpConfirmEmail,
  SignUpVerifyCode,
  SignUpConfirmPassword,
} from './components';
import { DEFAULT_VALUE, IDefaultValue, handleSubmitForm, schema } from './data';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { ISignUp, signUp } from '@/api/auth';
import { useTranslation } from 'next-i18next';

export const SignUp = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const toast = useToast();

  const { mutateAsync: handleSignUp, isLoading } = useMutation(
    async (data: ISignUp) => {
      await signUp(data);
    },
    {
      onSuccess: () => {
        toast({
          description: t('register_successfully'),
          status: 'success',
        });
        router.push('/auth/sign-in');
      },
      onError: (error: any) => {
        toast({
          description: error.message,
          status: 'error',
        });
      },
    }
  );

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUE,
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = form;

  const step = useWatch({
    control,
    name: 'step',
  });

  const onSubmit = async (values: IDefaultValue) => {
    await handleSubmitForm({ values, form, mutate: handleSignUp });
  };

  const renderStep = () => {
    switch (step) {
      case 'confirmEmail':
        return <SignUpConfirmEmail form={form} />;

      case 'verifyCode':
        return <SignUpVerifyCode form={form} />;

      case 'confirmPassword':
        return <SignUpConfirmPassword form={form} isLoading={isLoading} />;

      default:
        break;
    }
  };

  return (
    <AuthLayout>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        id="form-sign-up"
        h="100%"
      >
        {renderStep()}
      </Box>
    </AuthLayout>
  );
};
