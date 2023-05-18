import { CreateProject } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../result/components/layout';
import { Box } from '@chakra-ui/react';

export default function CreateProjectPage() {
  return (
    <Box>
      <Head>
        <title>Create project - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Create project tracking page"
        />
      </Head>
      <Layout>
        <CreateProject />
      </Layout>
    </Box>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(context.locale as string, ['common'])),
//       // Will be passed to the page component as props
//     },
//   };
// };
