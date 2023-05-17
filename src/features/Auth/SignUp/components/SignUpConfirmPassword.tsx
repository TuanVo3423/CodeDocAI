import { ArrowIcon } from '@/icons';
import {
  AIButton,
  AIImage,
  AIInput,
  AIInputPassword,
  AILink,
  AIText,
} from '@/ui-kit';
import { handleCheckPasswordStrengthChecker } from '@/utils/passwordStrengthChecker';
import {
  Box,
  Flex,
  Icon,
  ListItem,
  Progress,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';

interface ISignUpConfirmPasswordProps {
  form: UseFormReturn<any>;
  isLoading: boolean;
}

export const SignUpConfirmPassword = ({
  form,
  isLoading,
}: ISignUpConfirmPasswordProps) => {
  const { t } = useTranslation();
  const { setValue, control } = form;

  const password = useWatch({
    control,
    name: 'password',
  });

  const strongLevel = handleCheckPasswordStrengthChecker(password);

  return (
    <Stack spacing={{ base: 6 }} h="100%">
      <AIImage url="/logo.png" w="54px" h="54px" />

      <Flex
        gap="14px"
        cursor="pointer"
        onClick={() => setValue('step', 'confirmEmail')}
        color="text.400"
      >
        <Icon as={ArrowIcon} w="24px" h="24px" transform="rotate(180deg)" />
        <AIText>{t('back_to_main')}</AIText>
      </Flex>

      <Box>
        <AIText
          fontWeight="bold"
          fontSize="3xxl"
          lineHeight="140%"
          color="text.900"
        >
          {t('Let’s create your account')}
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

        <AIInput
          form={form}
          name="name"
          type="string"
          label={'full_name'}
          placeholder={'enter_your_email_to_continue'}
        />

        <AIInputPassword form={form} name="password" label="password" />

        <Stack>
          <Progress
            value={strongLevel}
            borderRadius="50px"
            h="6px"
            sx={{ div: { bgColor: strongLevel > 80 ? 'sec.4' : 'sec.3' } }}
          />
          <Flex justify="space-between">
            <AIText color="text.400" fontSize="sm">
              {t('your_password_must_contain')}
            </AIText>
            <AIText as="strong" color="text.900" fontSize="sm">
              {strongLevel > 80 ? t('strong') : t('weak')}
            </AIText>
          </Flex>
          <UnorderedList
            textAlign="left"
            listStylePos="inside"
            color="text.400"
            fontSize="sm"
          >
            <ListItem>{t('a_symbol')}</ListItem>
            <ListItem>{t('acapital_letters')}</ListItem>
            <ListItem>{t('8_character_minimum')}</ListItem>
          </UnorderedList>
        </Stack>

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-sign-up"
          minW="100% !important"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
          isLoading={isLoading}
        >
          {t('continue')}
        </AIButton>
      </Stack>

      <AIText color="text.900" textAlign="center">
        {t('already_have_an_account')}

        <AILink href="/auth/sign-in" fontWeight="bold" color="sec.4">
          {' '}
          {t('sign_in')}
        </AILink>
      </AIText>
    </Stack>
  );
};
