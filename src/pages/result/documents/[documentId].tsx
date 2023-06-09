import { StepDocument } from '@/features/CreateProject/StepDocument';
import DocumentWatch from '@/features/Dashboard/DocumentWatch';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TabLeftTitle = [
  {
    content: 'Documents',
  },
  // {
  //     content: "Todos",
  //     icon: AddIcon,
  // },
];
const TabTopTitle = [
  {
    content: 'Vision and Goals',
  },
  // {
  //   content: 'Board',
  // },
  // {
  //   content: 'Backlog',
  // },
  // {
  //   content: 'Epic',
  // },
];

const DocumentPage = () => {
  const form = useForm();

  const {
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = form;

  const router = useRouter();
  const selectionId = Number(router.query.documentId);

  useEffect(() => {
    console.log('select id', selectionId);
    setValue('selectionId', selectionId);
  }, [selectionId]);

  return (
    <Box>
      <DocumentWatch />
    </Box>
  );
};

export default DocumentPage;
