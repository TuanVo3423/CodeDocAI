import { ICategory, useGetCategories } from '@/api/category';
import { ArrowIcon } from '@/icons';
import { AIButton, AIText } from '@/ui-kit';
import { Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { LayoutAnswerQuestion } from '../components';
import { FEATURE_STATUS } from '@/types';
import { BoxSkeleton } from '@/components/Loading';

interface IStepChooseCategoryProps {
  form: UseFormReturn<any>;
  categories?: ICategory[];
}

export const StepChooseCategory = ({ form }: IStepChooseCategoryProps) => {
  const { control } = form;
  const { t } = useTranslation();

  const categoryId = useWatch({
    control,
    name: 'categoryId',
  });

  const { data: categories, isLoading } = useGetCategories({});

  return (
    <LayoutAnswerQuestion
      title="Choose category"
      previousStep={'askDescription'}
      form={form}
      step={4}
      action={
        <AIButton
          fontWeight="bold"
          type="submit"
          form="form-create-project"
          minW="200px"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
          isDisabled={!categoryId}
        >
          Continue
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
      <RenderList form={form} categories={categories?.data} />
    </LayoutAnswerQuestion>
  );
};

const RenderList = ({ form, categories }: IStepChooseCategoryProps) => {
  const { t } = useTranslation();
  const { setValue, control } = form;

  const categoryId = useWatch({
    control,
    name: 'categoryId',
  });

  return (
    <SimpleGrid spacing={4} flex={1} columns={3}>
      {categories?.map((item) => (
        <Flex
          cursor="pointer"
          position="relative"
          key={item.id}
          w="100px"
          h="64px"
          bg={`linear-gradient(180deg, rgba(20, 19, 24, 0) 0%, rgba(20, 19, 24, 0.4) 100%), url(${item.thumbnail}) center no-repeat`}
          bgSize="contain"
          borderRadius="6"
          align="center"
          overflow="hidden"
          p="10px"
          opacity={categoryId ? (categoryId === item.id ? '1' : '0.2') : '1'}
          onClick={() =>
            item.status === FEATURE_STATUS.LAUNCH &&
            setValue('categoryId', item.id)
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
          <AIText>{item.name}</AIText>
        </Flex>
      ))}
    </SimpleGrid>
  );
};
