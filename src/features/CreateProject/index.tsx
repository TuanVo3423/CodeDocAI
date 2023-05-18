import { Box, Flex, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import { StepAskName } from './StepAskName';
import { StepAskProjectName } from './StepAskProjectName';
import { StepUserFlow } from './StepUserFlow';
import { DEFAULT_VALUE, IDefaultValue, handleSubmitForm, schema } from './data';
import { StepDocument } from './StepDocument';
import { AnimatePresence } from 'framer-motion';
import { StepQuestion } from './StepQuestion';
import { StepChooseApp } from './StepChooseApp';
import { StepChooseCategory } from './StepChooseCategory';
import { useMutation } from 'react-query';
import { ISelection, createSelections } from '@/api/selection';
import { useGlobalLoading } from '@/store';
import { StepAskDescription } from './StepAskDescription';

export const CreateProject = () => {
  const toast = useToast();
  // const toggleLoading = useGlobalLoading((state) => state.toggleLoading);
  // const closeLoading = useGlobalLoading((state) => state.closeLoading);

  const handleCreateUserFlow = useMutation(
    async (data: ISelection) => {
      const rest = await createSelections(data);
      return rest.data;
    },
    {
      onSuccess: (data) => {
        setValue('selectionId', data.id);
      },
      onError: (error: any) => {
        toast({
          description: error?.message,
          status: 'error',
        });
      },
      // onSettled: () => {
      //   closeLoading();
      // },
    }
  );

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUE,
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = form;

  const step = useWatch({
    control,
    name: 'step',
  });

  const onSubmit = async (values: IDefaultValue) => {
    await handleSubmitForm({
      values,
      form,
      mutate: handleCreateUserFlow,
      // toggleLoading,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 'askName':
        return <StepAskName form={form} key="askName" />;

      case 'askProjectName':
        return <StepAskProjectName form={form} key="askProjectName" />;

      case 'askDescription':
        return <StepAskDescription form={form} key="askDescription" />;

      case 'chooseCategory':
        return <StepChooseCategory form={form} key="chooseCategory" />;

      case 'chooseApp':
        return <StepChooseApp form={form} key="chooseApp" />;

      case 'answerQuestion':
        return (
          <StepQuestion
            form={form}
            key="answerQuestion"
            handleSubmit={handleSubmit(onSubmit)}
            loading={handleCreateUserFlow.isLoading}
          />
        );

      // case 'userFlow':
      //   return <StepUserFlow form={form} key="userFlow" />;

      case 'document':
        return <StepDocument form={form} key="document" />;

      default:
        break;
    }
  };

  const checkKeyDown = (e: any) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <Flex h="100vh">
      <Box
        as="form"
        h="calc(100vh + 80px)"
        w="100vw"
        onSubmit={handleSubmit(onSubmit)}
        id="form-create-project"
        onKeyDown={(e: any) => checkKeyDown(e)}
      >
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </Box>
    </Flex>
  );
};
