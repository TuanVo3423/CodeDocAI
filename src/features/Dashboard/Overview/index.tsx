import { Grid, GridItem } from '@chakra-ui/react';
import { Layout } from '../components';
import {
  CalendarTracking,
  ChatBot,
  HistoricalSystem,
  ProjectBoards,
  ProjectRoadmap,
  TodoList,
  VisionGoals,
} from './components';

export const Overview = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {/* To Do List Of The Day */}
        <GridItem gridArea="1 / 1 / 4 / 3">
          <TodoList />
        </GridItem>

        {/* Project Boards */}
        <GridItem gridArea="4 / 1 / 7 / 2">
          <ProjectBoards />
        </GridItem>

        {/* Calendar Tracking */}
        <GridItem gridArea="4 / 2 / 7 / 3">
          <CalendarTracking />
        </GridItem>

        {/* ChatBot */}
        <GridItem gridArea="1 / 3 / 2 / 4">
          <ChatBot />
        </GridItem>

        {/* Historical System */}
        <GridItem gridArea="2 / 3 / 5 / 4">
          <HistoricalSystem />
        </GridItem>

        {/* Vision & Goals */}
        <GridItem gridArea="5 / 3 / 6 / 4">
          <VisionGoals />
        </GridItem>

        {/* Project Roadmap */}
        <GridItem gridArea="6 / 3 / 7 / 4">
          <ProjectRoadmap />
        </GridItem>
      </Grid>
    </Layout>
  );
};
