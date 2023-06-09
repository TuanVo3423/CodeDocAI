import { TypistCustom } from '@/components';
import { ArrowIcon } from '@/icons';
import { AIButton } from '@/ui-kit';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { InputChatbot, LeftWrapper, ReplyContent } from '../../components';

interface ILeftProps {
  form: UseFormReturn<any>;
}

export const Left = ({ form }: ILeftProps) => {
  const { t } = useTranslation();
  const [valueInput, setValueInput] = useState('');

  const { control, setValue } = form;

  const description = useWatch({
    control,
    name: 'description',
  });

  const handleOnCLick = () => {
    setValue('description', valueInput);
    setValue('step', 'chooseCategory');
    setValueInput('');
  };

  return (
    <LeftWrapper form={form} previousStep={'askProjectName'}>
      <Stack spacing={7.5} w="100%" paddingBottom="60px">
        <Stack spacing={1.5}>
          <TypistCustom
            content={[
              'Awesome im excited to hear about your project',
              'what is this project about',
            ]}
          />

          {description && <ReplyContent isTriangle>{description}</ReplyContent>}
        </Stack>

        <InputChatbot
          onClick={handleOnCLick}
          placeholder={'your project name'}
          onChange={(e: any) => setValueInput(e.target.value)}
          valueInput={valueInput}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13 && valueInput) {
              setValue('description', valueInput);
              setValueInput('');
            }
          }}
        />
      </Stack>

      {/* <Flex w="100%" justify="center">
        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-create-project"
          maxW="200px"
          isDisabled={!description}
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
        >
          {t('continue')}
        </AIButton>
      </Flex> */}
    </LeftWrapper>
  );
};
