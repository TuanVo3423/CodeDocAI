import { BackTo } from '@/components';
import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Box, BoxProps, Flex, Icon } from '@chakra-ui/react';
import mermaid from 'mermaid';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';

import { useEffect } from 'react';

interface IUserFlowWithMermaidProps extends BoxProps {
  form: UseFormReturn<any>;
  handleGenerateDocument: any;
}

const MermaidWrapper = ({ chartCode }: { chartCode: string }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
    });
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chartCode}</div>;
};

const Flow = ({ form, handleGenerateDocument }: IUserFlowWithMermaidProps) => {
  const { t } = useTranslation();
  const { setValue, control } = form;

  const userFlow = useWatch({
    name: 'userFlow',
    control,
  });

  return (
    <Box w="100%" p={{ base: '24px', xxxl: '40px' }} h="100vh">
      <Flex justify="space-between" align="center">
        <AIImage url="/logo-bg-gradient.svg" h={{ base: '56px' }} />
        <AIButton
          maxW="200px"
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
          onClick={handleGenerateDocument}
        >
          {t('confirm')}
        </AIButton>
      </Flex>

      <BackTo
        action={() => setValue('step', 'answerQuestion')}
        m={{ base: '16px 0px', xxxl: '30px 0px 16px 0px' }}
        w="fit-content"
      >
        <AIText color="text.200" fontSize="xs">
          {t('back')}
        </AIText>
      </BackTo>

      <Flex justify="space-between" align="center">
        <AIText fontSize="2xl">{t('user_flows')}</AIText>
      </Flex>

      <Box w="100%" h="80%" overflow="auto">
        <MermaidWrapper chartCode={userFlow} />
      </Box>
    </Box>
  );
};

export const UserFlowWithMermaid = ({
  form,
  handleGenerateDocument,
}: IUserFlowWithMermaidProps) => {
  return <Flow form={form} handleGenerateDocument={handleGenerateDocument} />;
};
