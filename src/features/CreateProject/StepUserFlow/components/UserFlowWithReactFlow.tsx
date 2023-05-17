import { BackTo } from '@/components';
import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Box, BoxProps, Flex, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';
import ReactFlow, { Controls, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import { useFlow } from '../hook';

interface IUserFlowWithReactFlowProps extends BoxProps {
  form: UseFormReturn<any>;
}

const proOptions = { hideAttribution: true };

const Flow = ({ form }: IUserFlowWithReactFlowProps) => {
  const { t } = useTranslation();
  const { setValue } = form;

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onConnectStart,
    onConnectEnd,
    reactFlowWrapper,
  } = useFlow();

  return (
    <Box w="100%" p={{ base: '24px', xxxl: '40px' }}>
      <Flex justify="space-between" align="center">
        <AIImage url="/logo-bg-gradient.svg" h={{ base: '56px' }} />
        <AIButton
          maxW="200px"
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
          onClick={() => setValue('step', 'document')}
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

      <Box w="100%" h="80%" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          fitView
          panOnScroll
          selectionOnDrag
          panOnDrag={[1, 2]}
          proOptions={proOptions}
          attributionPosition="bottom-left"
        >
          <Controls />
        </ReactFlow>
      </Box>
    </Box>
  );
};

export const UserFlowWithReactFlow = ({
  form,
}: IUserFlowWithReactFlowProps) => {
  return (
    <ReactFlowProvider>
      <Flow form={form} />
    </ReactFlowProvider>
  );
};
