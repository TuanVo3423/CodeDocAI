import { AIText } from '@/ui-kit';
import React from 'react';
import Typist from 'react-typist';
import { useTranslation } from 'next-i18next';
import styled from '@emotion/styled';

const Wrapper = styled(Typist)`
  .Cursor {
    display: inline-block;
  }
  .Cursor--blinking {
    display: none;
  }
`;

export const TypistCustom = ({
  content,
  typistDelay = 0,
}: {
  content: string[];
  typistDelay?: number;
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper avgTypingDelay={30} cursor={{ hideWhenDone: true }}>
      {content.map((item, idx) => (
        <AIText
          key={idx}
          bg="rgba(136, 135, 143, 0.7)"
          borderRadius={idx === content.length - 1 ? '6px 6px 6px 0px' : '6px'}
          p="10px 18px"
          position="relative"
          w="fit-content"
          maxW="400px"
          mb={idx === content.length - 1 ? '15px' : '6px'}
          fontSize="14px"
          _before={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-11px',
            w: '11px',
            h: '11px',
            background: 'url(/triangle.png) center no-repeat',
            bgSize: 'contain',
            display: idx === content.length - 1 ? 'block' : 'none',
          }}
        >
          {t(item)}
          <Typist.Delay ms={typistDelay} />
        </AIText>
      ))}
    </Wrapper>
  );
};
