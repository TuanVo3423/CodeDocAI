import { BackTo } from '@/components';
import { AIText } from '@/ui-kit';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<any>;
}

export const Header = ({ form }: IProps) => {
  const { t } = useTranslation();
  const { setValue } = form;

  return (
    <Flex p="10px 16px" borderBottom="1px solid" borderColor="text.100">
      <Flex gap="24px">
        <BackTo
          action={() => setValue('step', 'userFlow')}
          w="fit-content"
          sx={{ svg: { color: 'text.900' } }}
        />

        <AIText fontSize="2xl" color="text.900" fontWeight="bold">
          {t('business_requirement_document')}
        </AIText>
      </Flex>
    </Flex>
  );
};
