import { GlobalLoading, Welcome } from '@/components/Loading';
import { RouteGuard } from '@/layouts';
import { LocalStorage } from '@/services/localStorage';
import theme from '@/theme';
import { Fonts } from '@/theme/components/fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // the query will not refetch on window focus
            // keepPreviousData: true, // any previous data will be kept when fetching new data because the query key changed.
            notifyOnChangeProps: 'tracked', // access to properties will be tracked, and the component will only re-render when one of the tracked properties change. (It has been set by default on v4)
            refetchOnReconnect: 'always', //  the query will always refetch on reconnect.
            retry: false,
          },
        },
      })
  );

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouteGuard>
          <Fonts />

          <Component {...pageProps} />
          <GlobalLoading />
          {/* {LocalStorage.get('welcome') && <Welcome />} */}
        </RouteGuard>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
