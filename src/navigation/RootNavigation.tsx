import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigation from './DrawerNavigation';

import type { RootStackParamList } from '~navigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const commonOptions = {
  headerShown: false,
  gestureEnabled: true,
};
const RootNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Splash">
      <RootStack.Screen name="DrawerStack" component={DrawerNavigation} options={commonOptions} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
