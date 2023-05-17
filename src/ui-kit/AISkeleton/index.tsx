import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

interface ISkeletonProp {
  isLoading: boolean;
  children?: React.ReactElement;
}

export const AIBoxSkeleton = ({
  isLoading,
  children = <></>,
  ...rest
}: ISkeletonProp) => {
  return isLoading ? <Skeleton {...rest} /> : children;
};

export const AIInputSkeleton = ({
  isLoading,
  children = <></>,
  ...rest
}: ISkeletonProp) => {
  if (isLoading)
    return (
      <Stack mb="18px" width="100%" {...rest}>
        <Skeleton width="100px" height="10px" borderRadius="llg" />
        <Skeleton height="50px" width="100%" borderRadius="llg" />
      </Stack>
    );
  return children;
};
