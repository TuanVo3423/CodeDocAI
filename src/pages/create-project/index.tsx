import { CreateProject } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function CreateProjectPage() {
  return (
    <>
      <Head>
        <title>Create project - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Create project tracking page"
        />
      </Head>
      <CreateProject />
    </>
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
