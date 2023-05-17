import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface AILinkProps extends LinkProps {}

export const AILink = ({ href, children, ...rest }: AILinkProps) => {
  return (
    <Link as={NextLink} href={href} fontSize={{ base: 'sm' }} {...rest}>
      {children}
    </Link>
  );
};
