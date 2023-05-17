import { generateUserflow } from '@/api/selection';
import { movePage } from '@/motion';
import { useGlobalLoading } from '@/store';
import { Flex, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { Right, UserFlowWithReactFlow } from './components';

interface IStepUserFlowProps {
  form: UseFormReturn<any>;
}

export const StepUserFlow = ({ form }: IStepUserFlowProps) => {
  const toast = useToast();
  const toggleLoading = useGlobalLoading((state) => state.toggleLoading);
  const closeLoading = useGlobalLoading((state) => state.closeLoading);

  const { control, setValue } = form;

  const selectionId = useWatch({
    control,
    name: 'selectionId',
  });

  const userFlow = useWatch({
    control,
    name: 'userFlow',
  });

  const handleGenerateUserflow = useCallback(async () => {
    toggleLoading('Generating user flows for your project...');
    try {
      const rest = await generateUserflow(selectionId);

      setValue('userFlow', rest.data);
    } catch (error: any) {
      toast({
        description: error?.message,
        status: 'error',
      });
    } finally {
      closeLoading();
    }
  }, [closeLoading, selectionId, setValue, toast, toggleLoading]);

  useEffect(() => {
    !userFlow && handleGenerateUserflow();
  }, []);

  return (
    <Flex as={motion.div} {...movePage} w="100%" h="100%" minH="100vh">
      <UserFlowWithReactFlow form={form} />
      <Right form={form} />
    </Flex>
  );
};
