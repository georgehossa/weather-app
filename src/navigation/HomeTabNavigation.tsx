import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabParamList } from './types';

import { Favorites, Home, Search } from '~screens';

const HomeTabStack = createBottomTabNavigator<HomeTabParamList>();
const commonOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  gestureEnabled: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 24,
    height: 80,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#049AD9',
    borderRadius: 16,
    shadowColor: '#025C82',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  tabBarItemStyle: {
    height: 80,
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#025C82',
};

const HomeTabNavigation = () => (
  <HomeTabStack.Navigator initialRouteName="Home" screenOptions={commonOptions}>
    <HomeTabStack.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
      }}
    />
    <HomeTabStack.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
      }}
    />
    <HomeTabStack.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
      }}
    />
  </HomeTabStack.Navigator>
);

export default HomeTabNavigation;
