import { Box, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { AIText } from '../AIText';
import { useTranslation } from 'next-i18next';

interface IProps extends FlexProps {
  status: string;
}

export const AIStatus = ({ status, ...rest }: IProps) => {
  const { t } = useTranslation();

  const renderStatus = () => {
    switch (status) {
      case 'done':
        return (
          <Flex align="center" gap="8px" {...rest}>
            <Box w="8px" h="8px" borderRadius="full" bg="#4A87FF" />
            <AIText>{t(status)}</AIText>
          </Flex>
        );

      case 'doing':
        return (
          <Flex align="center" gap="8px" {...rest}>
            <Box w="8px" h="8px" borderRadius="full" bg="sec.2" />
            <AIText>{t(status)}</AIText>
          </Flex>
        );

      case 'pending':
        return (
          <Flex align="center" gap="8px" {...rest}>
            <Box w="8px" h="8px" borderRadius="full" bg="sec.3" />
            <AIText>{t(status)}</AIText>
          </Flex>
        );

      default:
        return <Flex align="center" gap="8px" />;
    }
  };
  return renderStatus();
};
