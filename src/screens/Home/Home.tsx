import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WeatherCard = () => {
  return (
    <View>
      <Text>Card</Text>
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.weatherContainer}>
        <WeatherCard />
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
