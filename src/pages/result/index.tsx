import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Show,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { SkeletonText } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useGetDocument } from '@/api/selection';
import { useBrief, useBriefs } from '@/api/brief';
import Layout from './components/layout';
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
  const [isActive, setIsActive] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const { data: briefs, isError, isLoading } = useBriefs();

  console.log('briefs : ', briefs);

  return (
    <Fragment>
      <Layout>
        <Flex h="100vh">
          <Show above="sm">
            {/* column 1 */}
            <Flex
              bg="#090c10"
              color="white"
              w={['0', '200px', '250px', '350px']}
              gap={5}
              px={[0, 5]}
              flexDir="column"
            >
              <VStack
                rounded="md"
                border="1px"
                borderColor="white"
                alignItems="flex-start"
                gap={2}
                display={['none', 'block']}
                p={['0 0', '20px 20px']}
                mt="80px"
              >
                <Text fontSize={'xl'} fontWeight="bold">
                  Welcome to CodeDocAI
                </Text>
              </VStack>
              <Flex gap={3} flexDirection="column">
                {TabLeftTitle.map((item, _index) => (
                  <Box
                    display="flex"
                    gap="10px"
                    alignItems="center"
                    cursor="pointer"
                    key={item.content}
                    bg={isActive === _index ? 'whiteAlpha.200' : 'transparent'}
                    _hover={{
                      bg: 'whiteAlpha.200',
                    }}
                    p={4}
                    rounded="lg"
                    onClick={() => setIsActive(_index)}
                  >
                    <Text>{item.content}</Text>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Show>
          {/* <Show below="md"> */}
          {/* </Show> */}

          {/* column 2 */}
          <Flex
            bg="#1a202c"
            color="white"
            h="100vh"
            overflow="auto"
            p="0 30px"
            gap={5}
            flex={1}
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading mt="20px" as="h1" size="5xl" noOfLines={1}>
                Overview
              </Heading>
              <Show below="md"></Show>
              {/* <ThemeToggle /> */}
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
                    No.
                  </Th>
                  <Th color="white" fontSize="medium">
                    ID
                  </Th>
                  <Th color="white" fontSize="medium">
                    DOCUMENTS
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {briefs?.data === undefined && isLoading ? (
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
                    {briefs.data.length === 0 ? (
                      <Text>You have no documents yet!</Text>
                    ) : (
                      briefs.data.map((brief: any, _index: number) => (
                        <Tr key={brief.id}>
                          <Td minW={['80px', '120px']}>{_index + 1}</Td>
                          <Td minW={['80px', '120px']}>{brief.id}</Td>
                          <Td>
                            <Button
                              colorScheme={'blue'}
                              as={Link}
                              href={`/result/documents/${brief.selectionId}`}
                            >
                              Watch document
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
        </Flex>
      </Layout>
    </Fragment>
  );
}

export default Result;
