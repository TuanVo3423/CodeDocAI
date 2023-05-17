import { AppleIcon, ArrowIcon, GoogleIcon, SlackIcon } from '@/icons';
import {
  AIButton,
  AIImage,
  AIInput,
  AIInputPassword,
  AILink,
  AIText,
} from '@/ui-kit';
import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';
import { CanIHelp } from '../../components/CanIHelp';
import { ButtonSignUpSocial } from '../../SignUp/components/SignUpConfirmEmail';

interface ISignInFormProps {
  form: UseFormReturn<any>;
  isLoading: boolean;
}

export const SignInForm = ({ form, isLoading }: ISignInFormProps) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={{ base: 6 }} h="100%">
      <AIImage url="/logo.png" w="54px" h="54px" />

      <Box>
        <AIText
          fontWeight="bold"
          fontSize="3xxl"
          lineHeight="140%"
          color="text.900"
        >
          {t('welcome_to')}
        </AIText>
        <AIText
          fontWeight="bold"
          fontSize="4xl"
          lineHeight="120%"
          color="pri.2"
        >
          Sparkplan.AI
        </AIText>
      </Box>

      <Stack spacing={4} textAlign="center">
        <AIInput
          form={form}
          name="email"
          type="email"
          label={'email_address'}
          placeholder={'enter_your_email_to_continue'}
        />

        <AIInputPassword form={form} name="password" label="password" />

        <AILink
          href="/auth/forgot-password"
          fontWeight="bold"
          fontSize="md"
          color="text.900"
        >
          {t('forgot_password')}
        </AILink>

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-sign-in"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
          isLoading={isLoading}
        >
          {t('login')}
        </AIButton>

        <Flex position="relative" justify="center">
          <AIText zIndex="1" bg="text.0" p="0px 10px" color="text.400">
            {t('or_continue_with')}
          </AIText>
          <Box
            w="100%"
            h="1px"
            bg="text.100"
            position="absolute"
            top="13px"
            zIndex="0"
          />
        </Flex>

        <Flex gap={3.5} w="100%" justify="center">
          <ButtonSignUpSocial>
            <Icon as={GoogleIcon} />
            <AIText>Google</AIText>
          </ButtonSignUpSocial>
          <ButtonSignUpSocial>
            <Icon as={AppleIcon} />
            <AIText>Apple</AIText>
          </ButtonSignUpSocial>
          <ButtonSignUpSocial>
            <Icon as={SlackIcon} />
            <AIText>Slack</AIText>
          </ButtonSignUpSocial>
        </Flex>
      </Stack>

      <AIText color="text.900" textAlign="center">
        {t('dont_have_an_account')}

        <AILink href="/auth/sign-up" fontWeight="bold" color="sec.4">
          {' '}
          {t('sign_up')}
        </AILink>
      </AIText>

      <Flex flex="1" align="flex-end">
        <CanIHelp />
      </Flex>
    </Stack>
  );
};
