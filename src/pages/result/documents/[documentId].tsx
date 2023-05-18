import { useBriefs } from '@/api/brief';
import { StepDocument } from '@/features/CreateProject/StepDocument';
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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const form = useForm();

  const {
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = form;

  const router = useRouter();
  const selectionId = Number(router.query.documentId);

  useEffect(() => {
    //   console.log({ selectionId });
    setValue('selectionId', selectionId);
  }, [selectionId]);

  return (
    <Box>
      <StepDocument form={form} />
    </Box>
  );

  // return (
  //   <Flex pos="relative" w="100vw" h="100vh">
  //     {/* <Flex
  //       bg="#090c10"
  //       color="white"
  //       w={['0', '200px', '250px', '350px']}
  //       gap={5}
  //       px={[0, 5]}
  //       flexDir="column"
  //     >
  //       <VStack
  //         rounded="md"
  //         border="1px"
  //         borderColor="white"
  //         alignItems="flex-start"
  //         gap={2}
  //         display={['none', 'block']}
  //         p={['0 0', '20px 20px']}
  //         mt="80px"
  //       >
  //         <Text fontSize={'xl'} fontWeight="bold">
  //           Welcome to CodeDocAI
  //         </Text>
  //       </VStack>
  //       <Flex gap={3} flexDirection="column">
  //           {TabLeftTitle.map((item, _index) => (
  //             <Box
  //               display="flex"
  //               gap="10px"
  //               alignItems="center"
  //               cursor="pointer"
  //               key={item.content}
  //               bg={isActive === _index ? 'whiteAlpha.200' : 'transparent'}
  //               _hover={{
  //                 bg: 'whiteAlpha.200',
  //               }}
  //               p={4}
  //               rounded="lg"
  //               onClick={() => setIsActive(_index)}
  //             >
  //               <Text>{item.content}</Text>
  //             </Box>
  //           ))}
  //         </Flex>
  //     </Flex> */}
  //     {/* <Show below="md"> */}

  //     {/* <LeftDashBoardMobile isShow={isShow} setIsShow={setIsShow} /> */}

  //     <Flex
  //       bg="#1a202c"
  //       color="white"
  //       h="100vh"
  //       overflow="auto"
  //       p="0 30px"
  //       gap={5}
  //       flex={1}
  //       w="full"
  //       flexDirection="column"
  //     >
  //       <Box display="flex" justifyContent="space-between" alignItems="center">
  //         <Heading mt="20px" as="h1" size="5xl" noOfLines={1}>
  //           Overview
  //         </Heading>

  //         {/* <ThemeToggle /> */}
  //       </Box>
  //       <Tabs isFitted variant="soft-rounded">
  //         <TabList>
  //           {TabTopTitle.map((title) => (
  //             <Tab
  //               rounded="0"
  //               _selected={{
  //                 color: 'white',
  //                 bg: 'blackAlpha.600',
  //               }}
  //               key={title.content}
  //               p="15px"
  //             >
  //               {title.content}
  //             </Tab>
  //           ))}
  //         </TabList>
  //         <TabPanels>
  //           <TabPanel mt={4}>
  //             {isBriefsLoading ? (
  //               <SkeletonText
  //                 noOfLines={20}
  //                 spacing="4"
  //                 // skeletonHeight="2"
  //               />
  //             ) : (
  //               <ReactMarkdown className="markdown">
  //                 {brief?.answer}
  //               </ReactMarkdown>
  //             )}
  //           </TabPanel>
  //           <TabPanel>
  //             {/* {isUserStoriesLoading ? (
  //               <Flex
  //                 justifyContent="center"
  //                 height="100%"
  //                 flexDir={['column', 'column', 'row', 'row']}
  //                 gap={4}
  //               >
  //                 <Skeleton
  //                   height="100vh"
  //                   w={['100%', '100%', '100%', '25%']}
  //                 />
  //                 <Skeleton
  //                   height="100vh"
  //                   w={['100%', '100%', '100%', '25%']}
  //                 />
  //                 <Skeleton
  //                   height="100vh"
  //                   w={['100%', '100%', '100%', '25%']}
  //                 />
  //                 <Skeleton
  //                   height="100vh"
  //                   w={['100%', '100%', '100%', '25%']}
  //                 />
  //               </Flex>
  //             ) : (
  //               // userStories={userStoriesStore}
  //               <BoardTab />
  //             )} */}
  //           </TabPanel>

  //           <TabPanel>{/* <BacklogTab /> */}</TabPanel>

  //           <TabPanel>{/* <EpicTab /> */}</TabPanel>
  //         </TabPanels>
  //       </Tabs>
  //     </Flex>
  //     <Flex w="100vw" bottom={10} justify="space-between" pos="absolute">
  //       <AIButton as={Link} href={`/result`} variant="outline" w="100px">
  //         Back
  //       </AIButton>
  //       <AIButton as={Link} href={`/create-project`} w="100px">
  //         generate more
  //       </AIButton>
  //     </Flex>
  //   </Flex>
  // );
};

export default DocumentPage;
