import { Welcome } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function LogoPage() {
  return (
    <>
      <Head>
        <title>Welcome - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Welcome document page"
        />
      </Head>
      <Welcome />
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
