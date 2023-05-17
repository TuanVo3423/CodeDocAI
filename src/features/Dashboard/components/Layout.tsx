import { MainLayout } from '@/layouts';
import { movePage } from '@/motion';
import { AITags } from '@/ui-kit';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const TAGS = [
  {
    title: 'overview',
    href: '/dashboard/overview',
  },
  {
    title: 'vision_goals',
    href: '/dashboard/vision-goals',
  },
  {
    title: 'to_do_list',
    href: '/dashboard/todo-list',
  },
  {
    title: 'project_roadmap',
    href: '/dashboard/project-roadmap',
  },
  {
    title: 'project_boards',
    href: '/dashboard/project-boards',
  },
  {
    title: 'calendar_tracking',
    href: '/dashboard/calendar-tracking',
  },
  {
    title: 'historical_system',
    href: '/dashboard/historical-system',
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <MainLayout>
      <AITags tags={TAGS} id="tags_dashboard" />
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
