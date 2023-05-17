import { IssueIcon, PlusIcon, Priority2Icon } from '@/icons';
import { AIAvatar, AIBox, AIText } from '@/ui-kit';
import { Box, Flex, Icon, Stack, useDisclosure } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useTranslation } from 'next-i18next';
import { UserStoryModal } from './UserStoryModal';

interface IProps {
  tasks: {
    id: number;
    content: string;
    description: string;
  }[];
  column: {
    id: string;
    title: string;
    taskIds: number[];
  };
}

const TaskItem = ({ draggableProvided, draggableSnapshot, task }: any) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        ref={draggableProvided.innerRef}
        {...draggableProvided.dragHandleProps}
        {...draggableProvided.draggableProps}
      >
        <Flex
          onClick={onOpen}
          w="100%"
          mb="6px"
          bg="text.600"
          zIndex={1}
          borderRadius="6"
          border="1px solid"
          borderColor="text.500"
          backdropFilter="blur(3px)"
          direction="column"
          boxShadow={
            draggableSnapshot.isDragging
              ? '0 5px 10px rgba(0, 0, 0, 0.6)'
              : 'unset'
          }
          transform={
            draggableSnapshot.isDragging ? 'rotate(-10deg)' : 'rotate(0deg)'
          }
        >
          <Stack
            spacing={2.5}
            borderBottom="1px solid"
            borderColor="text.700"
            p="10px"
          >
            <Flex
              borderRadius="4"
              bg="text.800"
              p="6px"
              w="fit-content"
              gap="4px"
              align="center"
            >
              <Box w="8px" h="8px" borderRadius="full" bg="sec.4" />
              <AIText fontSize="xs">{t('design')}</AIText>
            </Flex>
            <AIText color="text.100">{task.content}</AIText>
          </Stack>

          <Flex p="10px" align="center" justify="space-between">
            <Flex gap="10px" align="center">
              <Box>
                <Icon as={IssueIcon} w="24px" h="24px" />
              </Box>

              <Box>
                <Icon as={Priority2Icon} w="24px" h="24px" />
              </Box>

              <Flex
                justify="center"
                align="center"
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="4"
                w="24px"
                h="24px"
              >
                3
              </Flex>
            </Flex>

            <Flex gap="10px" align="center">
              <AIText fontSize="sx" color="text.300">
                TIS-11
              </AIText>
              <AIAvatar w="30px" h="30px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <UserStoryModal isOpen={isOpen} onClose={onClose} task={task} />
    </>
  );
};

const Column = ({ tasks, column }: IProps) => {
  return (
    <Flex flexDir="column" position="relative" w="100%">
      <AIBox
        bg="text.600"
        p="6px 10px"
        flexDir="row"
        align="center"
        justify="space-between"
        spacing={0}
        mb="10px"
      >
        <AIText fontWeight="bold">
          {column.title}{' '}
          <AIText as="span" color="text.300" fontSize="xs">
            (4)
          </AIText>
        </AIText>

        <Icon as={PlusIcon} w="18px" h="18px" color="text.0" />
      </AIBox>

      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <Flex
            flex={1}
            flexDir="column"
            overflow="auto"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <TaskItem
                    draggableProvided={draggableProvided}
                    draggableSnapshot={draggableSnapshot}
                    task={task}
                  />
                )}
              </Draggable>
            ))}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
