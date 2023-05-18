import { UseFormReturn, useWatch } from 'react-hook-form';
import { Left, Right } from './components';
import { Layout } from '../components';
import axios from 'axios';
import { useEffect } from 'react';

interface IStepAskProjectNameProps {
  form: UseFormReturn<any>;
}

export const StepAskProjectName = ({ form }: IStepAskProjectNameProps) => {
  const { control } = form;

  const projectName = useWatch({
    control,
    name: 'projectName',
  });
  useEffect(() => {
    fetch('https://api.github.com/repos/tannerlinsley/react-query')
      .then((res) => res.json())
      .then((data) => console.log('data: ', data));
  }, []);

  return (
    <Layout>
      <Left form={form} />
      {/* <Right projectName={projectName} /> */}
    </Layout>
  );
};
