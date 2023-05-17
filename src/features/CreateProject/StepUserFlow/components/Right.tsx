import { TypistCustom } from '@/components';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InputChatbot } from '../../components';

interface IRightProps {
  form: UseFormReturn<any>;
}

export const Right = ({ form }: IRightProps) => {
  const { t } = useTranslation();
  const [valueInput, setValueInput] = useState('');

  const { setValue } = form;

  return (
    <Flex direction="column" minW="300px" bg="text.600" justify="space-between">
      <Box p="20px" borderBottom="1px solid" borderColor="text.400">
        <Text>{t('chat_bot')}</Text>
      </Box>

      <Stack spacing={7.5} w="100%" p="20px">
        <Stack spacing={1.5}>
          <TypistCustom
            content={[
              'user_flow_created_all_set',
              'would_you_like_any_modifications',
            ]}
          />

          {/* {username && <ReplyContent isTriangle>{username}</ReplyContent>} */}
        </Stack>

        <InputChatbot
          onChange={(e: any) => setValueInput(e.target.value)}
          valueInput={valueInput}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13 && valueInput) {
              setValue('username', valueInput);
              setValueInput('');
            }
          }}
        />
      </Stack>
    </Flex>
  );
};
