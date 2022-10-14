import { AuthProvider } from 'containers/authentication/auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient();

const ReactQueryProvider = function ({ children }: {children: React.ReactNode}): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools />
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
