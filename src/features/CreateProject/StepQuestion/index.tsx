import { useGetQuestion } from '@/api/questions';
import { BackTo } from '@/components';
import { ArrowIcon } from '@/icons';
import { movePage } from '@/motion';
import { QUESTION_TYPE } from '@/types';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import _isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { IAnswer } from '../data';
import { QuestionMultiple, QuestionSingle, QuestionYesNo } from './components';
import { BoxSkeleton } from '@/components/Loading';

interface IStepQuestionProps {
  form: UseFormReturn<any>;
  handleSubmit: any;
  loading: boolean;
}

export const StepQuestion = ({
  form,
  handleSubmit,
  loading,
}: IStepQuestionProps) => {
  const { t } = useTranslation();
  const { control, setValue } = form;

  const appId = useWatch({
    control,
    name: 'appId',
  });

  const answers = useWatch({
    control,
    name: 'answers',
  });

  const questionStep = useWatch({
    control,
    name: 'questionStep',
  });

  const [activeQuestion, setActiveQuestion] = useState(questionStep);

  const { data: questions, isLoading } = useGetQuestion(appId);

  const handleNextStep = async (idx: number) => {
    if (!questions) return;

    if (idx === questions.data.length - 1) {
      await handleSubmit();

      setValue('questionStep', idx);
      return;
    }
    setActiveQuestion(idx + 1);
  };

  const renderQuestionWithType = (
    type: string,
    options: IAnswer[],
    index: number
  ) => {
    switch (type) {
      case QUESTION_TYPE.SINGLE:
        return (
          <QuestionSingle
            options={options}
            answer={answers as { [key: number]: IAnswer }}
            setAnswers={setValue}
            index={index}
          />
        );

      case QUESTION_TYPE.MULTI:
        return (
          <QuestionMultiple
            options={options}
            answer={answers as { [key: number]: IAnswer[] }}
            setAnswers={setValue}
            index={index}
          />
        );

      case QUESTION_TYPE.YESNO:
        return (
          <QuestionYesNo
            options={options}
            answer={answers as { [key: number]: IAnswer }}
            setAnswers={setValue}
            index={index}
          />
        );

      default:
        return (
          <QuestionSingle
            options={options}
            answer={answers as { [key: number]: IAnswer }}
            setAnswers={setValue}
            index={index}
          />
        );
    }
  };

  if (isLoading) return <LoadingComponent form={form} />;

  return (
    <Flex
      as={motion.div}
      {...movePage}
      gap={{ base: '24px', xxxl: '40px' }}
      direction="column"
      align="center"
      h="100%"
      minH="100vh"
      bg="url(/bg-gradient-top.png) top center no-repeat"
      bgSize="40%"
    >
      <Flex p={{ base: '24px', xxxl: '40px' }} w="100%">
        <AIImage url="/logo-bg-gradient.svg" h={{ base: '56px' }} />
      </Flex>

      {questions?.data?.map(
        (question, idx) =>
          idx === activeQuestion && (
            <Stack key={question.id} spacing={{ base: 6, xxxl: 10 }}>
              <Flex
                position="relative"
                bg="text.700"
                // w="900px"
                // h="500px"
                p={6}
                direction="column"
                borderRadius="16px"
                border="1px solid"
                borderColor="text.500"
              >
                <Flex gap={4} direction="column">
                  <Flex align="center" justify="space-between">
                    <BackTo
                      action={() =>
                        idx === 0
                          ? setValue('step', 'chooseApp')
                          : setActiveQuestion(idx - 1)
                      }
                    >
                      {t('back')}
                    </BackTo>

                    <AIText lineHeight="160%">
                      {4 + (idx + 1)}/{4 + questions?.data?.length}
                    </AIText>
                  </Flex>
                  <AIText lineHeight="140%" fontWeight="bold" fontSize="2xl">
                    {question.name}
                  </AIText>
                  {renderQuestionWithType(question.type, question.options, idx)}
                </Flex>
              </Flex>

              <Stack justify="center" align="center">
                <AIButton
                  fontWeight="bold"
                  maxW="200px"
                  rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
                  isDisabled={_isEmpty(answers?.[idx])}
                  onClick={() => handleNextStep(idx)}
                  isLoading={loading}
                >
                  {t('continue')}
                </AIButton>
              </Stack>
            </Stack>
          )
      )}
    </Flex>
  );
};

export const RadioBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex bg="text.500" borderRadius="6">
      {children}
    </Flex>
  );
};

// const DataSelected = () => {
//   return <Flex>1</Flex>;
// };

const LoadingComponent = ({ form }: { form: UseFormReturn<any> }) => {
  const { t } = useTranslation();
  const { setValue } = form;

  return (
    <Flex
      as={motion.div}
      {...movePage}
      gap={{ base: '24px', xxxl: '40px' }}
      direction="column"
      align="center"
      h="100%"
      minH="100vh"
      bg="url(/bg-gradient-top.png) top center no-repeat"
      bgSize="40%"
    >
      <Flex p={{ base: '24px', xxxl: '40px' }} w="100%">
        <AIImage url="/logo-bg-gradient.svg" h={{ base: '56px' }} />
      </Flex>

      <Stack spacing={{ base: 6, xxxl: 10 }}>
        <Flex
          position="relative"
          bg="text.700"
          w="900px"
          h="500px"
          p={6}
          direction="column"
          borderRadius="16px"
          border="1px solid"
          borderColor="text.500"
        >
          <Flex gap={4} direction="column">
            <Flex align="center" justify="space-between">
              <BackTo action={() => setValue('step', 'chooseApp')}>
                {t('back')}
              </BackTo>

              <AIText lineHeight="160%">...</AIText>
            </Flex>
            <BoxSkeleton w="500px" h="30px" />

            <Flex flexWrap="wrap" gap={4}>
              {Array.from({ length: 3 }, (_item, idx) => (
                <BoxSkeleton w="calc((900px / 3) - 32px)" h="150px" key={idx} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Stack>

      <Stack justify="center" align="center">
        <AIButton
          fontWeight="bold"
          maxW="200px"
          rightIcon={<Icon as={ArrowIcon} w="24px" h="24px" />}
        >
          {t('continue')}
        </AIButton>
      </Stack>
    </Flex>
  );
};
