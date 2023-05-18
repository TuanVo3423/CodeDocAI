import { UseFormReturn } from 'react-hook-form';
import { Left, Right } from './components';
import { Layout } from '../components';
import LayoutNav from '@/pages/result/components/layout';
interface IStepAskNameProps {
  form: UseFormReturn<any>;
}

export const StepAskName = ({ form }: IStepAskNameProps) => {
  return (
    <LayoutNav>
      <Layout>
        <Left form={form} />
        {/* <Right /> */}
      </Layout>
    </LayoutNav>
  );
};
