import { AppleIcon, ArrowIcon, GoogleIcon, SlackIcon } from '@/icons';
import { AIButton, AIImage, AIInput, AILink, AIText } from '@/ui-kit';
import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';
import { CanIHelp } from '../../components/CanIHelp';

interface ISignUpConfirmEmailProps {
  form: UseFormReturn<any>;
}

export const ButtonSignUpSocial = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AIButton
      variant="while-line-while"
      borderColor="text.100"
      flex="1"
      gap="6px"
    >
      {children}
    </AIButton>
  );
};

export const SignUpConfirmEmail = ({ form }: ISignUpConfirmEmailProps) => {
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

        <AIInput
          form={form}
          name="email"
          type="email"
          label={'email_address'}
          placeholder={'enter_your_email_to_continue'}
        />

        <AIText
          color="text.400"
          sx={{
            '& > a': {
              color: 'sec.4',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          dangerouslySetInnerHTML={{
            __html: t(
              'by_clicking_create_free_account_i_agree_to_sparkplan_ais_terms_and_privacy_policy'
            ),
          }}
        />

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-sign-up"
          minW="100% !important"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
        >
          {t('create_free_account')}
        </AIButton>
      </Stack>

      <AIText color="text.900" textAlign="center">
        {t('already_have_an_account')}

        <AILink href="/auth/sign-in" fontWeight="bold" color="sec.4">
          {' '}
          {t('sign_in')}
        </AILink>
      </AIText>

      <Flex flex="1" align="flex-end">
        <CanIHelp />
      </Flex>
    </Stack>
  );
};
