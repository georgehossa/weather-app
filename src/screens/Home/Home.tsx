import { RouteProp, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WeatherCard, Header, Forecast } from '~components';
import { HomeTabParamList } from '~navigation/types';

type HomeScreenRouteProp = RouteProp<HomeTabParamList, 'Home'>;

const Home = () => {
  const [location, setLocation] = useState('london');
  const route = useRoute<HomeScreenRouteProp>();
  // TODO: move this logic to a custom hook
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      if (!route.params) {
        setLocation(`${location.coords.latitude},${location.coords.longitude}`);
      } else {
        if (route.params && 'place' in route.params) {
          setLocation(`id:${route.params?.place?.id}`);
        }
      }
    })();
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.weatherContainer}>
        <WeatherCard location={location} />
      </View>
      <View style={styles.forecastContainer}>
        <Forecast location={location} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
  },
  weatherContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 3,
    padding: 16,
  },
  forecastContainer: {
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 90 : 120,
  },
});

export default Home;
