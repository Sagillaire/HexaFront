import { ReactNode } from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface QueryProviderInterface { children: ReactNode }

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryClientProviderGlobal = ({ children }: QueryProviderInterface) => {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
    </QueryClientProvider>
  )
};
