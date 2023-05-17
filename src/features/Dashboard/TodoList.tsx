import { PriorityIcon } from '@/icons';
import { AIStatus, AITableTd, AITableTh } from '@/ui-kit';
import {
  Icon,
  Radio,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Layout } from './components';

const data = [
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'done',
    story_points: 3,
    priority: 3,
    checked: true,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'done',
    story_points: 3,
    priority: 3,
    checked: true,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'done',
    story_points: 3,
    priority: 3,
    checked: true,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'doing',
    story_points: 3,
    priority: 3,
    checked: false,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'doing',
    story_points: 3,
    priority: 3,
    checked: false,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'doing',
    story_points: 3,
    priority: 3,
    checked: false,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'pending',
    story_points: 3,
    priority: 3,
    checked: false,
  },
  {
    todo: 'Drag & Drop: When Sync is finished during drag & drop, will show on dashboard',
    status: 'pending',
    story_points: 3,
    priority: 3,
    checked: false,
  },
];

export const TodoList = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <AITableTh thProps={{ w: '100px' }}>{t('order')}</AITableTh>
              <AITableTh>{t('id')}</AITableTh>
              <AITableTh>{t('to_do')} (10)</AITableTh>
              <AITableTh justify="center">{t('status')}</AITableTh>
              <AITableTh justify="center">{t('story_points')}</AITableTh>
              <AITableTh justify="center">{t('priority')}</AITableTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => (
              <Tr key={idx}>
                <AITableTd tdProps={{ paddingLeft: '35px !important' }}>
                  {idx + 1}
                </AITableTd>
                <AITableTd>ID-1234</AITableTd>
                <AITableTd
                  p="0px !important"
                  color={item.checked ? 'text.300' : 'text.100'}
                  textDecoration={item.checked ? 'line-through' : 'none'}
                  value={item.todo}
                  maxW="500px"
                >
                  <Radio isChecked={item.checked} />
                </AITableTd>
                <AITableTd justify="center">
                  <AIStatus status={item.status} />
                </AITableTd>
                <AITableTd justify="center">{item.story_points}</AITableTd>
                <AITableTd justify="center">
                  <Icon
                    as={PriorityIcon}
                    w="20px"
                    h="20px"
                    sx={{ 'path:not(:first-child)': { fill: 'text.100' } }}
                  />
                </AITableTd>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};
