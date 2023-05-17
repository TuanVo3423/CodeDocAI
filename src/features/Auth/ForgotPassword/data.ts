import {
  schema_confirm_password,
  schema_email_required,
  schema_string,
  schema_string_required,
} from '@/form/schema';
import { UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';

export const handleSubmitForgotPasswordForm = async ({
  values,
  form,
}: {
  values: IDefaultValueForgotPassword;
  form: UseFormReturn<any>;
}) => {
  const { setValue } = form;
  const { step } = values;

  if (step === 'forgotPasswordForm') {
    setValue('step', 'forgotPasswordVerifyMail');
    return;
  }

  if (step === 'forgotPasswordVerifyMail') {
    setValue('step', 'resetPassword');
    return;
  }

  if (step === 'resetPassword') {
    console.log('value: ', values);
    return;
  }
};

export interface IDefaultValueForgotPassword {
  email: string;
  password: string;
  confirmPassword: string;
  step: string;
}

export const DEFAULT_VALUE_FORGOT_PASSWORD: IDefaultValueForgotPassword = {
  step: 'forgotPasswordForm',
  email: '',
  password: '',
  confirmPassword: '',
};

export const schema_forgot_password = Yup.object({
  email: schema_string.when('step', {
    is: (step: string) => step === 'forgotPasswordForm',
    then: () => schema_email_required,
  }),
  password: schema_string.when('step', {
    is: (step: string) => step === 'resetPassword',
    then: () => schema_string_required,
  }),
  confirmPassword: schema_string.when('step', {
    is: (step: string) => step === 'resetPassword',
    then: () => schema_confirm_password,
  }),
});
