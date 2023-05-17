import { AILabel, AIText } from '@/ui-kit';
import {
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  Stack,
} from '@chakra-ui/react';
import _find from 'lodash/find';
import _isEmpty from 'lodash/isEmpty';
import _remove from 'lodash/remove';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { IAnswer } from '../../data';

export interface IPropsQuestion {
  options: IAnswer[];
  answer?: { [key: number]: IAnswer[] };
  setAnswers: any;
  index: number;
}

export const QuestionMultiple = ({
  options,
  answer,
  setAnswers,
  index,
}: IPropsQuestion) => {
  const [dataSelected, setDataSelected] = useState<IAnswer[]>(
    answer ? answer[index] : []
  );
  const { t } = useTranslation();

  const handleSelected = (value: IAnswer) => {
    const data = dataSelected || [];
    if (_find(data, (item) => item.id === value.id)) {
      _remove(data, (item) => item.id === value.id);
    } else {
      data.push(value);
    }
    setDataSelected(data);
    setAnswers('answers', { ...answer, [index]: data });
  };
  return (
    <Stack spacing={8} mt="-10px">
      <Stack spacing={4}>
        <AIText color="text.400" fontSize="sm">
          {t('please_choose_required_features_below')}
        </AIText>

        <Flex>
          <FormControl>
            <AILabel fontSize="lg" fontWeight="bold" color="text.0" mb="16px">
              {t('enough_for_mvp')}
            </AILabel>

            <CheckboxGroup>
              <Stack spacing={2.5}>
                {options?.map((option) => {
                  return (
                    <Checkbox
                      // value={option.id}
                      isChecked={
                        !_isEmpty(
                          _find(dataSelected, (item) => item.id === option.id)
                        )
                      }
                      key={option.id}
                      onChange={() => handleSelected(option)}
                    >
                      {option.name}
                    </Checkbox>
                  );
                })}
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </Flex>
      </Stack>
      <Divider bg="text.500" />
      {/* <DataSelected /> */}
    </Stack>
  );
};
