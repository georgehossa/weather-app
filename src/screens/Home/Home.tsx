import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getCurentWeather } from '~api/weather';
import { WeatherCard, Header } from '~components';

const Forecast = () => {
  return (
    <View>
      <Text>Forecast</Text>
    </View>
  );
};

const Home = () => {
  const [location] = useState('Envigado');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['currentWeather', location],
    queryFn: () => getCurentWeather(location),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.weatherContainer}>
        <WeatherCard data={data} isLoading={isLoading} isError={isError} />
      </View>
      <View style={styles.forecastContainer}>
        <Forecast />
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
    backgroundColor: 'purple',
    marginBottom: Platform.OS === 'ios' ? 90 : 120,
  },
});

export default Home;
