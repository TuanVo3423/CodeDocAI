import { AIInput, AIText, AITextarea } from '@/ui-kit';
import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UseFormReturn } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<any>;
}

export const Left = ({ form }: IProps) => {
  const { t } = useTranslation();

  return (
    <Stack
      minH="calc(100vh - 57px)"
      spacing={3.5}
      maxW="304px"
      w="100%"
      p="16px"
      h="100%"
      borderRight="1px solid"
      borderColor="text.100"
    >
      <AIText
        fontSize="xs"
        color="text.300"
        fontStyle="italic"
        lineHeight="160%"
      >
        {t(
          'formal_document_that_outlines_the_detailed_requirements_and_expectations_of_a_project_or_system_from_a_business_perspective'
        )}
      </AIText>

      <AIInput
        form={form}
        name="tone_of_voice"
        type="text"
        label={'tone_of_voice'}
      />

      <AITextarea
        form={form}
        name="brief_of_project"
        label={'brief_of_project'}
      />

      <AIInput form={form} name="Keywords" type="text" label={'keywords'} />
    </Stack>
  );
};
