import { AIButton, AIImage, AIInputPassword, AIText } from '@/ui-kit';
import { handleCheckPasswordStrengthChecker } from '@/utils/passwordStrengthChecker';
import {
  Flex,
  Icon,
  ListItem,
  Progress,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { LayoutForgotPassword } from './LayoutForgotPassword';
import { ArrowIcon } from '@/icons';
interface IResetYourPasswordProps {
  form: UseFormReturn<any>;
}
export function ResetYourPassword({ form }: IResetYourPasswordProps) {
  const { t } = useTranslation();
  const { control } = form;

  const password = useWatch({
    control,
    name: 'password',
  });

  const strongLevel = handleCheckPasswordStrengthChecker(password);
  return (
    <LayoutForgotPassword>
      <Flex
        gap={{ base: '24px', xxxl: '30px' }}
        flexDir="column"
        align="center"
        w="100%"
      >
        <AIImage
          w={{ base: '220px', xxxl: '260px' }}
          h={{ base: '140px', xxxl: '180px' }}
          url="/reset-password.png"
          objectFit="cover"
        />
        <AIText
          color="text.900"
          lineHeight="140%"
          fontSize="3xxl"
          fontWeight="bold"
        >
          {t('reset_your_password')}
        </AIText>
        <Stack gap="16px" w="100%">
          <AIInputPassword form={form} name="password" label="password" />
          <Stack>
            <Progress
              value={strongLevel}
              borderRadius="50px"
              h="4px"
              sx={{ div: { bgColor: strongLevel > 80 ? 'sec.4' : 'sec.3' } }}
            />
            <Flex justify="space-between">
              <AIText color="text.400" fontSize="sm">
                {t('your_password_must_contain')}
              </AIText>
              <Flex align="center" gap="4px">
                <AIText as="strong" color="text.900" fontSize="sm">
                  {strongLevel > 80 ? t('strong') : t('weak')}
                </AIText>
                {strongLevel > 80 && (
                  <AIImage url="/check.svg" w="18px" h="18px" alt="check" />
                )}
              </Flex>
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
          <AIInputPassword
            form={form}
            name="confirmPassword"
            label="confirm_password"
          />
        </Stack>

        <AIButton
          variant="primary-fill-while"
          type="submit"
          form="form-forgot-password"
          rightIcon={<Icon as={ArrowIcon} w="20px" h="20px" />}
        >
          {t('verification')}
        </AIButton>
      </Flex>
    </LayoutForgotPassword>
  );
}
