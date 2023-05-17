import { UseFormReturn, useWatch } from 'react-hook-form';
import { Left, Right } from './components';
import { Layout } from '../components';
import axios from 'axios';

interface IStepAskProjectNameProps {
  form: UseFormReturn<any>;
}

export const StepAskProjectName = ({ form }: IStepAskProjectNameProps) => {
  const { control } = form;

  const projectName = useWatch({
    control,
    name: 'projectName',
  });

  return (
    <Layout>
      <Left form={form} />
      {/* <Right projectName={projectName} /> */}
    </Layout>
  );
};
