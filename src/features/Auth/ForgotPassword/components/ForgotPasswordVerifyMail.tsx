import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { LayoutForgotPassword } from './LayoutForgotPassword';
interface IForgotPasswordVerifyMailProps {
  form: UseFormReturn<any>;
}
export function ForgotPasswordVerifyMail({
  form,
}: IForgotPasswordVerifyMailProps) {
  const { t } = useTranslation();
  const { control, setValue } = form;
  const email = useWatch({
    control,
    name: 'email',
  });

  return (
    <LayoutForgotPassword>
      <Flex
        gap={{ base: '24px', xxxl: '30px' }}
        flexDir="column"
        align="center"
      >
        <AIImage
          w={{ base: '220px', xxxl: '260px' }}
          h={{ base: '140px', xxxl: '180px' }}
          url="/forgot-password-verify-mail.png"
        />
        <Stack textAlign="center" gap="12px">
          <AIText
            color="text.900"
            lineHeight="140%"
            fontSize="3xxl"
            fontWeight="bold"
          >
            {t('email_instruction_sent')}
          </AIText>
          <AIText
            color="text.400"
            fontSize="md"
            fontWeight="normal"
            lineHeight="160%"
            textAlign="center"
          >
            {t(
              'please_check_your_mailbox_and_follow_the_instruction_we_sent_to_your_mail'
            )}
          </AIText>
          <AIText
            fontWeight="bold"
            fontSize="md"
            lineHeight="160%"
            color="sec.4"
          >
            {email}
          </AIText>
        </Stack>

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-forgot-password"
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
        >
          {t('open_email')}
        </AIButton>
      </Flex>
    </LayoutForgotPassword>
  );
}
