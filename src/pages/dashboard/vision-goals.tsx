import { VisionGoals } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function VisionGoalsPage() {
  return (
    <>
      <Head>
        <title>Vision & Goals - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Vision & Goals page"
        />
      </Head>
      <VisionGoals />
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
