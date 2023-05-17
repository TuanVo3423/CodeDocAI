import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import {
  DEFAULT_VALUE_FORGOT_PASSWORD,
  IDefaultValueForgotPassword,
  handleSubmitForgotPasswordForm,
  schema_forgot_password,
} from './data';
import {
  ForgotPasswordForm,
  ForgotPasswordVerifyMail,
  ResetYourPassword,
} from './components';
import { Box } from '@chakra-ui/react';

export function ForgotPassword() {
  const form = useForm({
    resolver: yupResolver(schema_forgot_password),
    defaultValues: DEFAULT_VALUE_FORGOT_PASSWORD,
    mode: 'all',
  });
  const { handleSubmit, control } = form;
  const step = useWatch({
    control,
    name: 'step',
  });
  const onSubmit = async (values: IDefaultValueForgotPassword) => {
    handleSubmitForgotPasswordForm({ values, form });
  };

  const renderStep = () => {
    switch (step) {
      case 'forgotPasswordForm': {
        return <ForgotPasswordForm form={form} />;
      }
      case 'forgotPasswordVerifyMail': {
        return <ForgotPasswordVerifyMail form={form} />;
      }
      case 'resetPassword': {
        return <ResetYourPassword form={form} />;
      }
    }
  };
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      id="form-forgot-password"
      h="100%"
    >
      {renderStep()}
    </Box>
  );
}
