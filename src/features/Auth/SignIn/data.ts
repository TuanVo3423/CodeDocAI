import { schema_email_required, schema_password_required } from '@/form/schema';
import * as Yup from 'yup';

export interface IDefaultValueSignIn {
  email: string;
  password: string;
}

export const DEFAULT_VALUE_SIGN_IN: IDefaultValueSignIn = {
  email: '',
  password: '',
};

export const schema_sign_in = Yup.object({
  email: schema_email_required,
  password: schema_password_required,
});
