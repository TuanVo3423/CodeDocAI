import {
  Box,
  Flex,
  ListItem,
  Skeleton,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const Children = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        overflow="auto"
        p="5px 19px"
        borderBottom="1px solid"
        borderColor="text.600"
      >
        <UnorderedList
          display="flex"
          listStyleType="none"
          m="0"
          gap="5px"
          w="fit-content"
          bg="text.700"
          borderRadius="6"
          p="2px"
        >
          <ListItem>
            <Skeleton
              h="19px"
              w="86px"
              borderRadius="6"
              startColor={'text.400'}
              endColor={'text.400'}
            />
          </ListItem>

          {Array.from({ length: 5 }, (_item, idx) => (
            <ListItem key={idx}>
              <Skeleton
                h="19px"
                w="86px"
                borderRadius="6"
                startColor={'text.600'}
                endColor={'text.600'}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Flex gap="9px" p="20px 19px">
        <Flex
          borderWidth="0.4px 0px 0px 0.4px"
          borderStyle="solid"
          borderColor="text.600"
          bg="text.700"
          direction="column"
        >
          <Flex>
            {DAYS.map((day, idx) => (
              <Flex
                key={idx}
                w="104px"
                h="25px"
                justify="center"
                align="center"
                color="text.300"
                fontWeight="bold"
                fontSize="7.65px"
                lineHeight="160%"
                borderWidth="0px 0.4px 0.4px 0px"
                borderStyle="solid"
                borderColor="text.600"
              >
                {t(day)}
              </Flex>
            ))}
          </Flex>

          {Array.from({ length: 5 }, (_item, idx) => (
            <Flex key={idx}>
              {DAYS.map((day, idx) => (
                <Flex
                  key={idx}
                  w="104px"
                  minH="74px"
                  borderWidth="0px 0.4px 0.4px 0px"
                  borderStyle="solid"
                  borderColor="text.600"
                  p="5px"
                  direction="column"
                  gap="5px"
                >
                  <Flex w="100%" justify="flex-end">
                    <Skeleton
                      w="19.12px"
                      h="5.74px"
                      borderRadius="6"
                      startColor={'text.400'}
                      endColor={'text.400'}
                    />
                  </Flex>

                  <Stack
                    background="#373543"
                    backdropFilter="blur(1.43437px)"
                    borderRadius="3.825px"
                    w="100%"
                    h="100%"
                    maxH="35.7px"
                    p="3px"
                    spacing="5px"
                  >
                    <Skeleton
                      w="75px"
                      h="9px"
                      borderRadius="6"
                      startColor={'text.400'}
                      endColor={'text.400'}
                    />

                    <Skeleton
                      w="36px"
                      h="6px"
                      borderRadius="6"
                      startColor={'text.400'}
                      endColor={'text.400'}
                    />

                    <Skeleton
                      w="53px"
                      h="6px"
                      borderRadius="6"
                      startColor={'text.400'}
                      endColor={'text.400'}
                    />
                  </Stack>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
