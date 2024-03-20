import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabNavigation from './HomeTabNavigation';

import { Login, SignUp, Welcome } from '~screens';

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerStack.Navigator initialRouteName="Welcome">
    <DrawerStack.Screen name="Welcome" component={Welcome} />
    <DrawerStack.Screen name="SignUp" component={SignUp} />
    <DrawerStack.Screen name="Login" component={Login} />
    <DrawerStack.Screen name="HomeStack" component={HomeTabNavigation} />
  </DrawerStack.Navigator>
);

export default DrawerNavigation;
