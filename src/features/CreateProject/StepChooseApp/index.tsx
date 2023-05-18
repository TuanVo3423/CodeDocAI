import { AIButton, AIImage } from '@/ui-kit';

import { ICategory, useGetCategory } from '@/api/category';
import { ArrowIcon } from '@/icons';
import { Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { LayoutAnswerQuestion } from '../components';
import { FEATURE_STATUS } from '@/types';
import { BoxSkeleton } from '@/components/Loading';

interface IStepChooseAppProps {
  form: UseFormReturn<any>;
  category?: ICategory[];
}

export const StepChooseApp = ({ form }: IStepChooseAppProps) => {
  const { t } = useTranslation();
  const { control } = form;

  const appId = useWatch({
    control,
    name: 'appId',
  });

  const categoryId = useWatch({
    control,
    name: 'categoryId',
  });

  const { data: category, isLoading } = useGetCategory(categoryId);

  return (
    <LayoutAnswerQuestion
      title="Choose app"
      previousStep={'chooseCategory'}
      form={form}
      step={5}
      action={
        <AIButton
          fontWeight="bold"
          type="submit"
          form="form-create-project"
          minW="200px"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
          isDisabled={!appId}
        >
          {t('continue')}
        </AIButton>
      }
    >
      {isLoading && (
        <Flex flexWrap="wrap" gap={4}>
          {Array.from({ length: 10 }, (_item, idx) => (
            <BoxSkeleton w="156px" h="64px" key={idx} />
          ))}
        </Flex>
      )}
      <RenderList form={form} category={category?.data?.apps} />
    </LayoutAnswerQuestion>
  );
};

const RenderList = ({ form, category }: IStepChooseAppProps) => {
  const { t } = useTranslation();
  const { setValue, control } = form;

  const appId = useWatch({
    control,
    name: 'appId',
  });

  return (
    <SimpleGrid spacing={4} columns={3}>
      {category?.map((item) => (
        <Flex
          cursor="pointer"
          position="relative"
          key={item.id}
          w="100px"
          h="64px"
          bg={`#FFFFFF`}
          borderRadius="6"
          align="center"
          overflow="hidden"
          p="6px 10px"
          opacity={appId ? (appId === item.id ? '1' : '0.2') : '1'}
          onClick={() =>
            item.status === FEATURE_STATUS.LAUNCH && setValue('appId', item.id)
          }
          _hover={{
            _before: {
              display: item.status === FEATURE_STATUS.LAUNCH ? 'none' : 'flex',
            },
          }}
          _before={{
            content: `"${t('coming_soon')}"`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'none',
            w: '100%',
            h: '100%',
            fontSize: 'sm',
            p: '10px',
            pt: '20px',
            background: 'rgba(20, 19, 24, 0.8)',
            backdropFilter: 'blur(2px)',
          }}
        >
          <AIImage
            url={item.thumbnail}
            w="100px"
            h="64px"
            alt="app-logo"
            objectFit="contain"
          />
        </Flex>
      ))}
    </SimpleGrid>
  );
};
