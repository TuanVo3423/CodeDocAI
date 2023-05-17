import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

interface IAIImageProps extends ImageProps {
  url: string;
}

export const AIImage = ({ url, alt, ...rest }: IAIImageProps) => {
  return <Image src={url} alt={alt} {...rest} />;
};
