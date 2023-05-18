import { BackTo } from '@/components';
import { AIImage, AIText } from '@/ui-kit';
import { Flex, GridItem, GridItemProps, Stack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';

interface ILeftWrapperProps extends GridItemProps {
  form: UseFormReturn<any>;
  previousStep?: string;
}

export const LeftWrapper = ({
  children,
  form,
  previousStep,
  ...rest
}: ILeftWrapperProps) => {
  const { t } = useTranslation();
  const { setValue } = form;

  return (
    <GridItem
      p={{ base: '0px 40px', xxxl: '50px 168px 0px' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      {...rest}
    >
      {previousStep ? (
        <BackTo w="fit-content" action={() => setValue('step', previousStep)}>
          <AIText color="text.200">{t('back')}</AIText>
        </BackTo>
      ) : (
        <Flex />
      )}

      <Stack align="flex-start" spacing={10}>
        {/* <AIImage url="/logo-bg-gradient.svg" h={{ base: '120px' }} /> */}

        {children}
      </Stack>
    </GridItem>
  );
};
