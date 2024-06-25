import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ForecastCard from '../forecastCard/ForecastCard';

import { getForecast } from '~api/weather';
import { globalStyles } from '~styles/global';
import { CurrentDayForecast } from '~types/forecast.types';

type ForecastProps = {
  location: string;
};

const Forecast = ({ location = 'London' }: ForecastProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dayForecast', location],
    queryFn: () => getForecast(location),
  });
  const currentDayForecast = data?.forecast?.forecastday[0].hour;

  const getForecastForNextHours = (currentDayForecast: CurrentDayForecast[]) => {
    const currentHour = new Date().getHours();
    const forecastForNextHours = currentDayForecast?.filter((item: CurrentDayForecast) => {
      const itemHour = new Date(item.time).getHours();
      return itemHour > currentHour;
    });
    return forecastForNextHours;
  };

  return (
    <View>
      <Text style={[globalStyles.headingH3, styles.title]}>Today</Text>
      {!isLoading && !isError && (
        <FlatList
          data={getForecastForNextHours(currentDayForecast)}
          renderItem={({ item }) => <ForecastCard hour={item} />}
          horizontal
          style={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingStart: 16,
  },
  title: {
    marginVertical: 8,
    paddingStart: 16,
  },
});

export default Forecast;
