import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Splash } from '~screens';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default MainStack;
