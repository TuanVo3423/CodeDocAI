import { Overview } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function OverviewPage() {
  return (
    <>
      <Head>
        <title>Overview - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Overview page"
        />
      </Head>
      <Overview />
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
