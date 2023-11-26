import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  DrawerStack: NavigatorScreenParams<DrawerStackParamList> | undefined;
  Splash: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type DrawerStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  HomeStack: undefined;
};

export type DrawerStackScreenProps<T extends keyof DrawerStackParamList> = CompositeScreenProps<
  DrawerScreenProps<DrawerStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
