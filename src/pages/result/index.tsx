import { useGetDocuments } from '@/api/selection';
import {
  Box,
  Button,
  Flex,
  Heading,
  SkeletonText,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from './components/layout';
import { useRouter } from 'next/router';
const TabLeftTitle = [
  {
    content: 'Documents',
  },
  {
    content: 'Logo',
  },
  {
    content: 'SOP & Document',
  },
  {
    content: 'Assistant',
  },
  {
    content: 'BLacklogs',
  },
];
const TabTopTitle = [
  {
    content: 'Vision and Goals',
  },
  {
    content: 'Todos',
  },
  {
    content: 'Project Roadmap',
  },
  {
    content: 'Project Boards',
  },
];

function Result() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const { data: documents, isError, isLoading } = useGetDocuments();

  useEffect(() => {
    console.log({ documents });
  }, [documents]);

  return (
    <Layout>
      <Flex
        bg="#1a202c"
        color="white"
        h="100vh"
        overflow="auto"
        gap={5}
        flex={1}
        flexDirection="column"
        px={6}
        py={4}
      >
        <Box>
          <Heading>Dashboard</Heading>
          <Text color="GrayText">Here you can see your results</Text>
        </Box>
        <Table
          style={{
            borderCollapse: 'separate',
            borderSpacing: '0 1em',
          }}
          variant="simple"
        >
          <Thead>
            <Tr h="100px">
              <Th color="white" fontSize="medium">
                ID
              </Th>
              <Th color="white" fontSize="medium">
                Name
              </Th>
              <Th color="white" fontSize="medium"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {documents?.data === undefined && isLoading ? (
              <>
                <Tr>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                  <Td>
                    <SkeletonText
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </Td>
                </Tr>
              </>
            ) : (
              <>
                {documents.data.length === 0 ? (
                  <Text>You have no documents yet!</Text>
                ) : (
                  documents.data.map((document: any, _index: number) => (
                    <Tr key={document.id}>
                      <Td minW={['80px', '120px']}>{_index + 1}</Td>
                      <Td minW={['80px', '120px']}>{document.projectName}</Td>
                      <Td>
                        <Button
                          colorScheme={'blue'}
                          // as={Link}
                          // href={`/result/documents/${document.selectionId}`}
                          // href={`/result/documents/${document.selectionId}`}
                          onClick={() => {
                            router.push(`/result/documents/${document.id}`);
                          }}
                        >
                          Watch
                        </Button>
                      </Td>
                    </Tr>
                  ))
                )}
              </>
            )}
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  );
}

export default Result;
