import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Layout } from '../components';
import { AIText } from '@/ui-kit';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useDragDrop } from './hook';

const Column = dynamic(() => import('./components/Column'), {
  ssr: false,
});

export const ProjectBoards = () => {
  const { t } = useTranslation();
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  const { state, onDragEnd } = useDragDrop();

  return (
    <Layout>
      <AIText fontStyle="italic" color="text.400" mb="14px">
        {t(
          'track_your_current_work_in_process_items_and_upcoming_project_milestones'
        )}
      </AIText>

      <DragDropContext onDragEnd={onDragEnd}>
        <Flex flexDir="column" height="calc(100vh - 186px)" w="full">
          {winReady ? (
            <Flex justify="center" gap="20px" h="100%">
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => state.tasks[taskId]
                );

                return <Column column={column} tasks={tasks} key={column.id} />;
              })}
            </Flex>
          ) : null}
        </Flex>
      </DragDropContext>
    </Layout>
  );
};
