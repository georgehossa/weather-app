import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabNavigation from './HomeTabNavigation';

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerStack.Navigator initialRouteName="HomeStack">
    <DrawerStack.Screen name="HomeStack" component={HomeTabNavigation} />
  </DrawerStack.Navigator>
);

export default DrawerNavigation;
