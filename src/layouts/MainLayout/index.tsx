import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Header, Sidebar } from './components';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"`}
      gridTemplateRows={{ base: '67px 1fr' }}
      gridTemplateColumns={{ base: '220px 1fr' }}
      h="100%"
      minH="100vh"
      w="100%"
    >
      <GridItem area={'nav'} position="fixed" top="0" minW={{ base: '220px' }}>
        <Sidebar />
      </GridItem>

      <GridItem
        area={'header'}
        p={{ base: '0px 30px' }}
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="text.600"
      >
        <Header />
      </GridItem>

      <GridItem w="100%" h="100%" area={'main'} overflowX="hidden">
        {children}
      </GridItem>
    </Grid>
  );
};
