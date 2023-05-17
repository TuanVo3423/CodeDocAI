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

  const projectName = useWatch({
    control,
    name: 'projectName',
  });

  const username = useWatch({
    control,
    name: 'username',
  });

  return (
    <LeftWrapper form={form} previousStep={'askName'}>
      <Stack spacing={7.5} w="100%">
        <Stack spacing={1.5}>
          <TypistCustom
            content={[
              t('hello_name_got_an_idea_for_a_new_project', { name: username }),
              'cant_wait_to_hear_what_project_name_you_come_up_with',
            ]}
          />

          {projectName && <ReplyContent isTriangle>{projectName}</ReplyContent>}
        </Stack>

        <InputChatbot
          placeholder={'your_project_name'}
          onChange={(e: any) => setValueInput(e.target.value)}
          valueInput={valueInput}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13 && valueInput) {
              setValue('projectName', valueInput);
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
          isDisabled={!projectName}
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
        >
          {t('continue')}
        </AIButton>
      </Flex>
    </LeftWrapper>
  );
};
