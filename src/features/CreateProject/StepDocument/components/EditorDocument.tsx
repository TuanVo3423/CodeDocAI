import { LoadMore, TooltipWhatIsCoin } from '@/components';
import { LocalStorage } from '@/services/localStorage';
import { AIButton, AIImage, AIText } from '@/ui-kit';
import { Box, Flex } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { PROJECT_AUTH_TOKEN } from '@/constants';

const init = {
  height: 'calc(100vh - 121px)',
  menubar: true,
  statusbar: false,
  // promotion: true,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'code',
    'help',
    'wordcount',
  ],
  toolbar:
    'undo redo | blocks | ' +
    'bold italic forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image ' +
    'removeformat | help',
  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
};

interface IProps {
  form: UseFormReturn<any>;
}

const EditorDocument = ({ form }: IProps) => {
  const { t } = useTranslation();
  const editorRef = useRef(null);
  const router = useRouter();
  const { control } = form;

  const document = useWatch({
    control,
    name: 'document',
  });

  const profile = LocalStorage.get(PROJECT_AUTH_TOKEN);

  return (
    <Box
      w="100%"
      h="100%"
      sx={{
        '.tox-tinymce': { border: 'none' },
      }}
    >
      <Editor
        apiKey="a5fqv7dvq9lzeg6egfnfgcq0x3tfieeqlj6cqc9cndny0i0a"
        //@ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={document}
        init={init}
      />

      <Flex
        p="10px 16px"
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="text.100"
      >
        <Flex gap="10px">
          <Flex align="center" gap="8px">
            <AIImage url="/coin.svg" alt="coin" w="30px" h="30px" />
            <AIText
              fontSize="md"
              color="text.900"
              fontWeight="bold"
              minW="60px"
            >
              {t('coins', { number: 3 })}
            </AIText>

            <TooltipWhatIsCoin />
          </Flex>
          <AIButton maxW="90px" variant="dark-fill" h="30px">
            {t('subscribe')}
          </AIButton>
        </Flex>

        {!document && (
          <Box w="100%">
            <LoadMore title="document_creation_in_progress" />
          </Box>
        )}

        <Flex gap="10px">
          <AIButton minW="180px" variant="dark-fill" isDisabled={!document}>
            {t('export_to')}
          </AIButton>
          <AIButton
            minW="180px"
            variant="primary-fill-while"
            onClick={() => {
              profile ? router.push('/') : router.push('/auth/sign-up');
              LocalStorage.set('isNewDocument', true);
            }}
            isDisabled={!document}
          >
            {t('save_changes')}
          </AIButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EditorDocument;
