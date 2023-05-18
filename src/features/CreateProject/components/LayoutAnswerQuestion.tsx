import { AIImage, AIText } from '@/ui-kit';
import { Flex, FlexProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { BackTo } from '@/components';
import { movePage } from '@/motion';
import { Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';

interface IProps extends FlexProps {
  form: UseFormReturn<any>;
  previousStep: string;
  step: number;
  title: string;
  action: React.ReactNode;
}

export const LayoutAnswerQuestion = ({
  children,
  form,
  previousStep,
  step,
  title,
  action,
}: IProps) => {
  const { t } = useTranslation();
  const { setValue } = form;

  return (
    <Flex
      as={motion.div}
      {...movePage}
      gap={{ base: '24px', xxxl: '40px' }}
      direction="column"
      align="center"
      // h="100%"
      minH="100vh"
      bg="url(/bg-gradient-top.png) top center no-repeat"
      bgSize="40%"
    >
      <Flex
        position="relative"
        bg="text.700"
        // w="900px"
        // h="500px"
        p={6}
        direction="column"
        borderRadius="16px"
        border="1px solid"
        borderColor="text.500"
      >
        <Flex gap={4} direction="column">
          <Flex align="center" justify="space-between">
            <BackTo action={() => setValue('step', previousStep)}>Back</BackTo>

            <AIText lineHeight="160%">{step}/14</AIText>
          </Flex>
          <AIText lineHeight="140%" fontWeight="bold" fontSize="2xl">
            {t(title)}
          </AIText>

          {children}
        </Flex>
      </Flex>

      <Stack mt={4} justify="center" align="center">
        {action}
      </Stack>
    </Flex>
  );
};
