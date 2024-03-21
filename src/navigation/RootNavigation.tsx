import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabNavigation from './HomeTabNavigation';

import type { RootStackParamList } from '~navigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const commonOptions = {
  headerShown: false,
  gestureEnabled: true,
};
const RootNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeStack">
      <RootStack.Screen name="HomeStack" component={HomeTabNavigation} options={commonOptions} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
