import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Favorites, Home, Login, Search, SignUp, Splash } from '~screens';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default MainStack;
