import { ArrowIcon, EyeIcon } from '@/icons';
import { AIImage, AIText } from '@/ui-kit';
import { Flex, Icon, MenuIcon, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children, ...rest }: Props) {
  return (
    <Flex>
      {children}
      <Navigation />
    </Flex>
  );
}
