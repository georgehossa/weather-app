import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { getCurentWeather } from '~api/weather';
import { globalStyles } from '~styles/global';
import { COLORS } from '~theme';

const clouds = require('../../../assets/images/clouds.png');

type WeatherCardProps = {
  location: string;
};
const WeatherCard = ({ location }: WeatherCardProps) => {
  const [isDay, setIsDay] = useState<boolean | null>(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['currentWeather', location],
    queryFn: () => getCurentWeather(location),
  });

  useEffect(() => {
    if (data) {
      setIsDay(data.current.is_day === 1);
    }
  }, [data]);
  return (
    <View style={[styles.container, globalStyles.cardShadow]}>
      <LinearGradient
        colors={isDay ? COLORS.gradient.day : COLORS.gradient.night}
        style={styles.gradient}>
        <View style={styles.header}>
          <View>
            <Text
              style={[
                globalStyles.headingH1,
                isDay ? globalStyles.colorBlack : globalStyles.colorWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.name : 'Loading...'}
            </Text>
            <Text
              style={[
                globalStyles.paragraphSmall,
                isDay ? globalStyles.colorBlack : globalStyles.colorWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.region : 'Loading...'}
            </Text>
            <Text
              style={[
                globalStyles.paragraphSmall,
                isDay ? globalStyles.colorBlack : globalStyles.colorWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.country : 'Loading...'}
            </Text>
          </View>
          <View>
            <Text
              style={[
                globalStyles.paragraphLargeBold,
                isDay ? globalStyles.colorBlack : globalStyles.colorWhite,
              ]}>
              {!isLoading && !isError ? Math.trunc(data?.current?.temp_c) : 0}°
            </Text>
          </View>
        </View>
        <View style={styles.icon}>
          {!isLoading ? (
            <Image
              style={{ width: 64, height: 64 }}
              source={{ uri: `https:${data?.current?.condition?.icon}` }}
            />
          ) : (
            <ActivityIndicator />
          )}

          <Text
            style={[
              globalStyles.paragraphSmallBold,
              isDay ? globalStyles.colorBlack : globalStyles.colorWhite,
            ]}>
            {!isLoading && !isError ? data?.current?.condition?.text : `Can't find the city`}
          </Text>
        </View>
        <ImageBackground source={clouds} style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={globalStyles.headingH3}>
              {`${!isLoading && !isError ? data?.current?.wind_kph : 0} kph`}
            </Text>
            <Text style={globalStyles.paragraphSmall}>Wind</Text>
          </View>
          <View style={styles.footerRight}>
            <Text
              style={
                globalStyles.headingH3
              }>{`${!isLoading && !isError ? data?.current?.humidity : 0}%`}</Text>
            <Text style={globalStyles.paragraphSmall}>Humidity</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    flex: 1,
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  backgroundImageContainer: {
    flex: 1,
  },
  backgroundImage: {
    borderWidth: 1,
    flex: 1,
    resizeMode: 'contain',
    borderColor: 'red',
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    flexWrap: 'wrap',
    gap: 6,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flex: 1,
  },
  iconImage: {
    width: 64,
    height: 64,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  footerLeft: {
    alignItems: 'flex-start',
  },
  footerRight: {
    alignItems: 'flex-end',
  },
});
