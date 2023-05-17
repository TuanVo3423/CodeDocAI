import { UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';
import _flatten from 'lodash/flatten';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorage } from '@/services/localStorage';
export interface IAnswer {
  id: number;
  name: string;
  description: string;
  type: string;
  questionId: number;
}

export interface IDefaultValue {
  userFlow: string;
  username: string;
  projectName: string;
  description: string;
  categoryId: number | null;
  appId: number | null;
  answers: {
    [key: number]: IAnswer | IAnswer[];
  };
  questionStep: number;
  selectionId: number | null;
  document: string;
  step: string;
}

export const DEFAULT_VALUE: IDefaultValue = {
  userFlow: '',
  username: '',
  projectName: '',
  description: '',
  answers: {},
  categoryId: null,
  appId: null,
  questionStep: 0,
  selectionId: null,
  document: '',
  step: 'askName',
};

export const schema = Yup.object({
  // username: schema_string.when('step', {
  //   is: (step: number) => step === 1,
  //   then: () => schema_string_required,
  // }),
  // project_name: schema_string.when('step', {
  //   is: (step: number) => step === 2,
  //   then: () => schema_string_required,
  // }),
  // description: schema_string.when('step', {
  //   is: (step: number) => step === 3,
  //   then: () => schema_string_required,
  // }),
});

export const handleSubmitForm = async ({
  values,
  form,
  mutate,
}: // toggleLoading,
{
  values: IDefaultValue;
  form: UseFormReturn<any>;
  mutate: any;
  // toggleLoading: (data: string) => void;
  // router: NextRouter;
}) => {
  const { setValue } = form;
  const { step } = values;

  const data = {
    username: values.username,
    appId: values.appId,
    selectedOptions: _flatten(transformAnswersToIds(values.answers)),
    projectName: values.projectName,
    description: values.description,
  };

  if (step === 'askName') {
    setValue('step', 'askProjectName');
  }

  if (step === 'askProjectName') {
    setValue('step', 'askDescription');
  }

  if (step === 'askDescription') {
    setValue('step', 'chooseCategory');
  }

  if (step === 'chooseCategory') {
    setValue('step', 'chooseApp');
  }

  if (step === 'chooseApp') {
    setValue('step', 'answerQuestion');
    setValue('questionStep', 0);
  }

  if (step === 'answerQuestion') {
    const guestId = uuidv4();
    // toggleLoading('Generating user flows for your project...');

    await mutate.mutateAsync({ ...data, guestId });

    LocalStorage.set('guestId', guestId);
    setValue('step', 'userFlow');
  }
};

const transformAnswersToIds = (answers: {
  [key: number]: IAnswer | IAnswer[];
}) => {
  return Object.values(answers).map((item) => {
    if (Array.isArray(item)) {
      return item.map((i) => i.id);
    } else {
      return item.id;
    }
  });
};
