import { CalendarTracking } from '@/features';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function CalendarTrackingPage() {
  return (
    <>
      <Head>
        <title>Calendar tracking - Sparkplan.AI</title>
        <meta
          name="description"
          content="Meta description for the Calendar tracking page"
        />
      </Head>
      <CalendarTracking />
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
