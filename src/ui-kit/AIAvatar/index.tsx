import { AIText } from '@/ui-kit';
import { Box, Flex, FlexProps } from '@chakra-ui/react';

interface IAIAvatarProps extends FlexProps {
  name?: string;
  wAvatar?: any;
  hAvatar?: any;
  avatarProps?: any;
  nameProps?:any;
  url?: any;
}
export const AIAvatar = ({
  name,
  wAvatar = '32px',
  hAvatar = '32px',
  avatarProps,
  nameProps,
  url,
  ...rest
}: IAIAvatarProps) => {
  return (
    <Flex gap="10px" align="center" {...rest}>
      <Box
        borderRadius="full"
        w={wAvatar}
        height={hAvatar}
        // bg="text.500"
        bg={url ? `url(${url})` : 'text.500'}
        bgSize="cover"
        {...avatarProps}
      />
      {name && <AIText fontSize="sx" {...nameProps}>{name}</AIText>}
    </Flex>
  );
};
