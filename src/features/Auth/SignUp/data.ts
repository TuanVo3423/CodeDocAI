import {
  schema_email_required,
  schema_password_required,
  schema_string,
  schema_string_required,
} from '@/form/schema';
import { LocalStorage } from '@/services/localStorage';
import { UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';

export interface IDefaultValue {
  email: string;
  name: string;
  password: string;
  step: string;
  code: string;
  guestId?: string;
}

export const DEFAULT_VALUE: IDefaultValue = {
  email: '',
  name: '',
  password: '',
  code: '',
  step: 'confirmEmail',
};

export const schema = Yup.object({
  email: schema_string.when('step', {
    is: (step: string) => step === 'confirmEmail' || step === 'confirmPassword',
    then: () => schema_email_required,
  }),
  code: schema_string.when('step', {
    is: (step: string) => step === 'verifyCode',
    then: () => schema_string_required,
  }),
  name: schema_string.when('step', {
    is: (step: string) => step === 'confirmPassword',
    then: () => schema_string_required,
  }),
  password: schema_string.when('step', {
    is: (step: string) => step === 'confirmPassword',
    then: () => schema_password_required,
  }),
});

export const handleSubmitForm = async ({
  values,
  form,
  mutate,
}: {
  values: IDefaultValue;
  form: UseFormReturn<any>;
  mutate: any;
}) => {
  const { setValue } = form;
  const { step } = values;

  if (step === 'confirmEmail') {
    setValue('step', 'confirmPassword');
    return;
  }

  if (step === 'verifyCode') {
    setValue('step', 'confirmPassword');
    return;
  }

  if (step === 'confirmPassword') {
    await mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      guestId: LocalStorage.get('guestId'),
    });
  }
};
