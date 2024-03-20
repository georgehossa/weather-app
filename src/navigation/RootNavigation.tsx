import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import DrawerNavigation from './DrawerNavigation';

import type { RootStackParamList } from '~navigation/types';
import { Splash } from '~screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const commonOptions = {
  headerShown: false,
  gestureEnabled: true,
};
const RootNavigation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerStack', { screen: 'Welcome' });
    }, 3000);
  });
  return (
    <RootStack.Navigator initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={Splash} options={commonOptions} />
      <RootStack.Screen name="DrawerStack" component={DrawerNavigation} options={commonOptions} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
