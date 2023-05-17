import { AIBox } from '@/ui-kit';
import { Box, Flex, ListItem, Skeleton, UnorderedList } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { variantsItem } from '..';

export const Children = ({ size }: { size: string }) => {
  return (
    <Box>
      <Box
        overflow="auto"
        p={size === 'md' ? '6px 40px' : '4.5px 15px'}
        borderBottom="1px solid"
        borderColor="text.600"
        as={motion.div}
        variants={variantsItem}
      >
        <UnorderedList
          display="flex"
          listStyleType="none"
          m="0"
          gap="10px"
          w="fit-content"
          bg="text.700"
          borderRadius="6"
          p="2px"
        >
          <ListItem>
            <Skeleton
              h={size === 'md' ? '31px' : '16px'}
              w={size === 'md' ? '135px' : '67.5px'}
              borderRadius="6"
              startColor={'text.400'}
              endColor={'text.400'}
            />
          </ListItem>

          {Array.from({ length: 5 }, (_item, idx) => (
            <ListItem key={idx}>
              <Skeleton
                h={size === 'md' ? '31px' : '16px'}
                w={size === 'md' ? '135px' : '67.5px'}
                borderRadius="6"
                startColor={'text.600'}
                endColor={'text.600'}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Flex
        gap="9px"
        p={size === 'md' ? '16px 40px' : '9px 15px'}
        as={motion.div}
        variants={variantsItem}
      >
        <Flex
          w="100%"
          h="100%"
          direction="column"
          gap={size === 'md' ? '16px' : '9px'}
        >
          <AIBox
            w="100%"
            maxW={size === 'md' ? '727px' : '363px'}
            p={size === 'md' ? '22.5px' : '11px'}
          >
            <Flex justify="space-between">
              <Skeleton
                h={size === 'md' ? '16.5px' : '8.25px'}
                w={size === 'md' ? '184.5px' : '92.25px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
                mb={size === 'md' ? '22.5px' : '11.5px'}
              />

              <Skeleton
                h={size === 'md' ? '16.5px' : '8.25px'}
                w={size === 'md' ? '154.5px' : '62.25px'}
                borderRadius="6"
                startColor={'text.500'}
                endColor={'text.500'}
                mb={size === 'md' ? '22.5px' : '11.5px'}
              />
            </Flex>

            {Array.from({ length: 7 }, (_item, idx) => (
              <Flex
                key={idx}
                p={size === 'md' ? '13.5px 0px' : '6.75px 0px'}
                borderTop="0.75px solid"
                borderColor="text.500"
                gap={size === 'md' ? '50px' : '15px'}
                mt="0 !important"
              >
                <Skeleton
                  h={size === 'md' ? '9px' : '4.5px'}
                  w={size === 'md' ? '360px' : '180px'}
                  borderRadius="6"
                  startColor={idx === 0 ? 'text.400' : 'text.500'}
                  endColor={idx === 0 ? 'text.400' : 'text.500'}
                />

                {Array.from({ length: 5 }, (_item, idx) => (
                  <Skeleton
                    key={idx}
                    h={size === 'md' ? '9px' : '4.5px'}
                    w={size === 'md' ? '75px' : '37.5px'}
                    borderRadius="6"
                    startColor={idx === 0 ? 'text.400' : 'text.500'}
                    endColor={idx === 0 ? 'text.400' : 'text.500'}
                  />
                ))}
              </Flex>
            ))}
          </AIBox>

          <Flex gap={size === 'md' ? '16px' : '9px'}>
            {Array.from({ length: 2 }, (_item, idx) => (
              <AIBox
                w="100%"
                maxW={size === 'md' ? '345px' : '177px'}
                maxH={size === 'md' ? '273px' : '136px'}
                p={size === 'md' ? '22.5px' : '11px'}
                key={idx}
                spacing={size === 'md' ? 4 : 2}
              >
                <Flex justify="space-between">
                  <Skeleton
                    h={size === 'md' ? '16.5px' : '8.25px'}
                    w={size === 'md' ? '184.5px' : '92.25px'}
                    borderRadius="6"
                    startColor={'text.400'}
                    endColor={'text.400'}
                  />

                  <Skeleton
                    h={size === 'md' ? '16.5px' : '8.25px'}
                    w={size === 'md' ? '52.5px' : '26.25px'}
                    borderRadius="6"
                    startColor={'text.400'}
                    endColor={'text.400'}
                  />
                </Flex>

                <Flex gap={size === 'md' ? '22.5px' : '6px'}>
                  {Array.from({ length: 3 }, (_item, idx) => (
                    <Flex align="center" gap="4.5px" key={idx}>
                      <Skeleton
                        h={size === 'md' ? '7.5px' : '3.75px'}
                        w={size === 'md' ? '7.5px' : '3.75px'}
                        borderRadius="full"
                        startColor={'text.400'}
                        endColor={'text.400'}
                      />

                      <Skeleton
                        h={size === 'md' ? '7.5px' : '4px'}
                        w={size === 'md' ? '75px' : '37.5px'}
                        borderRadius="6"
                        startColor={'text.400'}
                        endColor={'text.400'}
                      />
                    </Flex>
                  ))}
                </Flex>

                <Skeleton
                  h="400px"
                  w="100%"
                  borderRadius="6"
                  startColor={'text.400'}
                  endColor={'text.400'}
                />
              </AIBox>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" w="100%" gap={size === 'md' ? '16px' : '9px'}>
          <AIBox
            w="100%"
            p={size === 'md' ? '22.5px' : '11px'}
            spacing={size === 'md' ? 4 : 2}
          >
            <Skeleton
              h={size === 'md' ? '16.5px' : '8.25px'}
              w={size === 'md' ? '184.5px' : '92.25px'}
              borderRadius="6"
              startColor={'text.400'}
              endColor={'text.400'}
            />

            <Flex
              bg="text.500"
              borderRadius="3px"
              p="3px"
              align="center"
              gap="4.5px"
            >
              <Skeleton
                h={size === 'md' ? '24px' : '14.25px'}
                w={size === 'md' ? '24px' : '14.25px'}
                borderRadius="full"
                startColor={'text.400'}
                endColor={'text.400'}
              />

              <Skeleton
                h={size === 'md' ? '16.5px' : '4.5px'}
                w={size === 'md' ? '184.5px' : '87.5px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
              />
            </Flex>
          </AIBox>

          <AIBox
            w="100%"
            maxW={size === 'md' ? '727px' : '197px'}
            p={size === 'md' ? '22.5px' : '11px'}
          >
            <Flex justify="space-between">
              <Skeleton
                h={size === 'md' ? '16.5px' : '8.25px'}
                w={size === 'md' ? '184.5px' : '92.25px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
                mb={size === 'md' ? '22.5px' : '11.5px'}
              />

              <Skeleton
                h={size === 'md' ? '16.5px' : '8.25px'}
                w={size === 'md' ? '154.5px' : '26.25px'}
                borderRadius="6"
                startColor={'text.500'}
                endColor={'text.500'}
                mb={size === 'md' ? '22.5px' : '11.5px'}
              />
            </Flex>

            {Array.from({ length: 7 }, (_item, idx) => (
              <Flex
                key={idx}
                p={size === 'md' ? '13.5px 0px' : '6.75px 0px'}
                borderTop="0.75px solid"
                borderColor="text.500"
                gap={size === 'md' ? '50px' : '15px'}
                mt="0 !important"
              >
                <Skeleton
                  h={size === 'md' ? '9px' : '4.5px'}
                  w={size === 'md' ? '360px' : '39.75px'}
                  borderRadius="6"
                  startColor={idx === 0 ? 'text.400' : 'text.500'}
                  endColor={idx === 0 ? 'text.400' : 'text.500'}
                />

                <Skeleton
                  h={size === 'md' ? '9px' : '4.5px'}
                  w={size === 'md' ? '360px' : '102.75px'}
                  borderRadius="6"
                  startColor={idx === 0 ? 'text.400' : 'text.500'}
                  endColor={idx === 0 ? 'text.400' : 'text.500'}
                />

                <Skeleton
                  h={size === 'md' ? '9px' : '4.5px'}
                  w={size === 'md' ? '360px' : '39.75px'}
                  borderRadius="6"
                  startColor={idx === 0 ? 'text.400' : 'text.500'}
                  endColor={idx === 0 ? 'text.400' : 'text.500'}
                />
              </Flex>
            ))}
          </AIBox>

          <AIBox
            w="100%"
            p={size === 'md' ? '22.5px' : '11px'}
            spacing={size === 'md' ? 4 : 2}
          >
            <Flex align="center" justify="space-between">
              <Skeleton
                h={size === 'md' ? '16.5px' : '4.5px'}
                w={size === 'md' ? '184.5px' : '87.5px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
              />

              <Skeleton
                h={size === 'md' ? '16.5px' : '4.5px'}
                w={size === 'md' ? '154.5px' : '47.5px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
              />
            </Flex>
          </AIBox>

          <AIBox
            w="100%"
            p={size === 'md' ? '22.5px' : '11px'}
            spacing={size === 'md' ? 4 : 2}
          >
            <Flex align="center" justify="space-between">
              <Skeleton
                h={size === 'md' ? '16.5px' : '4.5px'}
                w={size === 'md' ? '184.5px' : '87.5px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
              />

              <Skeleton
                h={size === 'md' ? '16.5px' : '4.5px'}
                w={size === 'md' ? '154.5px' : '47.5px'}
                borderRadius="6"
                startColor={'text.400'}
                endColor={'text.400'}
              />
            </Flex>
          </AIBox>
        </Flex>
      </Flex>
    </Box>
  );
};
