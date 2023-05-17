import { AIAvatar, AIBox, AITableTd, AITableTh } from '@/ui-kit';
import { Table, TableContainer, Tbody, Thead, Tr } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BoxHeading } from '../../components';

const data = [
  {
    date: 'Dec 4, 2019 21:42',
    history: 'Update US - Sign up for new account',
  },
  {
    date: 'Dec 7, 2019 23:26',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: '15 minutes ago',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: 'Dec 7, 2019 23:26',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: 'Dec 7, 2019 23:26',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: '2 months ago',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: '2 months ago',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: '2 months ago',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
  {
    date: '2 months ago',
    history:
      'Ensure that the interface is intuitive, easy to use, and accessible to all users',
  },
];

export const HistoricalSystem = () => {
  const { t } = useTranslation();

  return (
    <AIBox h="100%" maxH={{ base: '321px', xxxl: '487px', '4xl': '100%' }}>
      <BoxHeading title="historical_system" isBeta />

      <TableContainer h="100%">
        <Table variant="simple">
          <Thead>
            <Tr
              sx={{
                'th:first-child': { p: '0px !important' },
                th: { borderTop: '1px solid', borderColor: 'text.500' },
              }}
            >
              <AITableTh>{t('date')}</AITableTh>
              <AITableTh>{t('history')}</AITableTh>
              <AITableTh justify="flex-end">{t('by')}</AITableTh>
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
                <AITableTd p="0px !important" value={item.date} maxW="80px" />

                <AITableTd justify="center" value={item.history} />
                <AITableTd justify="flex-end">
                  <AIAvatar wAvatar="24px" hAvatar="24px" />
                </AITableTd>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AIBox>
  );
};
