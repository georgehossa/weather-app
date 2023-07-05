import { NavigationContainer } from '@react-navigation/native';

import MainStack from '~navigation/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
