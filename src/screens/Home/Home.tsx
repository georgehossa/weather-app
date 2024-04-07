import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getCurentWeather } from '~api/weather';

const WeatherCard = ({ data }: any) => {
  return (
    <View>
      <Text>{data?.location?.name}</Text>
      <Text>{data?.location?.country}</Text>
      <Text>{data?.current?.temp_c}°</Text>
      <Text>{data?.current?.condition?.text}</Text>
    </View>
  );
};

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

const Forecast = () => {
  return (
    <View>
      <Text>Forecast</Text>
    </View>
  );
};

const Home = () => {
  const [location] = useState('London');
  const { data } = useQuery({
    queryKey: ['currentWeather', location],
    queryFn: () => getCurentWeather(location),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.weatherContainer}>
        <WeatherCard data={data} />
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
    backgroundColor: 'blue',
    height: 60,
  },
  weatherContainer: {
    width: '100%',
    flex: 3,
    backgroundColor: 'green',
  },
  forecastContainer: {
    width: '100%',
    backgroundColor: 'purple',
    marginBottom: Platform.OS === 'ios' ? 90 : 120,
  },
});

export default Home;
