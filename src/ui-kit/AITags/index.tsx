import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AILink } from '../AILink';

const Underline = ({ id }: { id: string }) => {
  return (
    <Box
      as={motion.div}
      position="absolute"
      layoutId={id}
      w="100%"
      h="100%"
      top="0"
      bg="text.500"
      zIndex="0"
      borderRadius="6"
    />
  );
};

const TagItem = ({
  tag,
  actived,
}: {
  tag: { title: string; href: string };
  actived: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <AILink
      href={tag.href}
      textAlign="center"
      p="6px 10px"
      w="100%"
      h="100%"
      display="block"
      _hover={{ textDecoration: 'none', color: 'text.50' }}
      zIndex="1"
      position="inherit"
      color={actived ? 'text.50' : 'text.200'}
      fontSize="sx"
    >
      {t(tag.title)}
    </AILink>
  );
};

export const AITags = ({
  tags,
  id,
  ...rest
}: {
  tags: { title: string; href: string }[];
  id: string;
}) => {
  const router = useRouter();

  return (
    <Box
      overflow="auto"
      p={{ base: '6px 30px' }}
      borderBottom="1px solid"
      borderColor="text.600"
      {...rest}
    >
      <UnorderedList
        display="flex"
        listStyleType="none"
        m="0"
        gap="10px"
        w="fit-content"
        bg="text.700"
        borderRadius="6"
        p="2px"
      >
        {tags.map((tag, idx) => {
          const isActived = router.asPath === tag.href;
          return (
            <ListItem key={idx} position="relative">
              {isActived ? <Underline id={id} /> : null}
              <TagItem tag={tag} actived={isActived} />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
