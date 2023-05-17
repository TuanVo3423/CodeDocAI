import { PriorityIcon } from '@/icons';
import { AIBox, AIStatus, AITableTd, AITableTh } from '@/ui-kit';
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
import { BoxHeading } from '../../components';

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
    <AIBox h="100%" maxH={{ base: '344px', xxxl: '468px' }}>
      <BoxHeading title="to_do_list_of_the_day" isBeta />

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr
              sx={{
                'th:first-child': { p: '0px !important' },
                th: {
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  borderColor: 'text.500',
                },
              }}
            >
              <AITableTh>{t('to_do')} (10)</AITableTh>
              <AITableTh justify="center">{t('status')}</AITableTh>
              <AITableTh justify="center">{t('story_points')}</AITableTh>
              <AITableTh justify="center">{t('priority')}</AITableTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => (
              <Tr
                key={idx}
                sx={{
                  'td:first-child': { p: '0px !important' },
                  td: { fontSize: 'xs' },
                }}
              >
                <AITableTd
                  p="0px !important"
                  color={item.checked ? 'text.300' : 'text.100'}
                  textDecoration={item.checked ? 'line-through' : 'none'}
                  value={item.todo}
                >
                  <Radio isChecked={item.checked} />
                </AITableTd>
                <AITableTd justify="center">
                  <AIStatus
                    status={item.status}
                    sx={{ p: { fontSize: 'xs' } }}
                  />
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
    </AIBox>
  );
};
