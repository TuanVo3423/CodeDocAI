import { DotsThreeIcon, EyeIcon, IssueIcon, Priority2Icon } from '@/icons';
import { ArrowDownIcon } from '@/icons/arrow-down';
import { AIAvatar, AIImage, AIText } from '@/ui-kit';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Flex,
  Box,
  Icon,
  Divider,
  CloseButton,
  Stack,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuGroup,
  MenuItem,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { fakeData } from '../data';
interface TaskProps {
  id: number;
  content: string;
  description: string;
}

interface IUserStoryModal {
  task: TaskProps;
  isOpen: boolean;
  onClose: () => void;
}

export const UserStoryModal = ({ isOpen, task, onClose }: IUserStoryModal) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1020px">
        <ModalBody borderRadius={12} p="0">
          <Flex>
            <Box flex={6}>
              <Left task={task} />
            </Box>
            <Box flex={4.2}>
              <Right onClose={onClose} />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
interface ILeftModal {
  task: TaskProps;
}
const Left = ({ task }: ILeftModal) => {
  const { t } = useTranslation();
  return (
    <Box h="full" bg="text.600">
      <Flex p="14px 24px" gap="14px" align="center">
        <Flex gap="6px" align="center">
          <Icon as={IssueIcon} w="24px" h="24px" />
          <AIText fontSize="sx" color="text.300">
            TIS-11
          </AIText>
        </Flex>

        <Flex
          justify="center"
          align="center"
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="4"
          w="24px"
          h="24px"
        >
          <AIText color="text.100">3</AIText>
        </Flex>
      </Flex>

      <Divider borderColor="#52525B" />

      <Stack gap="18px" p="18px 24px">
        <Flex flexDir="column" gap="10px">
          <AIText
            fontSize="2xl"
            lineHeight="140%"
            fontWeight="bold"
            color="text.50"
          >
            {task.content}
          </AIText>
          <Flex gap="6px">
            {fakeData.titleOptions.map((titleOption, idx) => {
              return (
                <Flex
                  key={idx}
                  borderRadius="4px"
                  bg="text.500"
                  gap="6px"
                  p="3px 10px"
                  alignItems="center"
                  cursor="pointer"
                >
                  <Icon as={titleOption.icon} w="16px" h="16px" />
                  <AIText fontSize="xs" lineHeight="160%" color="text.100">
                    {titleOption.title}
                  </AIText>
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Stack gap="8px">
          <AIText
            fontWeight="bold"
            lineHeight="160%"
            color="text.50"
            fontSize="md"
          >
            {t('acceptance_criteria')}
          </AIText>
          <AIText noOfLines={4} lineHeight="160%" color="text.200">
            {task.description}
          </AIText>
        </Stack>

        <Stack gap="8px">
          <AIText
            fontWeight="bold"
            lineHeight="160%"
            color="text.50"
            fontSize="md"
          >
            {t('attachments')} (2)
          </AIText>
          <Flex gap="12px">
            {fakeData.attachmentData.map((attachment, idx) => {
              return (
                <Stack key={idx} gap="6px" maxW="140px">
                  <Box w="140px" h="90px" borderRadius="6" bg="text.400">
                    <AIImage url="/attachment.png" w="100%" h="100%" />
                  </Box>

                  <Box>
                    <AIText noOfLines={1} lineHeight="160%" color="text.200">
                      {attachment.title}
                    </AIText>
                    <AIText
                      noOfLines={1}
                      fontSize="xs"
                      lineHeight="160%"
                      color="text.300"
                    >
                      {attachment.time}
                    </AIText>
                  </Box>
                </Stack>
              );
            })}
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};

interface IRightModal {
  onClose: () => void;
}
const Right = ({ onClose }: IRightModal) => {
  const { t } = useTranslation();
  return (
    <Box h="full" bg="text.500">
      <Flex justify="flex-end" p="14px 24px" gap="18px" align="center">
        <Icon as={EyeIcon} w="24px" h="24px" />
        <Icon as={DotsThreeIcon} w="24px" h="24px" />
        <CloseButton w="24px" h="24px" onClick={onClose} />
      </Flex>
      <Divider borderColor="#52525B" />

      <Flex flexDir="column" p="18px 24px" gap="18px">
        <Menu>
          <MenuButton
            p="4px 10px"
            bg="sec.3"
            w="fit-content"
            minH="30px"
            backdropFilter="blur(5px)"
            borderRadius="4px"
            cursor="pointer"
          >
            <HStack gap="6px" justifyContent="center">
              <AIText
                fontSize="sx"
                lineHeight="160%"
                fontWeight="500"
                color="text.900"
              >
                {'Inprogress'}
              </AIText>
              <Icon as={ArrowDownIcon} w="12px" h="12px" />
            </HStack>
          </MenuButton>
          <MenuList p={0} minW="0" w={'108px'}>
            <MenuGroup>
              <MenuItem
                p="4px 10px"
                bg="sec.3"
                w="full"
                h="full"
                backdropFilter="blur(5px)"
                borderRadius="4px"
                cursor="pointer"
              >
                <HStack gap="6px" justifyContent="center">
                  <AIText
                    fontSize="sx"
                    lineHeight="160%"
                    fontWeight="500"
                    color="text.900"
                  >
                    Done
                  </AIText>
                </HStack>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Stack gap="10px">
          {fakeData.assignmentData.map((assigment, idx) => {
            return (
              <Flex key={idx} gap="14px" align="center">
                <Box w="120px">
                  <AIText fontSize="sx" lineHeight="160%" color="text.300">
                    {t(`${assigment.title}`)}
                  </AIText>
                </Box>

                <AIAvatar
                  url={assigment.url}
                  wAvatar="28px"
                  hAvatar="28px"
                  name={assigment.name}
                  nameProps={{ fontSize: 'xs' }}
                />
              </Flex>
            );
          })}

          <Flex gap="14px" align="center">
            <Box w="120px">
              <AIText fontSize="sx" lineHeight="160%" color="text.300">
                {t('priority')}
              </AIText>
            </Box>

            <Flex gap="8px" justify="center" align="center">
              <Box>
                <Icon as={Priority2Icon} w="20px" h="20px" />
              </Box>
              <AIText fontSize="xs" lineHeight="160%" color="text.100">
                Major
              </AIText>
            </Flex>
          </Flex>
          <Flex gap="14px" align="center">
            <Box w="120px">
              <AIText fontSize="sx" lineHeight="160%" color="text.300">
                {t('label')}
              </AIText>
            </Box>

            <Flex gap="8px" justify="center" align="center">
              <Flex
                borderRadius="4"
                bg="text.800"
                p="4px 8px"
                w="fit-content"
                gap="4px"
                align="center"
              >
                <Box w="8px" h="8px" borderRadius="full" bg="sec.3" />
                <AIText color="text.100" fontSize="xs" lineHeight="160%">
                  {t('development')}
                </AIText>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
