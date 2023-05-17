import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import { Children, Header, Sidebar } from './components';

interface ICalendarSkeletonProps extends GridProps {
  project_name: string;
}

export const CalendarSkeleton = ({
  project_name,
  ...rest
}: ICalendarSkeletonProps) => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"`}
      gridTemplateRows="52px 1fr"
      gridTemplateColumns="150px 1fr"
      h="100%"
      w="100%"
      bg="text.800"
      borderRadius="20px"
      zIndex="1"
      position="inherit"
      overflow="hidden"
      {...rest}
    >
      <GridItem
        area={'nav'}
        w="150px"
        p="14px"
        bg="text.700"
        border="0.75px solid"
        borderColor="text.600"
        borderRadius="20px 0px 0px 20px"
      >
        <Sidebar />
      </GridItem>

      <GridItem
        area={'header'}
        p="0px 19px"
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="text.600"
      >
        <Header project_name={project_name} />
      </GridItem>

      <GridItem w="100%" h="100%" area={'main'}>
        <Children />
      </GridItem>
    </Grid>
  );
};
