import { useBriefs } from '@/api/brief';
import { AIButton } from '@/ui-kit';
import {
  Box,
  Flex,
  Heading,
  SkeletonText,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';

const TabLeftTitle = [
  {
    content: 'Documents',
  },
  // {
  //     content: "Todos",
  //     icon: AddIcon,
  // },
];
const TabTopTitle = [
  {
    content: 'Vision and Goals',
  },
  // {
  //   content: 'Board',
  // },
  // {
  //   content: 'Backlog',
  // },
  // {
  //   content: 'Epic',
  // },
];

const DocumentPage = () => {
  const [brief, setBrief] = useState(undefined);

  const router = useRouter();
  const documentId = Number(router.query.documentId);

  const { data: briefs, isLoading: isBriefsLoading } = useBriefs();
  //   const { userStories, isUserStoriesLoading } =
  //     useUserStoriesOfSelection(documentId);

  //   // console.log(userStories);
  //   const {
  //     userStories: userStoriesStore,
  //     setUserStories,
  //     flag,
  //     setFlag,
  //   } = useUserStoriesStore();

  useEffect(() => {
    if (brief === undefined && briefs) {
      console.log(
        'briefs',
        briefs,
        briefs?.data.find((brief: any) => brief.id === documentId)
      );
      setBrief(
        briefs?.data.find((brief: any) => brief.selectionId === documentId)
      );
    }
  }, [brief, briefs, documentId]);

  return (
    <Flex pos="relative" minH="100vh" w="100vw">
      <Layout>
        <Flex
          bg="#1a202c"
          color="white"
          overflow="auto"
          p="0 30px"
          gap={5}
          flex={1}
          w="full"
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

            {/* <ThemeToggle /> */}
          </Box>
          <Tabs isFitted variant="soft-rounded">
            <TabList>
              {TabTopTitle.map((title) => (
                <Tab
                  rounded="0"
                  _selected={{
                    color: 'white',
                    bg: 'blackAlpha.600',
                  }}
                  key={title.content}
                  p="15px"
                >
                  {title.content}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel mt={4}>
                {isBriefsLoading ? (
                  <SkeletonText
                    noOfLines={20}
                    spacing="4"
                    // skeletonHeight="2"
                  />
                ) : (
                  <ReactMarkdown className="markdown">
                    {brief?.answer}
                  </ReactMarkdown>
                )}
              </TabPanel>
              <TabPanel></TabPanel>

              <TabPanel>{/* <BacklogTab /> */}</TabPanel>

              <TabPanel>{/* <EpicTab /> */}</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Layout>
    </Flex>
  );
};

export default DocumentPage;
