import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIInput, AILink, AIText } from '@/ui-kit';
import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';

interface ISignUpVerifyCodeProps {
  form: UseFormReturn<any>;
}

export const SignUpVerifyCode = ({ form }: ISignUpVerifyCodeProps) => {
  const { t } = useTranslation();
  const { control, setValue } = form;

  const email = useWatch({
    control,
    name: 'email',
  });

  return (
    <Stack spacing={{ base: 6 }} h="100%">
      <AIImage url="/logo.png" w="54px" h="54px" />

      <Flex
        gap="14px"
        cursor="pointer"
        onClick={() => setValue('step', 1)}
        color="text.400"
      >
        <Icon as={ArrowIcon} w="24px" h="24px" transform="rotate(180deg)" />
        <AIText>{t('back_to_main')}</AIText>
      </Flex>

      <Box>
        <AIText
          fontWeight="bold"
          fontSize={{ base: '3xxl' }}
          lineHeight="140%"
          color="text.900"
        >
          {t('You’re almost signed up')}
        </AIText>
        <AIText
          fontSize="lg"
          lineHeight="160%"
          color="text.400"
          dangerouslySetInnerHTML={{
            __html: t(
              'enter_the_verification_code_we_sent_to_gmail_finish_signing_up',
              {
                email,
              }
            ),
          }}
        />
      </Box>

      <Stack spacing={5} as="form" textAlign="center">
        <AIInput
          form={form}
          name="code"
          type="string"
          label={'verification_code'}
          placeholder={'enter_code'}
        />

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-sign-up"
          minW="100% !important"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
        >
          {t('continue')}
        </AIButton>
      </Stack>

      <AIText color="text.900" textAlign="center">
        {t('dont_receive_the_code')}

        <AILink href="/auth/sign-in" fontWeight="bold" color="sec.4">
          {' '}
          {t('resend')}
        </AILink>
      </AIText>
    </Stack>
  );
};
