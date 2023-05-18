import { LocalStorage } from '@/services/localStorage';
import { useGlobalLoading } from '@/store';
import { AIImage, AIText } from '@/ui-kit';
import {
  Flex,
  FlexProps,
  Progress,
  Skeleton,
  SkeletonProps,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import LoadingJson from './loadinggif.json';
import Lottie from 'react-lottie';

export const GlobalLoading = () => {
  const toggle = useGlobalLoading((state) => state.toggle);
  const { t } = useTranslation();

  return (
    <Stack
      position="absolute"
      w="100%"
      h="100%"
      top="0"
      left="0"
      right="0"
      bottom="0"
      justify="center"
      align="center"
      bg="text.800"
      spacing={5}
      zIndex="tooltip"
      display={toggle ? 'flex' : 'none'}
    >
      <AIImage
        url="logo-bg-gradient.svg"
        alt="logo-gradient"
        w="140px"
        h="140px"
      />

      <Progress
        isIndeterminate
        w="220px"
        h="4px"
        borderRadius="30px"
        mt="44px !important"
        sx={{ div: { bg: 'pri.1' } }}
      />

      <Stack textAlign="center">
        <AIText color="text.300">{toggle}</AIText>
        <AIText color="text.300" fontSize="xs">
          ({t('it_may_take_you_about1_to2_minutes')})
        </AIText>
      </Stack>
    </Stack>
  );
};

interface ISkeletonProps extends SkeletonProps {}

export const BoxSkeleton = ({ ...rest }: ISkeletonProps) => {
  return <Skeleton borderRadius="6" {...rest} />;
};

const variantsWelcome = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0,
    transition: { duration: 0.5 },
    transitionEnd: { display: 'none' },
  },
};

export const Welcome = () => {
  const [isShow, setIsShow] = useState(false);
  const videoRef = useRef(null);

  const handleVideoTimeUpdate = () => {
    //@ts-ignore
    const currentTime = videoRef?.current?.currentTime;
    currentTime > 6.3 && setIsShow(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      LocalStorage.set('welcome', false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      as={motion.div}
      variants={variantsWelcome}
      animate={isShow ? 'show' : 'hidden'}
      position="fixed"
      w="100%"
      h="100%"
      top="0"
      left="0"
      bottom="0"
      right="0"
      bg="text.900"
      zIndex="overlay"
      className="123123123"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: 'cover' }}
        ref={videoRef}
        onTimeUpdate={handleVideoTimeUpdate}
      >
        <source src="/Welcome.mov" />
      </video>
    </Flex>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface ILoadMoreProps extends FlexProps {
  title: string;
}

export const LoadMore = ({ title, ...rest }: ILoadMoreProps) => {
  const { t } = useTranslation();

  return (
    <Flex align="center" justify="center" gap="14px" color="text.200" {...rest}>
      <Lottie
        options={defaultOptions}
        width="40px"
        height="40px"
        style={{ margin: 0 }}
      />
      {/* {t(title)} */}
      Document is loading...
    </Flex>
  );
};
