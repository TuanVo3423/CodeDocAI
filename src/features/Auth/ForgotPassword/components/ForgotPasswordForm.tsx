import { ArrowIcon } from '@/icons';
import { AIButton, AIImage, AIInput, AIText } from '@/ui-kit';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { LayoutForgotPassword } from './LayoutForgotPassword';
interface IForgotPasswordFormProps {
  form: UseFormReturn<any>;
}

export function ForgotPasswordForm({ form }: IForgotPasswordFormProps) {
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
          url="/forgotpassword.png"
        />
        <Stack textAlign="center" gap="12px">
          <AIText
            color="text.900"
            lineHeight="140%"
            fontSize="3xxl"
            fontWeight="bold"
          >
            {t('forgot_password')}
          </AIText>
          <AIText
            color="text.400"
            fontSize="md"
            lineHeight="160%"
            textAlign="center"
          >
            {t(
              'please_enter_your_registered_email_address_we_will_send_instruction_to_help_reset_your_password'
            )}
          </AIText>
        </Stack>

        <AIInput
          form={form}
          name="email"
          type="email"
          label={'email_address'}
          placeholder={'enter_your_email_to_continue'}
          onChange={(e: any) => {
            setValue('email', e.target.value);
          }}
        />
        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-forgot-password"
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
        >
          {t('send_reset_instruction')}
        </AIButton>
      </Flex>
    </LayoutForgotPassword>
  );
}
