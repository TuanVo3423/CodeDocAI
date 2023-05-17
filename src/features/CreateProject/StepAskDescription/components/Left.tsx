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

  return (
    <LeftWrapper form={form} previousStep={'askProjectName'}>
      <Stack spacing={7.5} w="100%">
        <Stack spacing={1.5}>
          <TypistCustom
            content={[
              'awesome_im_excited_to_hear_about_your_project',
              'what_is_this_project_about',
            ]}
          />

          {description && <ReplyContent isTriangle>{description}</ReplyContent>}
        </Stack>

        <InputChatbot
          placeholder={'your_project_name'}
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

      <Flex w="100%" justify="center">
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
      </Flex>
    </LeftWrapper>
  );
};
