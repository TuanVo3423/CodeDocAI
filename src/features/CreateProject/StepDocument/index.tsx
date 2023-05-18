import { Box, Flex, useToast } from '@chakra-ui/react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { Header, Left } from './components';
import EditorDocument from './components/EditorDocument';
import { motion } from 'framer-motion';
import { movePage } from '@/motion';
import { useGlobalLoading } from '@/store';
import { useCallback, useEffect } from 'react';
import { generateDocument, useGetDocument } from '@/api/selection';

interface IStepStepDocumentProps {
  form: UseFormReturn<any>;
}

export const StepDocument = ({ form }: IStepStepDocumentProps) => {
  const toast = useToast();
  const toggleLoading = useGlobalLoading((state) => state.toggleLoading);
  const closeLoading = useGlobalLoading((state) => state.closeLoading);

  const { control, setValue } = form;

  const selectionId = useWatch({
    control,
    name: 'selectionId',
  });

  const { data: document, refetch: refetchGetDocument } =
    useGetDocument(selectionId);

  const handleGenerateDocument = useCallback(async () => {
    toggleLoading('Generating document for your project...');
    try {
      await generateDocument(selectionId).then((res) => console.log(res));
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
    handleGenerateDocument();
  }, []);

  useEffect(() => {
    if (document?.data) {
      setValue('document', document.data);
      return;
    }
    const timer = setInterval(() => refetchGetDocument(), 30 * 1000); // call again 2 minutes

    return () => {
      clearInterval(timer);
    };
  }, [document?.data, refetchGetDocument]);

  return (
    <Box
      bg="text.0"
      w="100%"
      h="100%"
      minH="100vh"
      as={motion.div}
      {...movePage}
    >
      <Header form={form} />

      <Flex w="100%" h="100%">
        {/* <Left form={form} /> */}

        <EditorDocument form={form} />
      </Flex>
    </Box>
  );
};
