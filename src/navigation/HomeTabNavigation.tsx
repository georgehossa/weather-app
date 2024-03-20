import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabParamList } from './types';

import { Favorites, Home, Search } from '~screens';

const HomeTabStack = createBottomTabNavigator<HomeTabParamList>();
const commonOptions = {
  headerShown: false,
  gestureEnabled: true,
};

const HomeTabNavigation = () => (
  <HomeTabStack.Navigator initialRouteName="Home" screenOptions={commonOptions}>
    <HomeTabStack.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        tabBarShowLabel: false,
      }}
    />
    <HomeTabStack.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        tabBarShowLabel: false,
      }}
    />
    <HomeTabStack.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
        tabBarShowLabel: false,
      }}
    />
  </HomeTabStack.Navigator>
);

export default HomeTabNavigation;
