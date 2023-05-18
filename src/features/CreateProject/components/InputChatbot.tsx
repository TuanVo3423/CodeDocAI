import { SendIcon } from '@/icons';
import {
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

interface IInputChatbotProps extends InputProps {
  valueInput: string;
  onChange: any;
  onKeyDown: any;
  onClick: any;
}

export const InputChatbot = ({
  onChange,
  valueInput,
  placeholder,
  onKeyDown,
  onClick,
}: IInputChatbotProps) => {
  const { t } = useTranslation();

  return (
    <InputGroup>
      <Input
        type="text"
        placeholder={t(placeholder || '') || ''}
        variant="primary-dark"
        bg="rgba(95, 93, 105, 0.35)"
        border="none"
        backdropFilter="blur(4px)"
        onChange={onChange}
        value={valueInput}
        onKeyDown={onKeyDown}
      />
      <InputRightElement onClick={onClick} w="44px" h="44px">
        <Icon as={SendIcon} w="24px" h="24px" />
      </InputRightElement>
    </InputGroup>
  );
};

// import { SendIcon } from '@/icons';
// import { AIInput } from '@/ui-kit';
// import { Icon } from '@chakra-ui/react';
// import React from 'react';
// import { UseFormReturn } from 'react-hook-form';

// interface IInputChatbotProps {
//   form: UseFormReturn<any>;
//   name: string;
//   valueInput: string;
//   onKeyDown: any;
//   placeholder?: string;
// }

// export const InputChatbot = ({
//   form,
//   name,
//   placeholder,
//   onKeyDown,
//   valueInput,
// }: IInputChatbotProps) => {
//   return (
//     <AIInput
//       form={form}
//       name={name}
//       type="text"
//       placeholder={placeholder}
//       variant="primary-dark"
//       bg="rgba(95, 93, 105, 0.35)"
//       border="none"
//       backdropFilter="blur(4px)"
//       rightElement={<Icon as={SendIcon} w="24px" h="24px" />}
//       value={valueInput}
//       onKeyDown={onKeyDown}
//     />
//   );
// };
