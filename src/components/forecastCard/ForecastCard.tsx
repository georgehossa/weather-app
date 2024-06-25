import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '~styles/global';
import { COLORS } from '~theme';
import { CurrentDayForecast } from '~types/forecast.types';

type ForecastCardProps = {
  hour: CurrentDayForecast;
};
const ForecastCard = ({ hour }: ForecastCardProps) => {
  const [isDay, setIsDay] = useState<boolean | null>(null);
  const date = new Date(hour?.time);
  useEffect(() => {
    if (hour) {
      setIsDay(hour.is_day === 1);
    }
  }, [hour]);

  const formatedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  const formatedTemp = `${Math.trunc(hour?.temp_c)}°`;

  return (
    <View style={[globalStyles.cardShadow, styles.cardContainer]}>
      <LinearGradient
        colors={isDay ? COLORS.gradient.day : COLORS.gradient.night}
        style={styles.container}>
        <View>
          <Image style={styles.icon} source={{ uri: `https:${hour.condition.icon}` }} />
        </View>
        <View>
          <Text style={[globalStyles.headingH1, !isDay ? globalStyles.colorWhite : null]}>
            {formatedTemp}
          </Text>
          <Text style={[globalStyles.paragraphSmall, !isDay ? globalStyles.colorWhite : null]}>
            {formatedTime}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    marginEnd: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 8,
    gap: 16,
  },
  icon: {
    width: 64,
    height: 64,
  },
});

export default ForecastCard;
