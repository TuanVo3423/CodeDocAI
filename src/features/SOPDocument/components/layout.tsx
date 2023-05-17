import { MainLayout } from '@/layouts';
import { movePage } from '@/motion';
import { AITags } from '@/ui-kit';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const TAGS = [
  {
    title: 'All',
    href: '/sop-document',
  },
  {
    title: 'BRD',
    href: '/sop-document?type=brd',
  },
  {
    title: 'WBS',
    href: '/sop-document?type=wbs',
  },
  {
    title: 'Proposal',
    href: '/sop-document?type=proposal',
  },
  {
    title: 'SRS',
    href: '/sop-document?type=srs',
  },
  {
    title: 'User Flow',
    href: '/sop-document?type=user-flow',
  },
  {
    title: 'Design UI/UX',
    href: '/sop-document?type=ui-ux',
  },
  {
    title: 'Project Timeline',
    href: '/sop-document?type=timeline',
  },
  {
    title: 'Test Case',
    href: '/sop-document?type=test-case',
  },
  {
    title: 'User Guide',
    href: '/sop-document?type=user-guide',
  },
  {
    title: 'Release & Close Project',
    href: '/sop-document?type=release',
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <MainLayout>
      <AITags tags={TAGS} id="tags_sop" />

      <AnimatePresence mode="wait">
        <Box
          as={motion.div}
          key={router.pathname}
          {...movePage}
          p={{ base: '14px 30px' }}
          h={{ base: 'calc(100vh - 117px)' }}
          overflow="hidden"
        >
          {children}
        </Box>
      </AnimatePresence>
    </MainLayout>
  );
};
