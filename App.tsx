import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootNavigation from '~navigation/RootNavigation';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
