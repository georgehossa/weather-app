import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from '~navigation/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
