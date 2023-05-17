import { UseFormReturn } from 'react-hook-form';
import { Left, Right } from './components';
import { Layout } from '../components';

interface IStepAskNameProps {
  form: UseFormReturn<any>;
}

export const StepAskName = ({ form }: IStepAskNameProps) => {
  return (
    <Layout>
      <Left form={form} />
      {/* <Right /> */}
    </Layout>
  );
};
