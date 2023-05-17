import { UseFormReturn, useWatch } from 'react-hook-form';
import { Left, Right } from './components';
import { Layout } from '../components';

interface IStepAskDescriptionProps {
  form: UseFormReturn<any>;
}

export const StepAskDescription = ({ form }: IStepAskDescriptionProps) => {
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
