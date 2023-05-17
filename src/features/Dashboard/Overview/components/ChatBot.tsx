import { ArrowIcon } from '@/icons';
import { AIBox, AIImage, AIText } from '@/ui-kit';
import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BoxHeading } from '../../components';

const CustomBox = ({ children }: FlexProps) => {
  return (
    <Flex
      width="28px"
      height="28px"
      justify="center"
      align="center"
      fontSize="sm"
      color="text.100"
      background="radial-gradient(89.29% 89.29% at 50% 89.29%, rgba(255, 255, 255, 0) 0%, rgba(176, 162, 255, 0.2) 100%), #373543"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px -2.5px 0px #332F4E"
      borderRadius="4"
    >
      {children}
    </Flex>
  );
};

export const ChatBot = () => {
  const { t } = useTranslation();

  return (
    <AIBox h="100%">
      <Flex justify="space-between" align="center">
        <BoxHeading title="chat_bot" />

        <Flex align="center" gap={2.5}>
          <AIText fontSize="xs" color="text.300">
            {t('chatbot_assistant')}
          </AIText>

          <Flex gap={1.5}>
            <CustomBox>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1451_1141)">
                  <path
                    d="M10.29 8.48H8.82V5.12H10.29C11.5637 5.12 12.6 4.08365 12.6 2.81C12.6 1.53635 11.5637 0.5 10.29 0.5C9.01635 0.5 7.98 1.53635 7.98 2.81V4.28H4.62V2.81C4.62 1.53635 3.58365 0.5 2.31 0.5C1.03635 0.5 0 1.53635 0 2.81C0 4.08365 1.03635 5.12 2.31 5.12H3.78V8.48H2.31C1.03635 8.48 0 9.51635 0 10.79C0 12.0637 1.03635 13.1 2.31 13.1C3.58365 13.1 4.62 12.0637 4.62 10.79V9.32H7.98V10.79C7.98 12.0637 9.01635 13.1 10.29 13.1C11.5637 13.1 12.6 12.0637 12.6 10.79C12.6 9.51635 11.5637 8.48 10.29 8.48ZM8.82 2.81C8.82 1.99961 9.4794 1.34 10.29 1.34C11.1006 1.34 11.76 1.99961 11.76 2.81C11.76 3.62039 11.1006 4.28 10.29 4.28H8.82V2.81ZM2.31 4.28C1.4994 4.28 0.84 3.62039 0.84 2.81C0.84 1.99961 1.4994 1.34 2.31 1.34C3.1206 1.34 3.78 1.99961 3.78 2.81V4.28H2.31ZM3.78 10.79C3.78 11.6004 3.1206 12.26 2.31 12.26C1.4994 12.26 0.84 11.6004 0.84 10.79C0.84 9.97961 1.4994 9.32 2.31 9.32H3.78V10.79ZM4.62 8.48V5.12H7.98V8.48H4.62ZM10.29 12.26C9.4794 12.26 8.82 11.6004 8.82 10.79V9.32H10.29C11.1006 9.32 11.76 9.97961 11.76 10.79C11.76 11.6004 11.1006 12.26 10.29 12.26Z"
                    fill="#E0DFE2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1451_1141">
                    <rect
                      width="12.6"
                      height="12.6"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </CustomBox>
            <CustomBox>G</CustomBox>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg="text.0"
        w="100%"
        p="4px 12px 4px 4px"
        borderRadius="10"
        color="text.900"
        align="center"
        justify="space-between"
        gap="10px"
        cursor="pointer"
      >
        <AIImage url="/logo.png" w={{ base: '30px' }} h={{ base: '30px' }} />
        <AIText flex="1" fontSize="xs">
          {t('ok_jimmy_your_dashboard_is_ready')}
        </AIText>
        <Icon as={ArrowIcon} w={{ base: '20px' }} h={{ base: '20px' }} />
      </Flex>
    </AIBox>
  );
};
