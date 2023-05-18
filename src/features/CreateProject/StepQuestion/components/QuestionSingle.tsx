import { Box, Divider, Flex, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { RadioBox } from '..';
import _keyBy from 'lodash/keyBy';
import { IAnswer } from '../../data';

export interface IQuestionSingleProps {
  options: IAnswer[];
  answer?: { [key: number]: IAnswer };
  setAnswers: any;
  index: number;
}

export const QuestionSingle = ({
  options,
  answer,
  setAnswers,
  index,
}: IQuestionSingleProps) => {
  const [value, setValue] = useState<string>();
  const optionsKeyBy = _keyBy(options, 'id');

  const handleChange = (value: string) => {
    setValue(value);
    setAnswers('answers', { ...answer, [index]: optionsKeyBy[Number(value)] });
  };
  return (
    <Stack spacing={8}>
      <Flex>
        <RadioGroup
          onChange={handleChange}
          value={value || String(answer?.[index]?.id)}
        >
          <Flex gap={4} flexWrap="wrap">
            {options?.map((option) => (
              <Box mt={4}>
                <RadioBox key={option.id}>
                  <Radio
                    value={String(option.id)}
                    h="80px"
                    w="272px"
                    p="6px 40px"
                  >
                    {option.name}
                  </Radio>
                </RadioBox>
              </Box>
            ))}
          </Flex>
        </RadioGroup>
      </Flex>
      <Divider bg="text.500" />
      {/* <DataSelected /> */}
    </Stack>
  );
};
